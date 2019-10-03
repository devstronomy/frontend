import React from 'react'
import { shallow } from 'enzyme'
import PlanetsContent from '../PlanetsContent'

describe('PlanetsContent', () => {
  it('should render correctly in "debug" mode', () => {
    expect(shallow(<PlanetsContent />)).toMatchSnapshot()
  })
})
