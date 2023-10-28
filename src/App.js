import "./App.css";
import Navbar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Footer from "./components/footer";
import Contact from "./components/contact";


function App() {
  return (
    <div className="App h-screen">
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
      {/* <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes> */}
    </div>
  );
}

export default App;
