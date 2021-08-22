import React, { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import SearchBox from './components/SearchBox';
import AddTaskButton from './components/AddTaskButton';

let todolistDB;
// UPDATE DB FUNCTION
const updateDB = todoList => {
	localStorage.setItem('todoList', JSON.stringify(todoList));
	return JSON.parse(localStorage.getItem('todoList'));
};

// GET TODOLIST FROM DB
(function() {
	todolistDB = localStorage.getItem('todoList');

	if (todolistDB) {
		todolistDB = JSON.parse(todolistDB);
	} else {
		let today = new Date();
		let newTodo = [
			{
				id: 0,
				name: 'Add a new task',
				date: today.toDateString(),
				completed: false
			}
		];
		todolistDB = updateDB(newTodo);
	}
})();

// APP
function App() {
	const [todoList, setTodoList] = useState(todolistDB);
	const [showAddForm, setShowAddForm] = useState(false);

	const onCheck = id => {
		todolistDB = todoList.map(todo => {
			return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
		});
		updateDB(todolistDB);
		setTodoList(todolistDB);
	};
	const onDelete = id => {
		todolistDB = todoList.filter(todo => todo.id !== id);
		updateDB(todolistDB);
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
		console.log(todo, date);
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
		updateDB(todolistDB);
		setTodoList(todolistDB);
	};
	const toggleAddForm = () => {
		setShowAddForm(!showAddForm);
	};

	return (
		<div className="App">
			<header>
				<Header />
				{showAddForm ? (
					<AddTask addNewTask={addNewTask} />
				) : (
					<SearchBox searchTodo={searchTodo} />
				)}
			</header>

			<main>
				<Tasks data={todoList} onCheck={onCheck} onDelete={onDelete} />
				<AddTaskButton onAdd={toggleAddForm} showAddForm={showAddForm} />
			</main>
		</div>
	);
}

export default App;
