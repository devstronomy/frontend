import { Link } from 'react-router-dom'

import Jpl from '../../Jpl'
import * as S from './styles'

/** Represents the 'About' page of Devstronomy application. */
const AboutPage = () => (
  <S.AboutPage>
    <h1>Datasets</h1>
    <p>
      Devstronomy project provides <Link to='/datasets'>datasets</Link> related to astronomy in an accessible format
      (CSV, JSON, SQL). Currently, datasets of planets of our solar system and their natural satellites by <Jpl />
      &nbsp; are available.
    </p>

    <h1>Interactive Demo</h1>
    <p>
      Apart from the datasets themselves, there is an <Link to='/planets'>interactive demo</Link> of the data.
    </p>
  </S.AboutPage>
)

export default AboutPage
