import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import App from '../App'
import appReducers from '../pages/solar-system/reducer'

describe('Application', () => {
  it('renders with menu', () => {
    const store = createStore(appReducers)
    const app = (
      <Provider store={store}>
        <App />
      </Provider>
    )
    const { unmount, getByText } = render(app)
    expect(getByText('Planets & Satellites')).toBeInTheDocument()
    expect(getByText('Datasets')).toBeInTheDocument()
    expect(getByText('Abbreviations')).toBeInTheDocument()
    expect(getByText('About')).toBeInTheDocument()
    unmount()
  })
})
