import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Ballot from '../Pages/Ballot';
import Feed from '../Pages/Feed';
import Login from '../Pages/Login';
import Profile from '../Pages/Profile';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/ballot' component={Ballot} />
        <Route path='/feed' component={Feed} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
    </Switch>
)