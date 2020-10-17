import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage';
import About from './About';
import Portfolio2 from './Portfolio2';
import CV from './CV';
import Information from './Information';
import Contact from './Contact';




const Main = () => (
  <div>
    <Information />
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Homepage} />
    <About exact path="/about" component={About} />
    <Portfolio2 exact path="/portfolio" component={Portfolio2} />
    <CV exact path="/cv" component={CV} />
    <Contact exact path="/contact" component={Contact} />
  </Switch>
  </BrowserRouter>
  </div>
)

export default Main;