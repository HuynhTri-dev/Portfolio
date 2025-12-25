import "./App.css";
import { Routes, Route } from "react-router-dom";
import PortfolioDevV2 from "./pages/PortfolioDevV2";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/common/ScrollToTop";
import PortfolioInvest from "./pages/PortifolioInvest";
import PortfolioFounder from "./pages/PortfolioFounder";

import DonatePage from "./pages/DonatePage";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/portfolio-dev" element={<PortfolioDevV2 />} />
        <Route path="/portfolio-invest" element={<PortfolioInvest />} />
        <Route path="/portfolio-founder" element={<PortfolioFounder />} />
      </Routes>
    </>
  );
}

export default App;
