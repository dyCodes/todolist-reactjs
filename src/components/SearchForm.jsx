import React, { useState } from 'react';

function SearchForm({ searchTodo }) {
	const [typing, setTyping] = useState();
	const [input, setInput] = useState('');
	// CHANGE INPUT ICON IF TYPING IS TRUE
	let class_name = typing ? 'fa fa-times' : 'fa fa-search';

	const clearForm = () => {
		// CLEAR FORM INPUT VALUE
		setInput('');
		searchTodo('');
		setTyping(false);
	};

	const onChange = e => {
		setInput(e.target.value);
		searchTodo(e.target.value);
		e.target.value.length > 0 ? setTyping(true) : setTyping(false);
	};

	return (
		<form id="searchForm" onSubmit={e => e.preventDefault()}>
			<input
				type="text"
				placeholder="Search For Task..."
				value={input}
				onChange={onChange}
			/>
			<i className={class_name} onClick={clearForm}></i>
		</form>
	);
}

export default SearchForm;
