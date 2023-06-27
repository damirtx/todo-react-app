import { useState } from 'react'

export function NewTodoForm({onSubmit}) {
	const [newItem, setNewItem] = useState()

	function handleSubmit(e) {
		e.preventDefault()
    if(newItem === '') return

		onSubmit(newItem)

		setNewItem('')
	}

	return (
		<form className="header__form" onSubmit={handleSubmit}>
			<div className="header__logo">
				<a href="#!">
					<svg
						fill="#2bcc81"
						width="36px"
						height="36px"
						viewBox="-2 -2 24 24"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMinYMin"
					>
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g
							id="SVGRepo_tracerCarrier"
							strokeLinecap="round"
							strokeLinejoin="round"
						></g>
						<g id="SVGRepo_iconCarrier">
							<path d="M6 0h8a6 6 0 0 1 6 6v8a6 6 0 0 1-6 6H6a6 6 0 0 1-6-6V6a6 6 0 0 1 6-6zm0 2a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6zm6 7h3a1 1 0 0 1 0 2h-3a1 1 0 0 1 0-2zm-2 4h5a1 1 0 0 1 0 2h-5a1 1 0 0 1 0-2zm0-8h5a1 1 0 0 1 0 2h-5a1 1 0 1 1 0-2zm-4.172 5.243L7.95 8.12a1 1 0 1 1 1.414 1.415l-2.828 2.828a1 1 0 0 1-1.415 0L3.707 10.95a1 1 0 0 1 1.414-1.414l.707.707z"></path>
						</g>
					</svg>
				</a>
			</div>

			<input
				className="header__input"
				type="text"
				placeholder="Add task..."
				required
				value={newItem}
				onChange={e => setNewItem(e.target.value)}
			/>

			<button className="header__btn">Add</button>
		</form>
	)
}
