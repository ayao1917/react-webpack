'use strict';

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';
import Icon from 'react-fa';

import '../../../css/style.css';

export default class ContentContainer extends React.Component {
    render() {
        return (
            <section id="content-container" className="dark">

                <header id="header">
                    <Icon id="menu-trigger" name='bars' className="header-button" />
                    <h1><a href="#">2TVNow</a></h1>
                </header>

                <div id="content" className="blog">

                    <RouteHandler/>
                </div>
            </section>
        );
    }
}