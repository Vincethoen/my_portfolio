import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';

const AboutRouter = () => {
    return (
        <Routes>
            <Route index element={<About />} />
            <Route path="/about" element={<About />} />
        </Routes>
    )
}

export default AboutRouter