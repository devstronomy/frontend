import styled from 'styled-components'

import { linkColor } from '../../globalStyles'
import { Page } from '../styles'

export const DatasetsPage = styled(Page)``

export const DatasetHeader = styled.h1`
  padding: 1.2rem 1.2rem 0 1.2rem;
`

export const CodeLink = styled.code`
  color: ${linkColor};
  background: inherit;
  padding: 2px 0 2px 0;
`

export const Warning = styled.span`
  color: #f55;
  background: inherit;
  padding: 2px 0 2px 0;
`
