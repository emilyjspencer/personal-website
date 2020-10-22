import React from 'react';
import CardProject from './Cards2';
import { Animated } from "react-animated-css";

import Header from './Header';


import './Portfolio2.css';


const Portfolio2 = () => {
    return (
        <>
        <div className="pink">
            <br />
            <Header />
            <br />
            <br />
            <br />
            <p className="work">Take a look at some of my work</p>
            <br/> 
            <br />
            <CardProject />
        </div>
        </>
    )
}

export default Portfolio2;