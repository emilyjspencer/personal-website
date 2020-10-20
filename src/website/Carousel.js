import React from 'react';
import Carousel from 'nuka-carousel';

import './Carousel.css';
import outofafrica from './images/cards/outofafrica.png';
import hideouskinky from './images/cards/hideouskinky.png';
import middleton from './images/cards/atmiddleton.png';
import blackswan from './images/cards/blackswan.png';
import burn from './images/cards/burn.png';
import secretgarden from './images/cards/secretgarden.png';
import manhattan from './images/cards/manhattan.png';

export default class extends React.Component {
  render() {
    return (
      <Carousel slideWidth="360px">
        <img className="outofafrica" src={outofafrica}/>
        <img className="hideouskinky" src={hideouskinky} />
        <img className="atmiddleton" src={middleton}/>
        <img className="blackswan" src={blackswan} />
        <img className="manhattan" src={manhattan} />
        <img className="secretgarden" src={secretgarden} />
        <img className="burn" src={burn} />
       
      </Carousel>
    );
  }
}