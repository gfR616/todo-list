import { ITodo } from '../models/todo.model'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ITodoState {
	todos: ITodo[]
	filterCompleted: boolean
}

const initialState: ITodoState = {
	todos: [],
	filterCompleted: false,
}

const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<ITodo>) => {
			state.todos.unshift(action.payload)
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
		setFilterCompleted: (state, action: PayloadAction<boolean>) => {
			state.filterCompleted = action.payload
			console.log('New state:', state.filterCompleted)
		},
	},
})

export const { addTodo, removeTodo, toggleTodoStatus, setFilterCompleted } =
	todosSlice.actions

export default todosSlice.reducer
