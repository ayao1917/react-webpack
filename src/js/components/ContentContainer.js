'use strict';

import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler} from 'react-router';
import Icon from 'react-fa';

export default class ContentContainer extends React.Component {
    static contextTypes = {
        router: React.PropTypes.func
    };

    handleMenuChange = (e) => {
        let currentPath = this.context.router.getCurrentPath();

        if (currentPath !== "/") {
            //this.context.router.goBack();
            this.context.router.transitionTo("/");
        }
    };

    render() {
        let currentPath = this.context.router.getCurrentPath();
        let title = "限時團購";
        let realSrc = require('../../images/bg_main.jpg');
        let contentStyle = {
            contentHome: {
                margin: '0',
                backgroundColor: 'white',
                background: 'url(' + realSrc + ') no-repeat',
                backgroundSize: 'cover',
                width: 'auto',
                height: '100vh'
            },
            contentPage: {
                margin: '0',
                backgroundColor: 'white'
            }
        };

        switch (currentPath) {
            case "/":
                title = "限時團購";
                break;

            case "/product":
                title = "商品特色";
                break;

            case "/purchaseStep1":
                title = "輸入資訊";
                break;

            case "/purchase":
                title = "團購辦法";
                break;

            case "/official":
                title = "Dyson官網";
                break;

            case "/fans":
                title = "Dyson粉絲團";
                break;

            default :
                title = "限時團購";
                break;
        }

        return (
            <section id="content-container" className="dark" style={currentPath === '/' ? contentStyle.contentHome : contentStyle.contentPage}>

                <header id="header">
                    <Icon id="menu-trigger" name={currentPath === '/' ? 'bars' : 'times'} onClick={this.handleMenuChange}
                          className={currentPath === '/' ? 'header-button' : 'header-button inside'}/>
                    <h1><a href="#">{title}</a></h1>
                </header>

                <div id="content" className="blog">
                    <RouteHandler/>
                </div>
            </section>
        );
    }
}