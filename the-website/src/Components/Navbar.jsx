import React from "react"; 
import { Link } from 'react-scroll'; 
import img from "../Images/Pathosense-Bar.png";  

function Navbar(){
    return(
        <>
            <nav>
                <Link to='main' className='logo' smooth={true} duration={1000} >
                    <img className="test" src={img} /> 
                </Link>
                <input className='menu-btn' type='checkbox' id='menu-btn'/> 
                <label className='menu-icon' for='menu-btn'>
                    <span className='nav-icon'></span>
                </label> 
                <ul className='menu'>
                    <li><Link to='main' className='active' smooth={true} duration={1000} >Home</Link></li>
                    <li><Link to='features' className='active' smooth={true} duration={1000}>About</Link></li>
                    <li><a href='http://cupokoffi8.github.io/projects' className='active' smooth={true} duration={1000}>Projects</a></li> 
                </ul>
            </nav>
        </>
    )
}

export default Navbar; 