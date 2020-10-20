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


const Tech = () =>  (
    <>
  <div className="technologies">
    <div className="technologiesContainer">
      <FaGem className="ruby" />
      <p>
        Ruby
      </p>
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="rails" src={rails} />
      <p>Rails</p>
    </div>
    <br />
    <div className="technologiesContainer">
      <FaReact className="react" />
      <p>React</p>
    </div>
    <br />
    <div className="technologiesContainer">
        <DiPython className="python" />
        <p>Python</p>
    </div>
    <br />
    </div>
    <div className="technologies2">
    <div className="technologiesContainer">
        <img className="js" src={js} />
        <p>JavaScript</p>
    </div>
    <br />
    <div className="technologiesContainer">
      <FaDatabase className="sql" />
      <p>SQL</p>
    </div>
    <br />
    <div className="technologiesContainer">
      <FaHtml5 className="html" />
      <p>HTML5</p>
    </div>
    <br />
    <div className="technologiesContainer">
      <FaCss3Alt className="css" />
      <p>CSS3</p>
 
    </div>
    <br />
    <div className="technologies3">
    <div className="technologiesContainer">
      <SiMaterialUi  className="materialui" />
      <p>MaterialUI</p>
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="ruby" src={ruby} />
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="python" src={python} />
        Python
    </div>
    <br />
    <div className="sinatra">
        <img className="sinatra" src={sinatra} />
        Sinatra
    </div>
    <br />
    <div className="node">
        <img className="node2" src={node} />
        Node
    </div>
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="jasmine" src={jasmine} />
        Jasmine
    </div>
    <br />
    <h4>Testing</h4>
    <div className="technologiesContainer">
    <img className="rspec" src={rspec} />
        RSpec
    </div>
    <br />
    <div className="technologiesContainer">
        <img className="postgres" src={postgres} />
        PostgreSQL
    </div>
    <br />
  </div>
  <br />
  <br />
  <br />
  </>
)

export default Tech;