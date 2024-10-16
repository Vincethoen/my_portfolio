import { Route, Routes } from 'react-router-dom';
import Error from '../pages/Error';

const ErrorRouter = () => {
    return (
        <Routes>
            <Route index element={<Error />} />
            <Route path="/*" element={<Error />} />
        </Routes>
    )
}

export default ErrorRouter