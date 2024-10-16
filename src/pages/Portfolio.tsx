import NavComponent from '../components/NavComponent'
import PortifolioComponent from '../components/PortifolioComponent'
import FooterComponent from '../components/FooterComponent'
import SkillsComponent from '../components/SkillsComponent'
import BackgroundComponent from '../components/BackgroundComponent'
import '../css/style.css'


const Portfolio = () => {
    return (
        <>
            <NavComponent />
            <BackgroundComponent />
            <PortifolioComponent />
            <SkillsComponent />
            <FooterComponent />
        </>
    )
}

export default Portfolio