import { createContext, ReactNode, useState, useEffect } from 'react';

export type ThemeContextType = {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const defaultContextValue: ThemeContextType = {
    darkMode: false,
    toggleDarkMode: () => { }
}

export const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const savedTheme = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState<boolean>(savedTheme || false);

    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}
