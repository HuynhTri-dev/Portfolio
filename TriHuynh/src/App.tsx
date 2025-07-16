import "./App.css";
import { Routes, Route } from "react-router-dom";
import PortfolioDev from "./pages/PortfolioDev";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/common/ScrollToTop";
import PortfolioInvest from "./pages/PortifolioInvest";
import PortfolioFounder from "./pages/PortfolioFounder";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio-dev" element={<PortfolioDev />} />
        <Route path="/portfolio-invest" element={<PortfolioInvest />} />
        <Route path="/portfolio-founder" element={<PortfolioFounder />} />
      </Routes>
    </>
  );
}

export default App;
