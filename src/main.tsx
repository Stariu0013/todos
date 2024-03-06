import ReactDOM from 'react-dom/client'
import App from './components/App/app.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM
  .createRoot(document.querySelector('#root')!)
  .render(<Provider store={store}><App /></Provider>)
