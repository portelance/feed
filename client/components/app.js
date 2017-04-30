import React from 'react';
import 'whatwg-fetch';

class StatusHeader extends React.Component {
	render() {
		return <h1>i need feed. 😭</h1>
	}
}


class EntryEditor extends React.Component {

	constructor(props) {
    super(props);
		this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
		this.state = {'content': ""};	
	}

	handleChange(event) {
		this.setState({
			'content': event.target.value
		});
	}

	handleClick(event) {
		this.props.publishEntry(this.state.content);
		this.setState({
			'content': ""
		});
	}

	render() {
		return (
			<div className='editor'>
				<textarea value={this.state.content} onChange={this.handleChange}></textarea>
				<button onClick={this.handleClick}>Munch!</button>
			</div>
		)
	}
}


class EntryRow extends React.Component {

	render() {
		return <div className='entry'>{this.props.content}</div>
	}
}


export default class App extends React.Component {

	constructor(props) {
    super(props);
		this.publishEntry = this.publishEntry.bind(this);
    this.state = {'entryRows': []};
  }

	publishEntry(content) {

		fetch('/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				'content': "hello"
			})
		});

		let newEntryRows = this.state.entryRows.concat([
			<EntryRow content={content} key={this.state.entryRows.length}/>
		]);
		this.setState({
			'entryRows': newEntryRows
		});
	}

	render() {
		return (
			<div>
				<StatusHeader/>
				<EntryEditor publishEntry={this.publishEntry}/>
				{this.state.entryRows}
			</div>
		)
	}
}