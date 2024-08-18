// src/components/tube/Tube.js
import React, { useState } from 'react';
import "./Tube.css";

const Tube = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        // Toggle the clicked state
        setIsClicked(!isClicked);
    };

    const customStyle = {
        left: props.left,
        width: props.width,
        backgroundColor: props.current === "true" ? "#FF6B2B" : undefined // Use navButtonBg for the current tube
    };

    const nameStyle = {
        color: props.current === "true" ? "#fafafa" : undefined
    };

    const numStyle = {
        color: props.current === "true" ? "rgba(243, 243, 243, 0.1)" : undefined
    };

    return (
        <div className={`tube ${isClicked ? 'clicked' : ''}`} style={customStyle} onClick={handleClick}>
            <p className='tubeName' style={nameStyle}>{props.name}</p>
            <p className='tubeNumber' style={numStyle}>{props.number}</p>
            <div className='hidden-tube'>
                <span className='hidden-tube-name'>{props.hiddenName}</span>
            </div>
        </div>
    );
};

export default Tube;