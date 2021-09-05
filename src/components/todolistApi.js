const todolistApi = {
	// UPDATE localStorage
	update(todoList) {
		localStorage.setItem('todoList', JSON.stringify(todoList));
		return JSON.parse(localStorage.getItem('todoList'));
	},

	// GET TODOLIST FROM localStorage
	fetch() {
		let todolistDB = localStorage.getItem('todoList');

		// CHECK IF todoList EXIST
		if (todolistDB) {
			todolistDB = JSON.parse(todolistDB);
		} else {
			// CREATE NEW TODO IF todoList DOES NOT EXIST
			let today = new Date();
			let newTodo = [
				{
					id: 0,
					name: 'Add a new task',
					date: today.toDateString(),
					completed: false
				}
			];
			// ADD NEW TODO TO localStorage
			todolistDB = todolistApi.update(newTodo);
		}
		return todolistDB;
	}
};

export default todolistApi;
