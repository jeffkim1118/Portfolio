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
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
import TimeLine from "./components/timeLine";

function App() {
  const [showButton, setShowButton] = useState();
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [showNavbar, setNavbarVisibility] = useState(true);

  // const handleScroll = () => {
  //   const currentScrollPos = window.scrollY;

  //   if(currentScrollPos > prevScrollPos){
  //     setNavbarVisibility(false);
  //   }else{
  //     setNavbarVisibility(true)
  //   }
  //   setPrevScrollPos(currentScrollPos)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll)
  // },[])

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
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <TimeLine/>
      <Portfolio />
      <Contact />

      {showButton && (
        <div className="goTopBtn w-fill h-12 text-right">
          <button className="btn" onClick={scrollToTop}>Back Up
            <BsFillArrowUpSquareFill className="text-4xl" />
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
