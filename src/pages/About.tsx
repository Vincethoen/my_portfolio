import AboutComponent from '../components/AboutComponent'
import BackgroundComponent from '../components/BackgroundComponent'
import ContactComponent from '../components/ContactComponent'
import FooterComponent from '../components/FooterComponent'
import NavComponent from '../components/NavComponent'
import '../css/style.css'

const About = () => {
    return (
        <>
            <NavComponent />
            <BackgroundComponent />
            <AboutComponent />
            <ContactComponent />
            <FooterComponent />
        </>
    )
}

export default About