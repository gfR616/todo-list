import { ITodo } from '../models/todo.model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ITodoState {
	todos: ITodo[]
}

const initialState: ITodoState = {
	todos: [],
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.push(action.payload)
			console.log(state.todos)
		},
		removeTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos = state.todos.filter((todo) => todo.id !== action.payload.id)
		},
		toggleTodoStatus: (state, action: PayloadAction<ITodo>) => {
			const index = state.todos.findIndex((todo) => todo.id === action.payload.id)
			if (index !== -1) {
				state.todos[index].completed = !state.todos[index].completed
			}
		},
	},
})

export const { addTodo, removeTodo, toggleTodoStatus } = todosSlice.actions

export default todosSlice.reducer
