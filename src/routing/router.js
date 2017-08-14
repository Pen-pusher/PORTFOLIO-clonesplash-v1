import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './../components/Landing/Landing';
import LandingNew from './../components/Landing/LandingNew';
import Test from './../components/Test/Test';

export default (
<Switch>
    <Route exact path="/" component={Landing} />
     <Route path="/new" component={LandingNew} /> 
</Switch>
)