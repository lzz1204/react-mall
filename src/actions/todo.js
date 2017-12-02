export const TODO_SAVE = "TODO_SAVE";
export const TODO_COMPLETE = "TODO_COMPLETE";
export const TODO_DELETE = "TODO_DELETE";
export const TODO_MODIFY = "TODO_MODIFY";
export const saveTodo = (text)=> ({
	type:TODO_SAVE,
	payload:text
});

export const completeTodo = (id)=> ({
	type:TODO_COMPLETE,
	payload:id
});

export const deleteTodo = (id) => ({
	type:TODO_DELETE,
	payload:id
});
export const modifyTodo = (todo) => ({
	type:TODO_MODIFY,
	payload:todo
});