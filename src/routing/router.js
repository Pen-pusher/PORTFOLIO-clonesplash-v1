import React from 'react';
import {Switch, Route} from 'react-router-dom';
import LandingTrending from './../components/Landing/LandingTrending';
import LandingNew from './../components/Landing/LandingNew';
import Test from './../components/Test/Test';

export default (
<Switch>
    <Route exact path="/" component={LandingTrending} />
    <Route path="/new" component={LandingNew} />
    <Route path="/testing" component={Test} />
</Switch>
)