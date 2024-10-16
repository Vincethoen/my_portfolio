
import { Route, Routes } from 'react-router-dom';
import Portfolio from '../pages/Portfolio';

const PortfolioRouter = () => {
    return (
        <Routes>
            <Route index element={<Portfolio />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    )
}

export default PortfolioRouter