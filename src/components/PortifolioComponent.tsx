import { useContext, useEffect } from "react";
import { scrollObserver } from "../api/scrollEffect";
import { LanguageContext } from "../context/LanguageContext";
import '../css/portfolio-style.css';

const PortifolioComponent = () => {
    const languageContext = useContext(LanguageContext);

    const { language } = languageContext;

    useEffect(() => {
        const elements = document.querySelectorAll('.hidden');

        scrollObserver(elements)
    })

    return (
        <section className='portfolio-section'>
            <article className='portfolio-article'>
                <div className="hidden">
                    <h1>
                        {
                            language === 'EN' ?
                                'Projects'
                                :
                                'Projecten'
                        }
                    </h1>
                    <p>
                    </p>
                </div>
                <div className='masonry-container'>
                    <div className="hidden delay-group">
                        <img src="images/placeholder-image.jpg" alt="image of project X" />
                    </div>
                    <div className="hidden delay-group">
                        <img src="images/placeholder-image.jpg" alt="image of project Y" />
                    </div>
                    <div className="hidden delay-group">
                        <img src="images/placeholder-image.jpg" alt="image of project Z" />
                    </div>
                    <div className="hidden delay-group">
                        <img src="images/placeholder-image.jpg" alt="image of project X" />
                    </div>
                    <div className="parent">
                        <img src="images/placeholder-image.jpg" alt="image of project Y" className="hidden delay-group" />
                        <img src="images/placeholder-image.jpg" alt="image of project Z" className="hidden delay-group" />
                    </div>
                    <div className="parent">
                        <img src="images/placeholder-image.jpg" alt="image of project X" className="hidden delay-group" />
                        <img src="images/placeholder-image.jpg" alt="image of project Y" className="hidden delay-group" />
                        <img src="images/placeholder-image.jpg" alt="image of project Z" className="hidden delay-group" />
                    </div>
                </div>
            </article>
        </section>
    )
}

export default PortifolioComponent