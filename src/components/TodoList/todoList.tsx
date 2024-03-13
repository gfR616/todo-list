import { ITodo } from '../../store/todo/models/todo.model'
import TodoItem from '../TodoItem/todoItem.tsx'
import { List } from 'antd'
import React from 'react'

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
			emptyText: "There's nothing to do :(",
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
