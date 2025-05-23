import { Link } from "react-router-dom";
import './Navbar.css';
function Navbar(){
    return(
        <>
        <div className="nav-pill">
            <Link to='/'> Home</Link>
            <Link to='Projects'>Projects</Link>
            <Link to='/About'>About</Link>
            <Link to='/Contact'>Contact</Link>
        </div>
        
        </>
    )
}

export default Navbar;