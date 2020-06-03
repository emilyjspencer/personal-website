import React from 'react';
import './App.css';
import NavBar from './shared/components/Navigation/NavBar';
import About from './website/About';

const App = ()  => {
  return (
    <div className="App">
      <About />
      <NavBar />
    </div>
  );
}

export default App;
