import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import TodoList from './components/todo-list';
import SearchPannel from './components/search-panel';

const App = () => {
	return (
		<div>
			<AppHeader /> 
			<SearchPannel />
			<TodoList />		
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));