import React, { useState } from 'react';

let today = new Date();
// CHANGE DATE TO ISOString FORMAT
today = today.toISOString().substr(0, 10);

function AddTask({ addNewTask }) {
	const [text, setText] = useState('');
	const [date, setDate] = useState(today);

	const onSubmit = e => {
		e.preventDefault();
		addNewTask(text, date);
		setText('');
		setDate(today);
	};

	return (
		<form id="addTaskForm" onSubmit={onSubmit}>
			<input
				type="text"
				required
				placeholder="Enter Task"
				value={text}
				onChange={e => {
					setText(e.target.value);
				}}
			/>
			<input
				type="date"
				required
				value={date}
				onChange={e => {
					setDate(e.target.value);
				}}
				id="date"
			/>
			<button type="submit">Save Task</button>
		</form>
	);
}

export default AddTask;
