'use strict';

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';

import '../../../css/style.css';

export default class SideMenu extends React.Component {
    componentDidMount() {
        document.getElementById("profileImg").src = require('../../../images/authorProfile.jpg');
    }
    render() {
        return (
            <aside id="sidemenu-container">
                <div id="sidemenu">
                    <div id="author-profile">
                        <div className="author-profile-photo">
                            <img id="profileImg" alt=""/>
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
        );
    }
}