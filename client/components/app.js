import React from 'react';

class StatusHeader extends React.Component {
	render() {
		return <h1>i need feed 😭</h1>
	}
}


class EntryTextarea extends React.Component {
	render() {
		return <textarea className='entry'></textarea>
	}
}


class PostButton extends React.Component {

	constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

	handleClick(event) {
		this.props.publishEntry();
	}

	render() {
		return <button onClick={this.handleClick}>Munch!</button>
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

	publishEntry() {
		let newEntryRows = this.state.entryRows.concat([
			<EntryRow content="CONTENT" key={this.state.entryRows.length}/>
		]);
		this.setState({
			'entryRows': newEntryRows
		});
	}

	render() {
		return (
			<div>
				<StatusHeader/>
				<EntryTextarea/>
				<PostButton publishEntry={this.publishEntry}/>
				{this.state.entryRows}
			</div>
		)
	}
}