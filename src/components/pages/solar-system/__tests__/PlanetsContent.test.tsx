import { shallow } from 'enzyme'
import React from 'react'

import SolarSystemPage from '../SolarSystemPage'

describe('SolarSystemPage', () => {
  it('should render correctly', () => {
    expect(shallow(<SolarSystemPage />)).toMatchSnapshot()
  })
})
