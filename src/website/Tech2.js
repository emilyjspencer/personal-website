import React from 'react';
import './Tech.css';

import rails from './images/cards/rails.png';
import jest from './images/cards/jest.png';
import rspec from './images/cards/rspec.png';
import enzyme from './images/cards/enzyme.png';
import jasmine from './images/cards/jasmine.png';
import chai from './images/cards/chai.png';
import mocha from './images/cards/mocha.png';
import capybara from './images/cards/capybara.png';
import ruby from './images/cards/ruby.png';
import react from './images/cards/react2.png';
import python from './images/cards/python.png';
import postgres from './images/cards/postgres.png';
import node from './images/cards/node.png';
import sinatra from './images/cards/sinatra.png';
import tdd from './images/cards/tdd.png';
import js from './images/cards/js.png';

import {
    DiPython
} from 'react-icons/di';
import {
  FaGem,
  FaReact,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaNode,
} from 'react-icons/fa';
import {
    SiMaterialUi 
} from 'react-icons/si';


const Tech2 = () =>  {
    return (
   <> 
<div className="technologiesContainer">
        <img className="jest" src={jest} />
        Jest
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="capybara" src={capybara} />
        Capybara
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="enzyme" src={enzyme} />
        Enzyme
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="mocha" src={mocha} />
        Mocha
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="chai" src={chai} />
        Chai
    </div>
    <div className="technologiesContainer">
        <img className="tdd" src={tdd} />
        Test-driven development
    </div>
    </>

    )
}

    export default Tech2;