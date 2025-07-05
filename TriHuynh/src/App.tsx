import "./App.css";
import { Routes, Route } from "react-router-dom";
import PortfolioDev from "./pages/PortfolioDev";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio-dev" element={<PortfolioDev />} />
      </Routes>
    </>
  );
}

export default App;
