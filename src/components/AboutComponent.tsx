import { useContext, useEffect } from "react"
import { scrollObserver } from "../api/scrollEffect";
import { LanguageContext } from "../context/LanguageContext";
import '../css/about-style.css';

const AboutComponent = () => {
    const languageContext = useContext(LanguageContext);

    const { language, data } = languageContext;

    useEffect(() => {
        const elements: NodeListOf<Element> = document.querySelectorAll('.hidden-left, .hidden-right');

        scrollObserver(elements)
    })

    if (data === null) {
        return;
    }

    return (
        <>
            <section className='about-section'>
                <article className='left-article hidden-left'>
                    <div>
                        <h1>{language === 'EN' ? data.EN.about.h1 : data.NL.about.h1}</h1>
                        <h2>{language === 'EN' ? data.EN.about.h2_1 : data.NL.about.h2_1}</h2>
                        <p>{language === 'EN' ? data.EN.about.p_1 : data.NL.about.p_1}</p>
                    </div>
                </article>
                <article className='right-article hidden-right'>
                    <div className="text-div">
                        <h2>{language === 'EN' ? data.EN.about.h2_2 : data.NL.about.h2_2}</h2>
                        <p>{language === 'EN' ? data.EN.about.p_2 : data.NL.about.p_2}</p>
                    </div>
                    <div className="about-pill">
                        <img src="images/placeholder-person.jpg" alt="picture of me" />
                    </div>
                </article>
                <article className='left-article hidden-left'>
                    <div className="text-div">
                        <h2>{language === 'EN' ? data.EN.about.h2_3 : data.NL.about.h2_3}</h2>
                        <p>{language === 'EN' ? data.EN.about.p_3 : data.NL.about.p_3}</p>
                    </div>
                    <div className="about-pill">
                        <img src="images/placeholder-person.jpg" alt="picture of me" />
                    </div>
                </article>
            </section>
        </>
    )
}

export default AboutComponent