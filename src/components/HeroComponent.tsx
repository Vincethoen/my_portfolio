import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import { LanguageContext } from "../context/LanguageContext";
import '../css/hero-style.css';

const HeroComponent = () => {
    const themeContext = useContext(ThemeContext);
    const languageContext = useContext(LanguageContext);

    const { darkMode } = themeContext;
    const { language } = languageContext;

    return (
        <>
            <section className="hero-section paralax-content">

                <article className="paralax-1">
                    <div className="pill"></div>
                </article>
                <article className="paralax-2">
                    <div>
                        <div className="ring-forground">
                            <div className="title-ring-container">
                                <h2>
                                    {
                                        language === 'EN' ?
                                            'Portfolio of'
                                            :
                                            'Portfolio van'
                                    }
                                </h2>
                                <h1>
                                    Vince 't Hoen
                                </h1>
                            </div>
                        </div>
                        <div className="ring-background"></div>
                    </div>
                </article>

                <div className="paralax-3">
                    <img src="/photos/Guggenheim_render.png" alt="" />
                </div>

                <div className="paralax-4">
                    <div className="contact-element">
                        <a className="phone contact-a" href='tel:+316397564' >
                            <img src={
                                darkMode ?
                                    '/icons/phone-dark.svg' :
                                    '/icons/phone-light.svg'
                            } alt="" />
                        </a>

                        <a className="mail contact-a" href='"mailto:vthoen@protonmail.com'>
                            <img src={
                                darkMode ?
                                    '/icons/mail-dark.svg' :
                                    '/icons/mail-light.svg'
                            } alt="" />
                        </a>

                        <a className="linkedin contact-a" href='https://github.com/Vincethoen'>
                            <img src={
                                darkMode ?
                                    '/icons/linkedin-dark.svg' :
                                    '/icons/linkedin-light.svg'
                            } alt="" />
                        </a>

                        <a className="linkedin contact-a" href='https://www.linkedin.com/in/vince-t-hoen-b0023a119/'>
                            <img src={
                                darkMode ?
                                    '/icons/skills/github-dark.svg' :
                                    '/icons/skills/github-light.svg'
                            } alt="" />
                        </a>
                    </div>
                </div>
            </section >
        </>
    )
}

export default HeroComponent