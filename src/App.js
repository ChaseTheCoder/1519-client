import React from 'react';
import routes from './config/routes';
import Nav from './Nav/Nav';
import './App.css';
// import Home from './Pages/Home';
// import About from './Pages/About';
// import Ballot from './Pages/Ballot';
// import Feed from './Pages/Feed';
// import Login from './Pages/Login';
// import Profile from './Pages/Profile';


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