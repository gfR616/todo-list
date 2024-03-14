import { List, Switch } from 'antd'
import TodoItem from 'components/todoItem/todoItem'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo } from 'store/todo/models/todo.model'
import { selectFilteredTodos, setFilterCompleted } from 'store/todo/reducers/todo.reducer'

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
	const filteredTodos = useSelector(selectFilteredTodos)

	return (
		<div>
			<List
				locale={{
					emptyText: 'Здесь пока ничего нет :(',
				}}
				dataSource={filteredTodos}
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
					pageSize: 5,
				}}
			/>
		</div>
	)
}

export default TodoList
