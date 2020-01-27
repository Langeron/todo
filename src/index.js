import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPannel from './components/search-panel';
import ItemStatusFilter from './components/item-status-filter';


import './index.css'

const App = () => {

	const todoData = [
		{ label: 'Drink Coffee', important: false, id: 1 },
		{ label: 'Make Awesome App', important: true, id: 2 },
		{ label: 'Have a lunch', important: false, id: 3 },
	]

	return (
		<div>
			<div className="todo-app">
				<AppHeader toDo={1} done={3} />
				<div className="top-panel d-flex">
					<SearchPannel />
					<ItemStatusFilter />
				</div>
				<TodoList todos={todoData} />
			</div>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));