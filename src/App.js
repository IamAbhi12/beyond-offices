import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Workspaces from "./Pages/Workspaces";
import AboutUs from "./Pages/AboutUs";
import "./reset.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workspaces" element={<Workspaces />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
