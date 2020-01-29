import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {
	state = {
		
	};

	render() {

		const { onFilterByActive, onFilterByAll, onFilterByDone } = this.props;

		return (
			<div className="btn-group">
				<button type="button"
					className="btn btn-info"
					onClick={onFilterByAll} >
						All
					</button>
				<button type="button"
					className="btn btn-outline-secondary"
					onClick={onFilterByActive} >
						Active
					</button>
				<button type="button"
					className="btn btn-outline-secondary"
					onClick={onFilterByDone} >
						Done
					</button>
			</div>
		);
	}
};