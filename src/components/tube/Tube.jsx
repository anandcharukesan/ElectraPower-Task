// src/components/tube/Tube.js
import React from 'react';
import "./Tube.css";

const Tube = (props) => {
    const customStyle = {
        left: props.left,
        width: props.width,
        backgroundColor: props.current === "true" ? "#FF6B2B" : undefined
    };

    const nameStyle = {
        color: props.current === "true" ? "#fafafa" : undefined
    };

    const numStyle = {
        color: props.current === "true" ? "rgba(243, 243, 243, 0.1)" : undefined
    };

    return (
        <div className='tube' style={customStyle}>
            <p className='tubeName' style={nameStyle}>{props.name}</p>
            <p className='tubeNumber' style={numStyle}>{props.number}</p>
            <div className='hidden-tube'>
                <span className='hidden-tube-name'>{props.hiddenName}</span>
            </div>
        </div>
    );
};

export default Tube;