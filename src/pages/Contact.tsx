import NavComponent from '../components/NavComponent'
import ContactComponent from '../components/ContactComponent'
import FooterComponent from '../components/FooterComponent'
import BackgroundComponent from '../components/BackgroundComponent'
import '../css/style.css'

const Contact = () => {
    return (
        <>
            <NavComponent />
            <BackgroundComponent />
            <ContactComponent />
            <FooterComponent />
        </>
    )
}

export default Contact