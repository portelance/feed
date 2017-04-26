import React from 'react';

class Status extends React.Component {
	render () {
		return <h1>i need feed 😭</h1>
	}
}

class Entry extends React.Component {
	render () {
		return <textarea className="entry"></textarea>
	}
}

export default class App extends React.Component {
	render () {
		return (
			<div>
				<Status/>
				<Entry/>
			</div>
		)
	}
}