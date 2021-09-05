import React from 'react';

const Tasks = ({ data, onCheck, onDelete }) => {
	return (
		<div className="tasks">
			{/* HIDE TASK COMPONENT IF TODOLIST IS EMPTY */}
			{data.length > 0 ? (
				<Task data={data} onCheck={onCheck} onDelete={onDelete} />
			) : (
				<h2 className="noTask">No Task Found</h2>
			)}
		</div>
	);
};

const Task = ({ data, onCheck, onDelete }) => {
	return (
		<div>
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
	);
};

export default Tasks;
