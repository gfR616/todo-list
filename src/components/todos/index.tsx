import './styles.sass'
import { Card, Col, Row, message } from 'antd'
import React from 'react'

export const TodosContainer = () => {
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
					{/* <AddTodoForm onFormSubmit={handleFormSubmit} /> */}
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
					{/* <TodoList
						todos={todos}
						onTodoRemoval={handleRemoveTodo}
						onTodoToggle={handleToggleTodoStatus}
					/> */}
				</Card>
			</Col>
		</Row>
	)
}
