import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(logger)
}

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
