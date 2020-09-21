import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './pages/HomePage';
import Services from './pages/Services';
import Products from './pages/Products';
import SignUp from './pages/SignUp';
import Footer from './pages/Footer'

function Routes() {
    return (
        <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' component={Services} />
            <Route path='/products' component={Products} />
            <Route path='/sign-up' component={SignUp} />
        </Switch>
        <Footer />
        </Router>
    )
}

export default Routes;


