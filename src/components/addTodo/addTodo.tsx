import './styles.sass'
import { PlusCircleFilled } from '@ant-design/icons'
import { Button, Col, Form, Input, Row } from 'antd'
import React from 'react'
import { ITodo } from 'store/todo/models/todo.model'

interface IAddTodoFormProps {
	onFormSubmit: (todo: ITodo) => void
}

export const AddTodo: React.FC<IAddTodoFormProps> = ({ onFormSubmit }) => {
	const [form] = Form.useForm()

	const onFinish = () => {
		onFormSubmit({
			name: form.getFieldValue('name'),
		})

		form.resetFields()
	}

	return (
		<Form form={form} onFinish={onFinish} layout="horizontal" className="todo-form">
			<Row gutter={20}>
				<Col xs={24} sm={24} md={24} lg={24} xl={24}>
					<Form.Item
						name={'name'}
						rules={[{ required: true, message: 'Это поле обязательно!' }]}
					>
						<Input.TextArea
							className="text-area"
							placeholder="Что бы вы хотели сделать?"
						/>
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={10} className="button-aligment">
				<Col xs={24} sm={24} md={24} lg={24} xl={24}>
					<Button type="primary" htmlType="submit" className="add-button">
						<PlusCircleFilled />
						Добавить задачу
					</Button>
				</Col>
			</Row>
		</Form>
	)
}
