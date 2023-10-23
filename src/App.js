import './App.css';
import Navbar from './components/navbar'
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
