import { useEffect, useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import { TodoList } from './TodoList'
import './styles.css'

export default function App() {
	const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem('ITEMS')
    if (localValue === null) return []
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem('ITEMS', JSON.stringify(todos))
  }, [todos])

	function addTodo(title) {
		setTodos(currentTodos => {
			return [
				...currentTodos,
				{ id: crypto.randomUUID(), title, complited: false }
			]
		})
	}

	function toggleTodo(id, completed) {
		setTodos(currentTodos => {
			return currentTodos.map(todo => {
				if (todo.id === id) {
					return { ...todo, completed }
				}

				return todo
			})
		})
	}

	function deleteTodo(id) {
		setTodos(currentTodos => {
			return currentTodos.filter(todo => todo.id !== id)
		})
	}

	return (
		<>
			<header className="header">
				<div className="container">
					<NewTodoForm onSubmit={addTodo} />
				</div>
			</header>

			<main>
				<section className="tasks">
					<div className="container">
						<div className="tasks__wrapper">
							<h2 className="tasks__title">Tasks</h2>
							<TodoList
								todos={todos}
								toggleTodo={toggleTodo}
								deleteTodo={deleteTodo}
							/>
						</div>
					</div>
				</section>
			</main>
		</>
	)
}
