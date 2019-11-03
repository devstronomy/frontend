import React from 'react'

import Links from '../../../links'
import Planets from './Planets'
import * as S from './styles'

/**
 * Represents content with an interactive demo of planetary and satellites datasets.
 */
const SolarSystemPage = () => (
  <>
    <S.SolarSystemHeader>
      This is an interactive version of <a href='https://nssdc.gsfc.nasa.gov/planetary/factsheet/'>Planetary Fact
      Sheet</a> and <a href='https://ssd.jpl.nasa.gov/?sat_phys_par'>Planetary Satellite Physical Parameters</a>
      &nbsp;datasets from {Links.jpl}.
      <p>
        Tips: <span className='highlight'>Select the planet below</span> to see only its satellites
        or <span className='highlight'>click on the column</span> to sort.
      </p>
    </S.SolarSystemHeader>

    <hr />

    <Planets />
  </>
)

export default SolarSystemPage
