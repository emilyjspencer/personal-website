import React from 'react';
import cherryblossom from './images/cards/cherryblossom2.png';
import './Header.css';

const Header = () => {

    return (

        <div className="header">
            <img className="cherryblossom" src={cherryblossom} alt="cherryblossom" />
        </div>
    )


}

export default Header;