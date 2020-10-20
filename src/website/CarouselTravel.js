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
import paris from './images/cards/paris.png';
import venice from './images/cards/venice.png';
import mucha from './images/cards/mucha.png';
import berlinmemorial from './images/cards/berlinmemorial.png';
import rome from './images/cards/rome.png';
import hd from './images/cards/hd.png';
import travel from './images/cards/travel.png';


export default class extends React.Component {
  render() {
    return (
      <Carousel slideWidth="380px">
        <img className="travel" src={travel} />
           <img className="mozart" src={mozart}/>
           <img className="paris" src={paris} />
           <img className="neuschwanstein" src={neuschwanstein3}/>
        <img className="berlin" src={berlin} />
        <img className="eiffel" src={eiffel} />
        <br />
        <img className="hd" src={hd} />
        <img className="venice" src={venice} />
        <img className="rome" src={rome} />
        <img className="mucha" src={mucha} />
        <img className="berlinmemorial" src={berlinmemorial} />
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
