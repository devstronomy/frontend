import { render, screen } from '@testing-library/react'
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
    const { unmount } = render(app)

    // one hidden, one visible (depending on the width of the screen)
    expect(screen.getAllByText('Planets & Satellites')).toHaveLength(2)
    expect(screen.getAllByText('Datasets')).toHaveLength(2)
    expect(screen.getAllByText('Celestial')).toHaveLength(2)
    expect(screen.getAllByText('Abbreviations')).toHaveLength(2)

    expect(screen.getByText('About')).toBeInTheDocument()
    unmount()
  })
})
