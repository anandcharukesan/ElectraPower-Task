// src/components/RouteToSuccess.js
import React from 'react';
import '../components/routetosucess.css';
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
                <Tube name="Expertise" hiddenName="Knowledge" number="1" left="0px" width="400px"/>
                <Tube name="Agility" hiddenName="Flexibility" number="2" left="150px" width="400px"/>
                <Tube name="Integrity" hiddenName="Honesty" number="3" left="330px" width="400px"/>
                <Tube current="true" name="Innovative" hiddenName="Creativity" number="4" left="520px" width="400px"/>
                <Tube name="Client Centric" hiddenName="Customer Focus" number="5" left="760px" width="400px"/>
                <Tube name="Collaboration" hiddenName="Teamwork" number="6" left="1000px" width="300px"/>
            </div>
        </div>
    );
};

export default RouteToSuccess;