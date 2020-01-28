import React from 'react'

import './item-add-form.css';

const ItemAddForm = (props) => {
	const { onItemAdded } = props;
	return (
		<div className="item-add-form">
			<button type="button"
				className="btn btn-outline-secondary"
				onClick={() => onItemAdded('Hello World')}>
				Add Item
			</button>
		</div>
	);
};

export default ItemAddForm;
