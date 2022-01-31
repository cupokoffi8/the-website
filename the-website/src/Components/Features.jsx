import React from "react"; 
import { Link } from 'react-scroll'; 

function Features(){
    return(
        <div id="features"> 
        <div className='features-text'>
            <h1>Something will be typed here eventually</h1> 
            <hr className="divider" /> 
            <p>
            Welcome
            </p>
            <div className="header-btns">
                <Link to='services' className='active' smooth={true} duration={1000}><a className='cv-btn1'>Learn More</a></Link> 
            </div> 
            </div> 
        </div> 
    )
}

export default Features; 