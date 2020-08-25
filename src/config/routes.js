import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/AboutPage';
import Ballots from '../Pages/BallotsPage';
import Ballot from '../Pages/BallotPage';
import Feed from '../Pages/FeedPage';
import Login from '../Pages/LoginPage';
import Profile from '../Pages/ProfilePage';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/ballot' component={Ballots} />
        <Route path='/ballot/:id' component={Ballot} />
        <Route path='/feed' component={Feed} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
    </Switch>
)