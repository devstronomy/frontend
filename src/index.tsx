import createSagaMiddleware from '@redux-saga/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { all, fork } from 'redux-saga/effects'

import App from './components/App'
import appReducers from './components/pages/solar-system/reducer'
import componentSagas from './components/pages/solar-system/sagas'
import * as serviceWorker from './serviceWorker'

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

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
