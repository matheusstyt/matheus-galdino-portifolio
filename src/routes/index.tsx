import { BrowserRouter as Router, Routes,  Route, useLocation } from 'react-router-dom';
import HomePage from '../pages/home';
import Header from '../components/header';
import PortfolioPage from '../pages/portfolio';

const AppRoutes = () => {
    
    const RenderRoutes = () => {
            
        return (
        <>
            <Header />
            <Routes>
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </>
        )
    }

    return (
        <Router>
            <RenderRoutes/>
        </Router>
    )
}
export default AppRoutes;