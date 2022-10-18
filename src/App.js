// import Form from "./Form";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Blog from "./Blog";
import NoPage from "./NoPage";
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import WebDesign from "./Services/WebDesign";
import MobileDesign from "./Services/MobileDesign";
import Fullstack from "./Services/Fullstack";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Service />}>
            <Route path="webdesign" element={<WebDesign />} />
            <Route path="mobiledesign" element={<MobileDesign />} />
            <Route path="fullstack" element={<Fullstack />} />
          </Route>
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
      {/* <Form /> */}
    </div>
  );
}
