import { rootReducer } from './todo/reducers'
import { Store, applyMiddleware, createStore } from 'redux'
import { PersistConfig, persistReducer, persistStore } from 'redux-persist'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

const reduxPersistConfig: PersistConfig<any> = {
	key: 'application',
	storage: storage,
	stateReconciler: autoMergeLevel2,
}

const pReducer = persistReducer(reduxPersistConfig, rootReducer)

export const store: Store = createStore(pReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)
