import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require('./style/main.scss');

ReactDOM.render(
	<App/>,
	document.getElementById('app')
);