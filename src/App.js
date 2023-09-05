import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
