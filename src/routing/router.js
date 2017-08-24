import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingTrending from './../components/Landing/LandingTrending';
import LandingNew from './../components/Landing/LandingNew';
import PublicProfile from './../components/User/PublicProfile';
import Account from './../components/User/Account';

export default (
<Switch>
    <Route exact path="/" component={LandingTrending} />
    <Route path="/new" component={LandingNew} />
    <Route path="/user/:id" component={PublicProfile} />
    <Route path="/account" component={Account} />
</Switch>
)