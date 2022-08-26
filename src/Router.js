import React from 'react'
import { Switch, Route } from 'react-router'
// import Home from './components/Home'
import Home from './containers/HomeContainer'
import About from './components/About'
import Car from './components/Car'
// import Dashboard from './components/Dashboard'
import Dashboard from './containers/DashbroadContainer'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/car/:id" component={Car} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default Router;