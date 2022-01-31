import React from "react"; 
import Carousel from "react-elastic-carousel";
import Item from "./item";
import "./style.css";
import Image1 from "../Images/s-images/1.png";
import Image2 from "../Images/s-images/2.png"; 

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <> 
      <div className="Slider" style={{marginTop: '50px'}}>
        <Carousel breakPoints={breakPoints}>
          <Item>
            <img src={Image1} className="slider-image" alt="image1"/> 
          </Item>
          <Item>
            <img src={Image2} className="slider-image" alt="image2"/> 
          </Item>
        </Carousel>
      </div>
    </>
  );
}

export default Slider; 