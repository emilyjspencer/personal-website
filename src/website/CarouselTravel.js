import React from 'react';
import Carousel from 'nuka-carousel';

import './CarouselTravel.css';
import nice from './images/cards/nice.png';
import brecht from './images/cards/brecht.png';
import chopin from './images/cards/chopin.png';
import mozart from './images/cards/mozart.png';
import alpine from './images/cards/alpine.png';
import disney from './images/cards/disney1.png';
import amsterdam from './images/cards/amsterdam.png';
import berlin from './images/cards/berlin.png';
import neuschwanstein3 from './images/cards/neuschwanstein.png';
import eiffel from './images/cards/eiffel.png';
import artnouveau from './images/cards/artnouveau.png';
import baudelaire from './images/cards/baudelaire.png';


export default class extends React.Component {
  render() {
    return (
      <Carousel slideWidth="360px">
           <img className="mozart" src={mozart}/>
           <img className="neuschwanstein" src={neuschwanstein3}/>
        <img className="berlin" src={berlin} />
        <img className="eiffel" src={eiffel} />
        <br />
        <img className="chopin" src={chopin}/>
        <img className="brecht" src={brecht} />
        <img className="amsterdam" src={amsterdam}/>
        <img className="nice" src={nice}/>
        <img className="alpine" src={alpine}/>
        <br />
        <img className="disney" src={disney}/>
        <img className="artnouveau" src={artnouveau}/>
        <img className="baudelaire" src={baudelaire}/>
       
        
       
      </Carousel>
    );
  }
}
