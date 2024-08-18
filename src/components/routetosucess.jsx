// src/components/RouteToSuccess.js
import React from 'react';
import './routetosucess.css';
import Tube from './tube/Tube';

const RouteToSuccess = () => {
    return (
        <div className="landing-page">
            <div className='successheading'>
                <h2 className='line'>|</h2>
                <h2 className="heading">
                    OUR ROUTE <span className="success"> TO SUCCESS</span>
                </h2>
            </div>
            <div className='tubeContainer'>
<Tube name="Expertise" hiddenImage="..\src\assets\Images\1.png" number="1" left="0px" width="400px"/>
<Tube name="Agility" hiddenImage="..\src\assets\Images\2.png" number="2" left="150px" width="400px"/>
<Tube name="Integrity" hiddenImage="..\src\assets\Images\3.png" number="3" left="330px" width="400px"/>
<Tube current="true" name="Innovative" hiddenImage="..\src\assets\Images\4.png" number="4" left="520px" width="400px"/>
<Tube name="Client Centric" hiddenImage="..\src\assets\Images\5.png" number="5" left="760px" width="400px"/>
<Tube name="Collaboration" hiddenImage="..\src\assets\Images\6.png" number="6" left="1000px" width="300px"/>
            </div>
        </div>
    );
};

export default RouteToSuccess;