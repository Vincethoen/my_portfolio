import { createContext, ReactNode, useState, useEffect } from 'react';
import { LanguageDataType } from './Types';

export type LanguageContextType = {
    language: string;
    toggleLanguage: () => void;
    data: LanguageDataType | null;
    doneLoading: boolean;
    error: string | null;
};

const defaultContextValue: LanguageContextType = {
    language: 'EN',
    toggleLanguage: () => { },
    data: null,
    doneLoading: false,
    error: null,
};


export const LanguageContext = createContext<LanguageContextType>(defaultContextValue);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [data, setData] = useState<LanguageDataType | null>(null);
    const [doneLoading, setLoading] = useState<boolean>(false);
    const [language, setLanguage] = useState<string>('EN');
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        localStorage.setItem('language', JSON.stringify(language));
    }, [language]);

    const toggleLanguage = () => {
        setLanguage(prevMode => prevMode === 'EN' ? 'NL' : 'EN');
    };

    const fetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/db.json');
            if (!response.ok) {
                throw new Error('Network response error..');
            }
            const jsonData = await response.json();
            setData(jsonData);
        } catch (error) {
            setError(`Fetching Error: ${error}`);
        } finally {
            setLoading(true);
        }
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, data, doneLoading, error }}>
            {children}
        </LanguageContext.Provider>
    );
};
