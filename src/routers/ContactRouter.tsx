import { Route, Routes } from 'react-router-dom';
import Contact from '../pages/Contact';

const ContactRouter = () => {
    return (
        <Routes>
            <Route index element={<Contact />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default ContactRouter