/**
 * Created by chihyaohsu on 2016/1/12.
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler, BrowserHistory } from 'react-router';
import $ from 'jquery';

//Components
import MenuScript from './js/scripts/menuScript.js';
import MainPage from './js/components/MainPage.js';
import HomePageHandler from './js/components/HomePage.js';
import ProductPageHandler from './js/components/ProductPage.js';
import PurchasePageHandler from './js/components/PurchasePage.js';
import PurchaseStep1 from './js/components/PurchaseStep1.js';
import PurchaseStep2 from './js/components/PurchaseStep2.js';
import OfficialPageHandler from './js/components/OfficialPage.js';
import FansPageHandler from './js/components/FansPage.js';

//css
import './css/style.css';
import './css/bootstrap.min.css';

let App = React.createClass({
    componentDidMount: function () {
        var script = new MenuScript();
        script.execute();
    },
    render() {
        return (
            <MainPage/>
        );
    }
});

let routes = (
    <Route name="app" path="/" handler={App} history={BrowserHistory}>
        <DefaultRoute name="home" handler={HomePageHandler}/>
        <Route name="product" path="/product" handler={ProductPageHandler}/>
        <Route name="purchaseStep1" path="/purchaseStep1" handler={PurchaseStep1}/>
        <Route name="purchaseStep2" path="/purchaseStep2" handler={PurchaseStep2}/>
        <Route name="purchase" path="/purchase" handler={PurchasePageHandler}/>
        <Route name="official" path="/official" handler={OfficialPageHandler}/>
        <Route name="fans" path="/fans" handler={FansPageHandler}/>
    </Route>
);

Router.run(routes, function (Handler, state) {
    ReactDOM.render(<Handler/>, document.getElementById("app"));
});