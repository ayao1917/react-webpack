/**
 * Created by chihyaohsu on 2016/1/12.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import LoginHandler from './js/pages/login.js';
import './css/style.css';

let App = React.createClass({
    render() {
        return (
            <div id="container">
                <aside id="sidemenu-container" className="">
                    <div id="sidemenu">
                        <div id="author-profile">
                            <div className="author-profile-photo">
                                <img src="./images/authorProfile.jpg" alt=""/>
                            </div>

                            <div className="author-profile-content">
                                <p className="title">ReactApp</p>

                                <p className="subtitle">app@react.com</p>
                            </div>
                        </div>
                        <nav id="nav-container">
                            <ul className="nav">
                                <li><Link to="app" className="current nav-with-ul content">首頁</Link></li>
                                <li><Link to="login" className="nav-with-ul content">台視</Link></li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <RouteHandler/>
            </div>
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