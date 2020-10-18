import React from 'react';
import Carousel from 'nuka-carousel';

import './Carousel.css';
import outofafrica from './images/cards/outofafrica.png';
import hideouskinky from './images/cards/hideouskinky.png';
import middleton from './images/cards/atmiddleton.png';
import blackswan from './images/cards/blackswan.png';

export default class extends React.Component {
  render() {
    return (
      <Carousel slideWidth="360px">
        <img className="outofafrica" src={outofafrica}/>
        <img className="hideouskinky" src={hideouskinky} />
        <img className="atmiddleton" src={middleton}/>
        <img className="blackswan" src={blackswan} />
       
      </Carousel>
    );
  }
}