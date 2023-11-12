import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";
import { useEffect, useState } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function App() {
  const [showButton, setShowButton] = useState();

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      window.scrollY > 300 ? setShowButton(true) : setShowButton(false);
    };

    window.addEventListener("scroll", handleScrollButtonVisibility);

    return () => {
      window.removeEventListener("scroll", handleScrollButtonVisibility);
    };
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="App h-screen">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />

      {showButton && (
        <div className="w-fill text-right">
          <button className="btn" onClick={scrollToTop}>Go back Up<BsFillArrowUpSquareFill className="text-4xl"/></button>
        </div>
      )}

      <Footer />
      {/* <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes> */}
    </div>
  );
}

export default App;
