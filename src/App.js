import './App.css';
import Navbar from './components/navbar'
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Footer from './components/footer';

function App() {
  return (
    <div className="App h-screen">
      <Navbar/>
      <Home />
      <About/>
      
      <Footer/>
      {/* <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes> */}
    </div>
  );
}

export default App;
