export type LanguageDataType = {
    [key: string]: {
        footer: {
            p_1: string;
            p_2: string;
        },
        contact: {
            p_1: string;
        },
        about: {
            h1: string;
            h2_1: string;
            p_1: string;
            h2_2: string;
            p_2: string;
            p_3: string;
            h2_3: string;
            p_4: string;
        };
        skills: {
            h1: string;
            h2_1: string;
            h2_2: string;
            h2_3: string;
            h2_4: string;
            h2_5: string;
            code_languages: {
                name: string;
                level: number;
                alt: string;
                icon: string;
                id: number;
            }[];
            frameworks: {
                name: string;
                level: number;
                alt: string;
                icon: string;
                id: number;
            }[];
            libraries_tools: {
                name: string;
                level: number;
                alt: string;
                icon: string;
                id: number;
            }[];
            softwares: {
                name: string;
                level: number;
                alt: string;
                icon: string;
                id: number;
            }[];
            skills_hardwares: {
                name: string;
                level: number;
                alt: string;
                icon: string;
                id: number;
            }[];
        };
        certificates: {
            id: number;
            name: string;
            date: string;
            origin: string;
            image: string;
        }[];
    };
};
