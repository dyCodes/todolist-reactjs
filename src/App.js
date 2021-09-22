import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import SearchForm from './components/SearchForm';
import AddTaskButton from './components/AddTaskButton';
import todolistApi from './components/todolistApi';

let todolistDB = todolistApi.fetch();

// APP
function App() {
	const [todoList, setTodoList] = useState(todolistDB);
	const [showAddForm, setShowAddForm] = useState(false);

	const onCheck = id => {
		todolistDB = todoList.map(todo => {
			return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
		});

		todolistApi.update(todolistDB);
		setTodoList(todolistDB);
	};

	const onDelete = id => {
		todolistDB = todoList.filter(todo => todo.id !== id);

		todolistApi.update(todolistDB);
		setTodoList(todolistDB);
	};

	const searchTodo = e => {
		setTodoList(
			todolistDB.filter(todo =>
				todo.name.toLowerCase().includes(e.toLowerCase())
			)
		);
	};

	const addNewTask = (todo, date) => {
		date = new Date(date);
		todolistDB = [
			...todolistDB,
			{
				// Generate random ID
				id: todolistDB.length + Math.floor(Math.random() * 550),
				name: todo,
				date: date.toDateString(),
				completed: false
			}
		];
		todolistApi.update(todolistDB);
		setTodoList(todolistDB);
	};

	const toggleAddForm = () => {
		setShowAddForm(!showAddForm);
		// CLEAR SEARCH
		setTodoList(todolistDB);
	};

	return (
		<div className="App">
			<header>
				<Header />
				{showAddForm ? (
					<AddTask addNewTask={addNewTask} />
				) : (
					<SearchForm searchTodo={searchTodo} />
				)}
			</header>

			<main>
				{todoList.length > 0 && <h3 className="heading">Tasks</h3>}
				<Tasks data={todoList} onCheck={onCheck} onDelete={onDelete} />
			</main>
				<AddTaskButton onAdd={toggleAddForm} showAddForm={showAddForm} />
		</div>
	);
}

export default App;
