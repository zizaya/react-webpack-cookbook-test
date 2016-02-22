var React = require('react')
var ReactDOM = require('react-dom')
var Titlecomponent = require('./component.js')

var mainCom = ReactDOM.render(
	<Titlecomponent/>,
	document.getElementById('app')
)

/*import React from 'react';
import Titlecomponent from './component.js';

main();

function main() {
	React.render(<Titlecomponent />,document.getElementById('app'));
}*/