import './App.css';
import NavBar from './components/NavBar.js';
import About from './screens/About.js';
import Contact from './screens/Contact.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './screens/Home.js';
import Footer from './components/Footer.js';
function App() {
  return (
    <Router>
    <div>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
      </Routes>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
