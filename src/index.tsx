import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import appReducers from './components/reducer'
import createSagaMiddleware from '@redux-saga/core'
import componentSagas from './components/sagas'
import { all, fork } from 'redux-saga/effects'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(appReducers, applyMiddleware(sagaMiddleware))

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
