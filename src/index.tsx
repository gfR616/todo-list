import App from './App'
import { persistor, store } from './store/app.store'
import ReactDOM from 'react-dom/client'

const rootElement = document.getElementById('root')

const root = ReactDOM.createRoot(rootElement ?? document.createElement('div'))
root.render(<App store={store} storePersistor={persistor} />)
