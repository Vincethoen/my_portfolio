import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import '../css/footer-style.css';

const FooterComponent = () => {
    const themeContext = useContext(ThemeContext);
    const languageContext = useContext(LanguageContext);

    const { darkMode } = themeContext;
    const { language, data } = languageContext;

    if (data === null) {
        return;
    }

    return (
        <footer className='footer-section'>
            <div className='footer-container-1'>
                <img src={darkMode ? 'icons/logo-dark.svg' : 'icons/logo-light.svg'} className='logo' />
                <div className="footer-text">
                    <h2>

                        {
                            language === 'EN' ? 'Portfolio of' : 'Portfolio van'
                        }
                        <br /><span> Vince 't Hoen</span>
                    </h2>
                    <p>
                        {
                            language === 'EN' ? data.EN.footer.p_1 : data.NL.footer.p_1
                        }
                        <br />
                        {
                            language === 'EN' ? data.EN.footer.p_2 : data.NL.footer.p_2
                        }
                    </p>
                </div>
            </div>
            <div className='footer-container-2'>
                <a href='tel:+316397564' className="phone footer-a">
                    <div className="icon-container">
                        <img src={
                            darkMode ?
                                '/icons/phone-white.svg' :
                                '/icons/phone-black.svg'
                        } alt="" />
                    </div>
                    <p>
                        {
                            language === 'EN' ? 'Phone: ' : 'telefoon: '
                        }
                        <br /> <span> + 31 6 39 75 64 81 </span>
                    </p>
                </a>

                <a href='"mailto:vthoen@protonmail.com' className="mail footer-a">
                    <div className="icon-container">
                        <img src={
                            darkMode ?
                                '/icons/mail-white.svg' :
                                '/icons/mail-black.svg'
                        } alt="" />
                    </div>
                    <p>
                        Mail: <br /> <span>Vthoen@protonmail.com </span>
                    </p>
                </a>

                <a href='https://www.linkedin.com/in/vince-t-hoen-b0023a119/' className="linkedin footer-a">
                    <div className="icon-container">
                        <img src={
                            darkMode ?
                                '/icons/linkedin-white.svg' :
                                '/icons/linkedin-black.svg'
                        } alt="linkedin link" />
                    </div>
                    <p>
                        LinkedIn
                    </p>
                </a>

                <a href='https://github.com/Vincethoen' className="github footer-a">
                    <div className="icon-container">
                        <img src={
                            darkMode ?
                                '/icons/github-white.svg' :
                                '/icons/github-dark.svg'
                        } alt="github link" />
                    </div>
                    <p>
                        Github
                    </p>
                </a>
            </div>
        </footer>
    )
}

export default FooterComponent