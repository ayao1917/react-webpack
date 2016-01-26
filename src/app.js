/**
 * Created by chihyaohsu on 2016/1/12.
 */
'use strict';

import React from 'react';
import Hello from './js/component.js';
import './css/main.css';

app();

function app() {
    React.render(<Hello/>, document.getElementById('app'));
}