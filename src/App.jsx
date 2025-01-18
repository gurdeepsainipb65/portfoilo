import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/skills";
import Contact from "./component/Contact";
import Portfolio from "./component/Portfolio";
export default function App() {
  return (
    <div className="open-sans-custom overflow-x-hidden">
      <Router>
        <Navbar />
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About/>} ></Route>
          <Route path="/skills" element={<Skills/>}></Route>
          <Route path="/contact" element={<Contact/>} ></Route>
          <Route path="/portfolio" element={<Portfolio/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}
