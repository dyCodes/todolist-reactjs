import React from 'react';

function Tasks({ data, onCheck, onDelete }) {
	if (data.length > 0) {
		return (
			<>
				<h3 className="heading">Tasks</h3>
				<div className="tasks">
					{data.map(todo => (
						<div className="task" key={todo.id}>
							<span className="flex">
								<input
									type="checkbox"
									defaultChecked={todo.completed}
									id={todo.id}
									onChange={() => onCheck(todo.id)}
								/>
								<label htmlFor={todo.id}>{todo.name}</label>
							</span>
							<div className="date">{todo.date}</div>
							<div className="delTask" onClick={() => onDelete(todo.id)}>
								&times;
							</div>
						</div>
					))}
				</div>
			</>
		);
	} else {
		return (
			<div className="tasks">
				<h2 className="noTask">No Task Found</h2>
			</div>
		);
	}
}

export default Tasks;
