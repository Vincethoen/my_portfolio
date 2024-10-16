
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const HomeRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    )
}

export default HomeRouter