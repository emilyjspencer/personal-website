import React from 'react';
import {Animated} from "react-animated-css";
import cherryblossom from './images/cards/cherryblossom2.png';
import flowers3 from './images/cards/flowers8.png';
import './Header.css';

const Header = () => {

    return (
        <Animated animationInDuration="3000" animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
        <div className="header">
            <img className="cherryblossom" src={flowers3} alt="cherryblossom" />
        </div>
        
        </Animated>
        
    )


}

export default Header;