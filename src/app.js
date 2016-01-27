/**
 * Created by chihyaohsu on 2016/1/12.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';
import Icon from 'react-fa';

import MenuScript from './js/utils/menuScript.js';
import FirstPageHandler from './js/pages/firstPage.js';
import SecondPageHandler from './js/pages/secondPage.js';
import './css/style.css';

let App = React.createClass({
    componentDidMount: function () {
        var script = new MenuScript();
        script.execute();
    },
    render() {
        return (
            <div id="container">
                <aside id="sidemenu-container">
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
                                <li><Link to="first" className="current nav-with-ul content">首頁</Link></li>
                                <li><Link to="second" className="nav-with-ul content">台視</Link></li>
                            </ul>
                        </nav>
                    </div>
                </aside>

                <section id="content-container" className="dark">

                    <header id="header">
                        <Icon id="menu-trigger" name='bars' className="header-button" />
                        <h1><a href="#">2TVNow</a></h1>
                    </header>

                    <div id="content" className="blog">

                        <RouteHandler/>
                    </div>
                </section>

            </div>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App}>
        <DefaultRoute name="first" handler={FirstPageHandler}/>
        <Route name="second" path="/second" handler={SecondPageHandler}/>
    </Route>
);

Router.run(routes, function (Handler) {
    ReactDOM.render(<Handler/>, document.getElementById("app"));
});