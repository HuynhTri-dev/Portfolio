import "./App.css";
import { Routes, Route } from "react-router-dom";
import CVPage from "./pages/CVPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CVPage />} />
    </Routes>
  );
}

export default App;
