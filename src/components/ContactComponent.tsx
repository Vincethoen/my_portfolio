import { useContext, useEffect } from "react";
import { scrollObserver } from "../api/scrollEffect";
import { ThemeContext } from "../context/ThemeContext";
import { LanguageContext } from "../context/LanguageContext";
import '../css/contact-style.css';

const ContactComponent = () => {
    const themeContext = useContext(ThemeContext);
    const languageContext = useContext(LanguageContext);

    const { darkMode } = themeContext;
    const { language, data } = languageContext;

    useEffect(() => {
        const elements = document.querySelectorAll('.hidden-left, .hidden-right');
        scrollObserver(elements);
    });

    if (data === null) {
        return;
    }

    return (
        <section className='contact-section'>
            <article className='contact-article hidden-right'>
                <h1>Contact</h1>
                <p>
                    {
                        language === 'EN' ?
                            data.EN.contact.p_1
                            :
                            data.NL.contact.p_1
                    }
                </p>

                <div className='contact-contacts'>
                    <a href="https://github.com/Vincethoen">
                        <div>
                            <div className="ring">
                                <img src={darkMode ? 'icons/skills/github-dark.svg' : 'icons/skills/github-light.svg'} alt="Github-icon" />
                            </div>
                            <h3>Github</h3>
                        </div>
                    </a>
                    <a href="tel:+31639756481">
                        <div>
                            <div className="ring">
                                <img src={darkMode ? 'icons/phone-dark.svg' : 'icons/phone-light.svg'} alt="Phone-icon" />
                            </div>
                            <h3>
                                {
                                    language === 'EN' ? 'Phone: ' : 'telefoon: '
                                }
                                <br /> <span>+31 6 39 75 64 81</span></h3>
                        </div>
                    </a>
                    <a href="mailto:vthoen@protonmail.com">
                        <div>
                            <div className="ring">
                                <img src={darkMode ? 'icons/mail-dark.svg' : 'icons/mail-light.svg'} alt="Mail-icon" />
                            </div>
                            <h3>Mail: <br /> <span>Vthoen@protonmail.com</span></h3>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/vince-t-hoen-b0023a119/">
                        <div>
                            <div className="ring">
                                <img src={darkMode ? 'icons/linkedin-dark.svg' : 'icons/linkedin-light.svg'} alt="Linkedin-icon" />
                            </div>
                            <h3>LinkedIn</h3>
                        </div>
                    </a>
                </div>
            </article>
        </section>
    );
}

export default ContactComponent;
