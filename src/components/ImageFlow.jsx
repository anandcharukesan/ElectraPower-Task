
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import './ImageFlow.css'; 
const ImageFlow = () => {
  return (
    <div className="image-flow-wrapper">
      <div className="image-flow-container">
        <div className="image-container">
          <img src=".\RollImg.png" alt="Scrolling" />
          <img src=".\RollImg.png" alt="Scrolling" />
        </div>
        <div className="text-content">
          <hr className="divider" />
          <p className="HaveALook">HAVE A LOOK AT</p>
          <p className='ourPortfolio'>OUR <span className='port'>PORTFOLIO</span> </p>
          <p className="content">
            Explore our diverse portfolio of high-tension electrical contracting projects, showcasing innovation, safety, and sustainability. Our dedicated team delivers tailored solutions that exceed client expectations, driving progress and fosterin sustainable development.
          </p>
          <div className='exploreBtn'>EXPLORE PORTFOLIO <FaArrowRightLong /></div>
        </div>
      </div>
    </div>
  );
};

export default ImageFlow;