import React, { Component } from 'react';

import './search-panel.css'

export default class SearchPanel extends Component {
	
	onType = (evt) => {
		const search = evt.currentTarget;
		const value = search.value;
		this.props.onSearchChange(value);
	}

	render() {

		return (
			<input className="form-control search-input" 
				type="text" 
				placeholder="type to search"
				onChange={this.onType} />
		);
	}
}
