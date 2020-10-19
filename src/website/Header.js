import React from 'react';
import {Animated} from "react-animated-css";
import cherryblossom from './images/cards/cherryblossom2.png';
import './Header.css';

const Header = () => {

    return (
        <Animated animationInDuration="3000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="header">
            <img className="cherryblossom" src={cherryblossom} alt="cherryblossom" />
        </div>
        
        </Animated>
        
    )


}

export default Header;