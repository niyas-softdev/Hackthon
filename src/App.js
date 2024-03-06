import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Home from "./Component/Home";
import AppNavbar from "./Component/AppNavbar";

const App = () => {
  return (
    <Router>
      <div>
        <AppNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
