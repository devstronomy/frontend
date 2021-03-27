import createSagaMiddleware from '@redux-saga/core'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { all, fork } from 'redux-saga/effects'

import App from './components/App'
import appReducers from './components/pages/solar-system/reducer'
import componentSagas from './components/pages/solar-system/sagas'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(appReducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(function* rootSaga() {
  yield all(componentSagas.map(fork))
})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
