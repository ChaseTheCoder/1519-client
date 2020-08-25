import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/AboutPage';
import BallotList from '../Pages/BallotListPage';
import BallotShow from '../Pages/BallotShowPage';
import Feed from '../Pages/FeedPage';
import Login from '../Pages/LoginPage';
import Profile from '../Pages/ProfilePage';

export default (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/ballot/:id' component={BallotShow} />
        <Route exact path='/ballot' component={BallotList} />
        <Route path='/feed' component={Feed} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
    </Switch>
)