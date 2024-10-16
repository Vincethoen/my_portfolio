import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeRouter from './HomeRouter';
import AboutRouter from './AboutRouter';
import PortfolioRouter from './PortfolioRouter';
import ErrorRouter from './ErrorRouter';
import ContactRouter from './ContactRouter';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<HomeRouter />} />
                <Route path="/home/*" element={<HomeRouter />} />
                <Route path="/about/*" element={<AboutRouter />} />
                <Route path="/portfolio/*" element={<PortfolioRouter />} />
                <Route path="/contact/*" element={<ContactRouter />} />
                <Route path="/*" element={<ErrorRouter />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter