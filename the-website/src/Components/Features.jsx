import React from "react"; 
import { Link } from 'react-scroll'; 
import PP from "../Images/Pathosense.png"; 

function Features(){
    return(
        <div id="features"> 
        <div className='features-text'>
            <h1>About Pathosense</h1> 
            <hr className="divider" /> 
            <p>
            We strive to improve sentiment analysis systems to make connecting with users easier than ever
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