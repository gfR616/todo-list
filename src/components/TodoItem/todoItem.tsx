import './styles.sass'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
import { Button, List, Popconfirm, Switch, Tag, Tooltip } from 'antd'
import React from 'react'
import { ITodo } from 'store/todo/models/todo.model'

interface ITodoItemProps {
	todo: ITodo
	onTodoRemoval: (todo: ITodo) => void
	onTodoToggle: (todo: ITodo) => void
}

export const TodoItem: React.FC<ITodoItemProps> = ({
	todo,
	onTodoRemoval,
	onTodoToggle,
}) => {
	return (
		<List.Item
			actions={[
				<>
					<Tooltip
						title={
							todo.completed ? 'Пометить как незавершенное' : 'Пометить как завершенное'
						}
					>
						<Switch
							checkedChildren={<CheckOutlined />}
							unCheckedChildren={<CloseOutlined />}
							onChange={() => onTodoToggle(todo)}
							defaultChecked={todo.completed}
						/>
					</Tooltip>
					<Popconfirm
						title="Вы уверены, что хотите удалить?"
						onConfirm={() => {
							onTodoRemoval(todo)
						}}
					>
						<Button className="remove-todo-button" type="primary" danger>
							Удалить
						</Button>
					</Popconfirm>
				</>,
			]}
			className="list-item"
			key={todo.id}
		>
			<div className="todo-item">
				<Tag color={todo.completed ? 'green' : 'orange'} className="todo-tag">
					{todo.name}
				</Tag>
			</div>
		</List.Item>
	)
}
export default TodoItem
