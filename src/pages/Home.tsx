import NavComponent from '../components/NavComponent';
import AboutComponent from '../components/AboutComponent';
import SkillsComponent from '../components/SkillsComponent';
import ContactComponent from '../components/ContactComponent';
import FooterComponent from '../components/FooterComponent';
import PortifolioComponent from '../components/PortifolioComponent';
import HeroComponent from '../components/HeroComponent';
import '../css/style.css'

const Home = () => {
    return (
        <>
            <NavComponent />
            <HeroComponent />
            <div className='unwrapper'>
                <AboutComponent />
                <PortifolioComponent />
                <SkillsComponent />
                <ContactComponent />
                <FooterComponent />
            </div>
            <div className="filler"></div>
        </>
    )
}

export default Home