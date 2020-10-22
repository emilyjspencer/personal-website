import React from 'react';
import './App.css';
import NavBar from './shared/components/Navigation/NavBar';
import Main from './website/Main';
import Footer from './website/Footer';



const App = ()  => {
  return (
    <div className="App">
      <NavBar />
      <br />
    
      <Main />
      <Footer />
    </div>
  );
}

export default App;
