import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
	reducer,
)

// For debugging
if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production')
  global.store = store

export default store