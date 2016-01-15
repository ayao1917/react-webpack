/**
 * Created by chihyaohsu on 2016/1/12.
 */
'use strict';

import React from 'react';
import Hello from './component.jsx';
import './main.css';

main();

function main() {
    React.render(<Hello/>, document.getElementById('app'));
}