import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import appReducers from '../components/pages/solar-system/reducer'

it('renders without crashing', () => {
  const store = createStore(appReducers)
  const app = (
    <Provider store={store}>
      <App />
    </Provider>
  )
  const div = document.createElement('div')
  ReactDOM.render(app, div)
  ReactDOM.unmountComponentAtNode(div)
})
