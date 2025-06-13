import "./App.css";
import { Routes, Route } from "react-router-dom";
import CVPage from "./pages/CVPage";
import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CVPage />} />
      </Routes>
    </>
  );
}

export default App;
