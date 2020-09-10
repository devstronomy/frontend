import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import { Link } from 'react-router-dom'

import Links from '../../../links'
import * as S from './styles'

/** Represents the 'About' page of Devstronomy application. */
const AboutPage = () => {
  useEffect(() => ReactGA.pageview('/about'))
  return (
    <S.AboutPage>
      <h1>Datasets</h1>
      <p>
        Devstronomy project provides <Link to='/datasets'>datasets</Link> related to astronomy in an accessible format
        (CSV, JSON, SQL). Currently, datasets of planets of our solar system and their natural satellites by {Links.jpl}
        &nbsp; are available.
      </p>

      <h1>Interactive Demo</h1>
      <p>
        Apart from the datasets themselves, there is an <Link to='/planets'>interactive demo</Link> of the data.
      </p>
    </S.AboutPage>
  )
}

export default AboutPage
