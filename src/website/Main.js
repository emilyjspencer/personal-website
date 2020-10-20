import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Portfolio2 from './Portfolio2';
import CV from './CV';
import Contact from './Contact';
import Interests from './Interests';


const Main = () => (
  <div>
  
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={About} />
    <Route exact path="/about" component={About} />
    <Portfolio2 exact path="/portfolio" component={Portfolio2} />
    <CV exact path="/cv" component={CV} />
    <Contact exact path="/contact" component={Contact} />
    <Interests exact path="/interests" component={Interests} />
  </Switch>
  </BrowserRouter>
  </div>
)

export default Main;