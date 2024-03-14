import { List } from 'antd'
import TodoItem from 'components/todoItem/todoItem'
import React, { useEffect, useState } from 'react'
import { ITodo } from 'store/todo/models/todo.model'

interface ITodoListProps {
	todos: ITodo[]
	onTodoRemoval: (todo: ITodo) => void
	onTodoToggle: (todo: ITodo) => void
}

export const TodoList: React.FC<ITodoListProps> = ({
	todos,
	onTodoRemoval,
	onTodoToggle,
}) => {
	const [pageSize, setPageSize] = useState(5)

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth
			if (windowWidth <= 600) {
				setPageSize(3)
			} else if (windowWidth <= 900) {
				setPageSize(4)
			} else {
				setPageSize(6)
			}
		}

		handleResize()

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	return (
		<List
			locale={{
				emptyText: 'Здесь пока ничего нет :(',
			}}
			dataSource={todos}
			renderItem={(todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					onTodoToggle={onTodoToggle}
					onTodoRemoval={onTodoRemoval}
				/>
			)}
			pagination={{
				position: 'bottom',
				pageSize: pageSize, // Используйте состояние pageSize
			}}
		/>
	)
}

export default TodoList
