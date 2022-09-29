import { applyMiddleware, legacy_createStore as createStore} from 'redux'
import { reducer } from './reducer'
import thunk from 'redux-thunk'

const middleware = applyMiddleware(thunk)

export const store = createStore(reducer,middleware)