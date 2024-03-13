import { todoReducer } from './todo.reducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
	todo: todoReducer,
})

export type RootState = ReturnType<typeof rootReducer>
