import styled from 'styled-components'
import { lighten } from 'polished'

const dsBlue = '#7ad'
const dsBlueLight = lighten(0.1)('#7ad')
const textColor = '#aaa'

export interface Highlightable {
  highlight?: boolean
}

export const plainText = styled.span`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.9em;
  font-weight: normal;
  color: ${textColor};
`

export const text = styled.span<Highlightable>`
  color: ${props => (props.highlight ? dsBlueLight : dsBlue)};
`

export const planetsContainer = styled.div`
  margin-top: 10px;
`

export const header = styled.div<Highlightable>`
  display: inline-block;
  font-size: larger;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-inline-start: 0;
  margin-inline-end: 0;
  font-weight: bold;
  color: ${props => (props.highlight ? dsBlueLight : dsBlue)};
`
