/**
 * Created by chihyaohsu on 2016/1/12.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import LoginHandler from './js/login.js';
import './css/main.css';

let App = React.createClass({
    render() {
        return (
            <ul className="nav">
                <li><Link to="app">Home</Link></li>
                <li><Link to="login">Login</Link></li>

                <RouteHandler/>
            </ul>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <Route name="login" path="/login" handler={LoginHandler}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});