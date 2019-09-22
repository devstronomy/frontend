import styled from 'styled-components'
import { dsBlue, dsBlueLight, textColor } from './globalStyles'

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
