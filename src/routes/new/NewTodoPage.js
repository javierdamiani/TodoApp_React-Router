import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
	const { stateUpdaters } = useTodos();
	const { addTodo } = stateUpdaters;

	return (
		<div>
			<TodoForm
				label="Escribe tu nuevo TODO"
				submitText="Añadir"
				submitEvent={(text) => addTodo(text)}
			/>
		</div>
	);
}

export { NewTodoPage };
