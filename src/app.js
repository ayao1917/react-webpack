/**
 * Created by chihyaohsu on 2016/1/12.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import MenuScript from './js/scripts/menuScript.js';
import SideMenu from './js/layouts/frame/sideMenu.js';
import ContentContainer from './js/layouts/frame/contentContainer.js';
import FirstPageHandler from './js/layouts/pages/firstPage.js';
import SecondPageHandler from './js/layouts/pages/secondPage.js';
import './css/style.css';

let App = React.createClass({
    componentDidMount: function () {
        var script = new MenuScript();
        script.execute();
        document.getElementById("profileImg").src = require('./images/authorProfile.jpg');
    },
    render() {
        return (
            <div id="container">
                <SideMenu />
                <ContentContainer />
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