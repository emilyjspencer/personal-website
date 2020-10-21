import React from 'react';
import { Animated } from "react-animated-css";

import './Header2.css';
import ocean from './images/cards/ocean2.png';
import cloud from './cloud.png';

const Header2 = () => {

    return (
        <Animated animationInDuration="4000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="container">
        <img className="cloud" src={ocean}      />
        </div>
        </Animated>

    )
}
    


export default Header2;