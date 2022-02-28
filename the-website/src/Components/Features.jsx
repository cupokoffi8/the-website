import React from "react"; 
import { Link } from 'react-scroll'; 
import PP from "../Images/Pathosense.png"; 

function Features(){
    return(
        <div id="features"> 
        <div className='features-text'>
            <h1>Projects</h1> 
            <hr className="divider" /> 
            <p>
            See what we have been working on
            </p>
            <img id="pp" src={PP} />
            <div className="header-btns">
                <a href="http://cupokoffi8.github.io/projects" className='cv-btn1'>Our Work</a> 
            </div> 
            </div> 
        </div> 
    )
}

export default Features; 