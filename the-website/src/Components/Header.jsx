import React from "react"; 
import Navbar from './Navbar'; 
import { Link } from 'react-scroll'; 

function Header(){
    return(
        <div id="main"> 
            <Navbar /> 
            <div className='name'>
                <h1 className='the-header'>CPE 322-A with Dr. Kevin Lu</h1>
                <p className='details'>We'll see what happens to this website</p> 
                <div className='header-btns'>
                    <Link to='features' className='active' smooth={true} duration={1000}><a className='cv-btn'>About</a></Link> 
                </div>
            </div>
        </div> 
    )
}

export default Header; 