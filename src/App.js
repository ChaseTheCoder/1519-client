import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Nav from './Nav/Nav';
import About from './Pages/About';

export default function App() {
  return (
    <div className="App">
      <Nav />
      {/* <Home /> */}
      <About />
    </div>
  );
}
