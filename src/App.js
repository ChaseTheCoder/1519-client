import React from 'react';
import './App.css';
import Home from './Pages/Home';
import Nav from './Nav/Nav';
import About from './Pages/About';
import Ballot from './Pages/Ballot';
import Feed from './Pages/Feed';
import Login from './Pages/Login';
import Profile from './Pages/Profile';


export default function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      {/* <About /> */}
      {/* <Ballot /> */}
      {/* <Feed /> */}
      {/* <Login /> */}
      {/* <Profile /> */}
    </div>
  );
}
