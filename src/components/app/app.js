import React, { Component } from 'react';

import AppHeader from '../app-header';
import TodoList from '../todo-list/todo-list';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css'

export default class App extends Component {
	maxId = 100
	state = {
		todoData: [
			this.createTodoItem('Drink Coffee'),
			this.createTodoItem('Make Awesome App'),
			this.createTodoItem('Have a lunch')
		]
	};

	createTodoItem(label) {
		return {
			label,
			important: false,
			done: false,
			render: true,
			filterBySearch: true,
			id: this.maxId++
		}
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];
			return {
				todoData: newArray
			}
		});
	};

	addItem = (text) => {
		const newItem = this.createTodoItem(text);
		if (!text.length) return;
		this.setState(({ todoData }) => {
			const newArray = [...todoData, newItem];
			return {
				todoData: newArray
			}
		});
	};

	toggleProperty = (arr, id, propName) => {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem[propName] };
		return [
			...arr.slice(0, idx),
			newItem,
			...arr.slice(idx + 1)
		];
	}

	onToggleImportant = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'important')
			};
		});
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
				todoData: this.toggleProperty(todoData, id, 'done')
			};
		});
	};

	filterByActive = () => {
		this.setState(({todoData}) => {
			const newArray = todoData.map((el) => {
				if (el.done) {
					el.render = false;
				} else {
					el.render = true;
				};
				return el;
			});

			return {
				todoData: newArray
			}
		})
	};

	filterByDone = () => {
		this.setState(({todoData}) => {
			const newArray = todoData.map((el) => {
				if (el.done) {
					el.render = true;
				} else {
					el.render = false;
				};
				return el;
			});

			return {
				todoData: newArray
			}
		})
	};

	filterByAll = () => {
		this.setState(({todoData}) => {
			const newArray = todoData.map((el) =>  {
				el.render = true;
				return el;
			});
			return {
				todoData: newArray
			}
		})
	};

	filterBySearch = (value) => {
		this.setState(({todoData}) => {
			const newArray = todoData.map((el) => {
				if (el.label.toLowerCase().includes(value.toLowerCase())) {
					el.filterBySearch = true;
				} else {
					el.filterBySearch = false;
				}
				
				return el;
			});

			return {
				todoData: newArray
			}

		})
	}

	render() {

		const { todoData } = this.state;
		const doneCount = todoData.filter((el) => el.done).length;
		const todoCount = todoData.length - doneCount;

		return (
			<div>
				<div className="todo-app">
					<AppHeader toDo={todoCount} done={doneCount} />
					<div className="top-panel d-flex">
						<SearchPanel
							onSearchChange={this.filterBySearch} />
						<ItemStatusFilter 
							onFilterByActive={this.filterByActive}
							onFilterByDone={this.filterByDone}
							onFilterByAll={this.filterByAll} />
					</div>
					<TodoList todos={todoData}
						onDeleted={this.deleteItem}
						onToggleImportant={this.onToggleImportant}
						onToggleDone={this.onToggleDone} />
					<ItemAddForm
						onItemAdded={this.addItem} />
				</div>
			</div>
		);
	};
};