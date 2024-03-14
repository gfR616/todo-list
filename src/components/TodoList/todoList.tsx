import { List } from 'antd'
import TodoItem from 'components/todoItem/todoItem'
import React from 'react'
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
}) => (
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
			pageSize: 10,
		}}
	/>
)

export default TodoList
