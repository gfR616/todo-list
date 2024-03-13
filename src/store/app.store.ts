import { rootReducer } from './todo/reducers/index.ts'
import { configureStore } from '@reduxjs/toolkit'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'

const reduxPersistConfig: PersistConfig<any> = {
	key: 'application',
	storage: storage,
	stateReconciler: autoMergeLevel2,
}

const pReducer = persistReducer(reduxPersistConfig, rootReducer as any)

export const store = configureStore({
	reducer: pReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
})

export const persistor = persistStore(store)
