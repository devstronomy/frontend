import React from 'react'
import { shallow } from 'enzyme'
import SolarSystemPage from '../SolarSystemPage'

describe('SolarSystemPage', () => {
  it('should render correctly', () => {
    expect(shallow(<SolarSystemPage />)).toMatchSnapshot()
  })
})
