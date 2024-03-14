import { Store } from '@reduxjs/toolkit'
import { TodosContainer } from 'components/todosContainer/todosContainer'
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { Persistor } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

interface IAppProps {
	store: Store
	storePersistor: Persistor
}

export const App: React.FC<IAppProps> = ({ store, storePersistor }) => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={storePersistor}>
				<HashRouter>
					<Routes>
						<Route path="/" element={<TodosContainer />} />
					</Routes>
				</HashRouter>
			</PersistGate>
		</Provider>
	)
}

export default App
