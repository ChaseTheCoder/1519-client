import React from 'react';
import routes from './config/routes';
import Nav from './Nav/Nav';
import './App.css';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <div className="container">
           { routes }
        </div>
      </React.Fragment>
      
    );
  }
}

export default App;