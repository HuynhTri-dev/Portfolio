import "./App.css";
import { Routes, Route } from "react-router-dom";
import CVPage from "./pages/CVPage";
import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </>
  );
}

export default App;
