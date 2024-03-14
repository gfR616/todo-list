import { List, Switch } from 'antd'
import TodoItem from 'components/todoItem/todoItem'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo } from 'store/todo/models/todo.model'
import { setFilterCompleted } from 'store/todo/reducers/todo.reducer'

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
	const dispatch = useDispatch()
	const filterCompleted = useSelector(
		(state: { filterCompleted: boolean }) => state.filterCompleted,
	)
	const filteredTodos = todos.filter((todo) => (filterCompleted ? !todo.completed : true))

	const handleSwitchChange = (checked: boolean) => {
		dispatch(setFilterCompleted(checked))
	}
	useEffect(() => {
		console.log('filterCompleted changed:')
		// Здесь можно выполнить любые действия, которые должны произойти при изменении filterCompleted
		// Например, можно выполнить запрос к API для обновления списка задач
	}, [handleSwitchChange])

	return (
		<div>
			<Switch
				checkedChildren="Показать невыполненные"
				unCheckedChildren="Показать все"
				checked={filterCompleted}
				onChange={handleSwitchChange}
			/>
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
