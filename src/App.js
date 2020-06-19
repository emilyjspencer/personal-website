import React from 'react';
import './App.css';
import NavBar from './shared/components/Navigation/NavBar';
import About from './website/About';
import Main from './website/Main';

const App = ()  => {
  return (
    <div className="App">
      <About />
      <NavBar />
      <Main />
    </div>
  );
}

export default App;
