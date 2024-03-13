import { TodosContainer } from './components/todosContainer/todosContainer.tsx'
import { Store } from '@reduxjs/toolkit'
import React from 'react'
import { Provider } from 'react-redux'
import { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

interface IAppProps {
	store: Store
	storePersistor: Persistor
}

export const App: React.FC<IAppProps> = ({ store, storePersistor }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={<div>Loading...</div>} persistor={storePersistor}>
				<TodosContainer />
			</PersistGate>
		</Provider>
	)
}

export default App
