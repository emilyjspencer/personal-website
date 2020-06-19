import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Homepage from './Homepage'
import About from './About'
import Portfolio from './Portfolio'



const Main = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Homepage} />
    <About exact path="/about" component={About} />
    <Portfolio exact path="/portfolio" component={Portfolio} />
  </Switch>
  </BrowserRouter>
)

export default Main;