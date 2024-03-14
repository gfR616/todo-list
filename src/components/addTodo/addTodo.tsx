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
				<Col xs={24} sm={24} md={17} lg={19} xl={20}>
					<Form.Item
						name={'name'}
						rules={[{ required: true, message: 'This field is required' }]}
					>
						<Input placeholder="Что бы вы хотели сделать?" />
					</Form.Item>
				</Col>
				<Col xs={24} sm={24} md={7} lg={5} xl={4}>
					<Button type="primary" htmlType="submit" block>
						<PlusCircleFilled />
						Добавить задачу
					</Button>
				</Col>
			</Row>
		</Form>
	)
}
