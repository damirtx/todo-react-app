export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
		<li className="task">
			<label className="task__wrapper">
				<input
					type="checkbox"
					checked={completed}
					onChange={e => toggleTodo(id, e.target.checked)}
				/>
				{title}
			</label>
			<button
				className="task__btn btn-danger"
				onClick={() => deleteTodo(id)}
			>
				Delete
			</button>
		</li>
	)
}