import createSagaMiddleware from '@redux-saga/core'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { applyMiddleware, compose, createStore } from 'redux'
import { all, fork } from 'redux-saga/effects'

import App from './components/App'
import appReducers from './components/pages/solar-system/reducer'
import componentSagas from './components/pages/solar-system/sagas'

require('./handy.css')

const container = document.getElementById('root')
if (container == null) {
  throw new Error('unable to obtain element with "root" id')
}

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(appReducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(function* rootSaga() {
  yield all(componentSagas.map(fork))
})

createRoot(container).render(
  <Provider store={store}>
    <App />
  </Provider>
)
