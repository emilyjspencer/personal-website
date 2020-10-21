import React from 'react';
import CardProject from './Cards2';
import { Animated } from "react-animated-css";

import Header3 from './Header3';

import flowers7 from './images/cards/flowers7.png';
import flowers7grey from './images/cards/flowers7grey.png';

import './Portfolio2.css';
import Header from './Header';

import cloud from './images/cards/cloud.png';

const Portfolio2 = () => {
    return (
        <>
        <div className="pink">
            <br />
            <Header />
        
            <h4>Take a look at some of my work!</h4>
            <br />
            <br />
            <br/> 
            <CardProject />
        </div>
        </>
    )
}

export default Portfolio2;