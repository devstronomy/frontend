import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './components/App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import appReducers from './components/pages/solar-system/reducer'
import createSagaMiddleware from '@redux-saga/core'
import componentSagas from './components/pages/solar-system/sagas'
import { all, fork } from 'redux-saga/effects'

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
