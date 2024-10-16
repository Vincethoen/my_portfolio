import { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/themeContext';
import { LanguageContext } from '../context/LanguageContext';
import '../css/nav-style.css';

const NavComponent = () => {
    const [isPortrait, setIsPortrait] = useState(false);
    const languageContext = useContext(LanguageContext)
    const themeContext = useContext(ThemeContext);

    const { darkMode, toggleDarkMode } = themeContext;
    const { language, toggleLanguage } = languageContext;

    const checkOrientation = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
    };

    useEffect(() => {
        checkOrientation();

        window.addEventListener('resize', checkOrientation);

        return () => {
            window.removeEventListener('resize', checkOrientation);
        };
    }, []);

    return (
        <nav className='navigation' id='navigation'>
            {isPortrait ?
                <>
                    <a href="/home" className='logo-button'>
                        <img src={darkMode ? 'icons/logo-dark.svg' : 'icons/logo-light.svg'} className='logo' />
                        <p>Vince 't Hoen</p>
                    </a>
                    <div id='menu-icon'>
                        <div className='menu-icon'>
                            {
                                <a onClick={toggleDarkMode}>{ }
                                    <img src={
                                        darkMode ? "/icons/mobile/dark/dark-icon.svg"
                                            : "/icons/mobile/light-icon.svg"
                                    } alt="dark/light button" />
                                </a>
                            }
                        </div>
                        <div className='menu-icon language-container'>
                            <a onClick={toggleLanguage}>
                                <img src={
                                    language === 'NL' ? '/icons/mobile/nl-icon.svg'
                                        : '/icons/mobile/en-icon.svg'
                                } alt="language icon" />
                            </a>
                        </div>
                        <div className='menu-icon'>
                            <a href="/about">
                                <img src={
                                    darkMode ? "/icons/mobile/dark/about-icon.svg"
                                        : "/icons/mobile/about-icon.svg"

                                } alt="about button" />
                            </a>
                        </div>
                        <div className='menu-icon'>
                            <a href="/portfolio">
                                <img src={
                                    darkMode ? "/icons/mobile/dark/projects-icon.svg"
                                        : "/icons/mobile/projects-icon.svg"
                                } alt="projects button" />
                            </a>
                        </div>
                        <div className='menu-icon'>
                            <a href="/contact">
                                <img src={
                                    darkMode ? "/icons/mobile/dark/contact-icon.svg"
                                        : "/icons/mobile/contact-icon.svg"

                                } alt="contact button" />
                            </a>
                        </div>
                    </div>
                </> : <>
                    <a href="/home" className='logo-button'>
                        <img src={darkMode ? 'icons/logo-dark.svg' : 'icons/logo-light.svg'} className='logo' />
                        <p>Vince 't Hoen</p>
                    </a>
                    <div className='centered'>
                        <div id='menu-items'>
                            <div className='menu-item'>
                                {
                                    language === 'NL' ?
                                        <a onClick={toggleDarkMode}>{darkMode ? 'Nacht' : 'Dag'}</a>
                                        :
                                        <a onClick={toggleDarkMode}>{darkMode ? 'Night' : 'Day'}</a>
                                }
                            </div>
                            <div className='menu-item language-container'>
                                <a onClick={toggleLanguage}>{language === 'NL' ? 'Nederlands' : 'English'}</a>
                            </div>
                            <div className='menu-item'>
                                <a href="/about">
                                    {
                                        language === 'NL' ?
                                            <>Over mij</>
                                            :
                                            <>About me</>
                                    }
                                </a>
                            </div>
                            <div className='menu-item'>
                                <a href="/portfolio">
                                    {
                                        language === 'NL' ?
                                            <>Projecten</>
                                            :
                                            <>Projects</>
                                    }
                                </a>
                            </div>
                            <div className='menu-item'>
                                <a href="/contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </>
            }
        </nav>
    )
}

export default NavComponent