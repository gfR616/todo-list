import './styles.sass'
import { Card, Col, Row, message } from 'antd'
import { AddTodoForm } from 'components/addTodo/addTodo'
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

	const todos: ITodo[] = useSelector((state: RootState) => state.todo.todos)

	const handleFormSubmit = (todo: ITodo): void => {
		const newTodo = {
			...todo,
			id: uuidV1(),
		}
		dispatch(addTodo(newTodo))
		message.success('Todo added!')
	}

	const handleRemoveTodo = (todo: ITodo): void => {
		dispatch(removeTodo(todo))
		message.warning('Todo removed!')
	}

	const handleToggleTodoStatus = (todo: ITodo): void => {
		dispatch(toggleTodoStatus(todo))
		message.info('Todo state updated!')
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
				{/* <PageHeader
					title="Add Todo"
					subTitle="To add a todo, just fill the form below and click in add todo."
				/> */}
			</Col>

			<Col
				xs={{ span: 23 }}
				sm={{ span: 23 }}
				md={{ span: 21 }}
				lg={{ span: 20 }}
				xl={{ span: 18 }}
			>
				<Card title="Create a new todo">
					<AddTodoForm onFormSubmit={handleFormSubmit} />
				</Card>
			</Col>

			<Col
				xs={{ span: 23 }}
				sm={{ span: 23 }}
				md={{ span: 21 }}
				lg={{ span: 20 }}
				xl={{ span: 18 }}
			>
				<Card title="Todo List">
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
