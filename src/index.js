import React from 'react';
import ReactDOM from 'react-dom';

const TodoList = () => {
	return (
		<ul>
			<li>Item 1</li>
			<li>Item 2</li>
		</ul>
	)
}

const el = (
	<div>
		<h1>Hello world</h1>
		<input type="search"/>
		<TodoList/>
	</div>
);

ReactDOM.render(el, document.getElementById('root'));