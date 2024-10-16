import { useContext, useEffect, useState } from "react"
import { scrollObserver } from "../api/scrollEffect";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
import '../css/skills-style.css';

const SkillsComponent = () => {
    const [showMore, setShowMore] = useState<boolean>(false);

    const languageContext = useContext(LanguageContext);
    const themeContext = useContext(ThemeContext);

    const { darkMode } = themeContext;
    const { language, data } = languageContext;

    useEffect(() => {
        const elements: NodeListOf<Element> = document.querySelectorAll('.hidden-left, .hidden-right');

        scrollObserver(elements)
    })

    const maxVisibleSkills = 5;

    const handleShowMore = () => {
        setShowMore(prev => !prev);
    };

    if (data === null) {
        return;
    }

    return (
        language === 'EN' ?
            <>
                <section className='skills-section'>
                    <h1>Skills</h1>
                    <article className='left-article coding'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_1}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.code_languages.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='left-article frameworks'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_2}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.frameworks.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='left-article libraries-tools'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_3}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.libraries_tools.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='left-article softwares'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_4}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.softwares.map((skill, index) => {
                                if (!showMore && index >= maxVisibleSkills) return null;

                                return (
                                    <li key={skill.id} className="hidden-left delay-group">
                                        <div className="progress-bar">
                                            <img src={skill.icon} alt={skill.alt} />
                                            <div className="progress"
                                                style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                        </div>
                                        <p>{skill.name}</p>
                                    </li>
                                );
                            })}
                            <li className="show-more-container hidden-left delay-group">
                                <button onClick={handleShowMore} className="show-more">
                                    {darkMode ?

                                        showMore ?
                                            <img src="/icons/buttons/less-icon-dark.svg" alt="less-button" />
                                            :
                                            <img src="/icons/buttons/more-icon-dark.svg" alt="more-button" />
                                        :
                                        showMore ?
                                            <img src="/icons/buttons/less-icon-light.svg" alt="less-button" />
                                            :
                                            <img src="/icons/buttons/more-icon-light.svg" alt="more-button" />

                                    }
                                </button>
                            </li>
                        </ul>
                    </article>
                    <article className='left-article hardware-other'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_5}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.skills_hardwares.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='right-article hidden-right certificates'>
                        <h2>Certificates</h2>
                        <p>
                            Obtained certificates from the Bit Academy education.
                        </p>
                        <ul className='certificates-container'>
                            {data.EN.certificates.map(certificate => (
                                <li key={certificate.id}
                                    className="hidden-right delay-group">
                                    <p>{`${certificate.name} certificate`}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section >
            </>
            :
            <>
                <section className='skills-section'>
                    <h1>Vaardigheden</h1>
                    <article className='left-article coding'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_1}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.code_languages.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='left-article frameworks'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_2}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.frameworks.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='left-article libraries-tools'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_3}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.libraries_tools.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='left-article softwares'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_4}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.softwares.map((skill, index) => {
                                if (!showMore && index >= maxVisibleSkills) return null;

                                return (
                                    <li key={skill.id} className="hidden-left delay-group">
                                        <div className="progress-bar">
                                            <img src={skill.icon} alt={skill.alt} />
                                            <div className="progress"
                                                style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                        </div>
                                        <p>{skill.name}</p>
                                    </li>
                                );
                            })}
                            <li className="show-more-container hidden-left delay-group">
                                <button onClick={handleShowMore} className="show-more">
                                    {darkMode ?

                                        showMore ?
                                            <img src="/icons/buttons/less-icon-dark.svg" alt="less-button" />
                                            :
                                            <img src="/icons/buttons/more-icon-dark.svg" alt="more-button" />
                                        :
                                        showMore ?
                                            <img src="/icons/buttons/less-icon-light.svg" alt="less-button" />
                                            :
                                            <img src="/icons/buttons/more-icon-light.svg" alt="more-button" />

                                    }
                                </button>
                            </li>
                        </ul>
                    </article>
                    <article className='left-article hardware-other'>
                        <div className="hidden-left">
                            <h2>{data.EN.skills.h2_5}</h2>
                        </div>
                        <ul className="skills">
                            {data.EN.skills.skills_hardwares.map(skill => (
                                <li key={skill.id}
                                    className="hidden-left delay-group">
                                    <div className="progress-bar">
                                        <img src={skill.icon} alt={skill.alt} />
                                        <div className="progress"
                                            style={{ '--skill-level': `${skill.level}%` } as React.CSSProperties}></div>
                                    </div>
                                    <p>{skill.name}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                    <article className='right-article hidden-right certificates'>
                        <h2>Certificaten</h2>
                        <p>
                            Behaalde certificaten van de opleiding bij Bit Academy.
                        </p>
                        <ul className='certificates-container'>
                            {data.EN.certificates.map(certificate => (
                                <li key={certificate.id}
                                    className="hidden-right delay-group">
                                    <p>{`${certificate.name} certificate`}</p>
                                </li>
                            ))}
                        </ul>
                    </article>
                </section >
            </>
    )
}

export default SkillsComponent