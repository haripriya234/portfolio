import Navbar from './Navbar';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App(){
    return(
        <>
        <span className="floating" style={{ top: '90%', left: '48%' }}>🌸</span>
        <span className="floating" style={{ top: '90%', left: '50%' }}>🌸</span>
        <span className="floating" style={{ top: '90%', left: '52%' }}>🌸</span>

        <Navbar></Navbar>
       <Routes>
        <Route path='' element={<Home></Home>}></Route>
        <Route path='Projects' element={<Projects></Projects>}></Route>
      <Route path='About' element={<About></About>}></Route>
      <Route path='Contact' element={<Contact></Contact>}></Route>
    </Routes>
    
        </>
    )
}
export default App;
