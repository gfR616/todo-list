import './styles.sass'
import { Card, Col, Row, Typography, message } from 'antd'
import { AddTodo } from 'components/addTodo/addTodo'
import TodoList from 'components/todoList/todoList'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ITodo } from 'store/todo/models/todo.model'
import { RootState } from 'store/todo/reducers/'
import { addTodo, removeTodo, toggleTodoStatus } from 'store/todo/reducers/todo.reducer'
import { v1 as uuidV1 } from 'uuid'

interface ITodosContainerProps {}

export const TodosContainer: React.FC<ITodosContainerProps> = () => {
	const dispatch = useDispatch()
	const { Title, Paragraph } = Typography
	const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos)

	const handleFormSubmit = (todo: ITodo): void => {
		const newTodo = {
			...todo,
			id: uuidV1(),
		}
		dispatch(addTodo(newTodo))
		message.success('Задача добавлена!')
	}

	const handleRemoveTodo = (todo: ITodo): void => {
		dispatch(removeTodo(todo))
		message.warning('Задача удалена!')
	}

	const handleToggleTodoStatus = (todo: ITodo): void => {
		dispatch(toggleTodoStatus(todo))
		message.info('Статус задачи обновлен!')
	}
	return (
		<Row justify="center" align="middle" gutter={[0, 20]} className="todos-container">
			<Col
				xs={{ span: 23 }}
				sm={{ span: 23 }}
				md={{ span: 21 }}
				lg={{ span: 20 }}
				xl={{ span: 18 }}
			>
				<div>
					<Title level={1}>Добавить задачу</Title>
					<Paragraph>
						Чтобы добавить задачу, просто заполните форму ниже и нажмите «Добавить
						задачу».
					</Paragraph>
				</div>
			</Col>

			<Col
				xs={{ span: 23 }}
				sm={{ span: 23 }}
				md={{ span: 21 }}
				lg={{ span: 20 }}
				xl={{ span: 18 }}
			>
				<Card title="Добавить новую задачу:">
					<AddTodo onFormSubmit={handleFormSubmit} />
				</Card>
			</Col>

			<Col
				xs={{ span: 23 }}
				sm={{ span: 23 }}
				md={{ span: 21 }}
				lg={{ span: 20 }}
				xl={{ span: 18 }}
			>
				<Card title="Список задач:">
					<TodoList
						todos={todos}
						onTodoRemoval={handleRemoveTodo}
						onTodoToggle={handleToggleTodoStatus}
					/>
				</Card>
			</Col>
		</Row>
	)
}
