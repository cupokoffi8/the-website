import React from "react"; 
import Navbar from './Navbar'; 
import Aos from 'aos'; 
import 'aos/dist/aos.css'; 
import { Link } from 'react-scroll'; 

function Header(){
    Aos.init(); 
    return(
        <div id="main"> 
            <Navbar /> 
            <div className='name'>
                <h1 data-aos="zoom-in-down" data-aos-duration="2000" className='the-header'>Welcome to Pathosense</h1>
                <p data-aos="fade-down" data-aos-duration="2400" className='details'>Our Team: Alex Gaskins, Nikola Ciric, and Carlitos Rodriguez</p> 
                <div data-aos="fade-up" data-aos-duration="2400" className='header-btns'>
                    <Link to='features' className='active' smooth={true} duration={1000}><a className='cv-btn'>About</a></Link> 
                </div>
            </div>
        </div> 
    )
}

export default Header; 