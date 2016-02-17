'use strict';

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';
import ImageTag from './ImageTag.js';

export default class SideMenu extends React.Component {
    render() {
        return (
            <aside id="sidemenu-container">
                <div id="sidemenu">
                    <div id="author-profile">
                        <div className="author-profile-photo">
                            <ImageTag imgName="authorProfile.jpg" alt=""/>
                        </div>

                        <div className="author-profile-content">
                            <p className="title">ReactApp</p>
                            <p className="subtitle">app@react.com</p>
                        </div>
                    </div>
                    <nav id="nav-container">
                        <ul className="nav">
                            <li><Link to="product" className="nav-with-ul content">商品特色</Link></li>
                            <li><Link to="purchase" className="nav-with-ul content">團購辦法</Link></li>
                            <li><Link to="official" className="nav-with-ul content">Dyson官網</Link></li>
                            <li><Link to="fans" className="nav-with-ul content">Dyson粉絲團</Link></li>
                        </ul>
                    </nav>
                </div>
            </aside>
        );
    }
}