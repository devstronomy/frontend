import styled from 'styled-components'
import { dsBlue, dsBlueLight, textColor } from './globalStyles'

export const PlanetContainer = styled.div`
  padding: 10px;
`

export const SatellitesContainer = styled.div`
  margin-top: 10px;
`

export interface Highlightable {
  highlight?: boolean
}

export const PlainText = styled.span`
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-size: 0.9em;
  font-weight: normal;
  color: ${textColor};
`

export const Text = styled.span<Highlightable>`
  color: ${props => (props.highlight ? dsBlueLight : dsBlue)};
`

export const Header = styled.div<Highlightable>`
  display: inline-block;
  font-size: larger;
  margin: 10px 0 10px 0;
  margin-inline-end: 0;
  font-weight: bold;
  color: ${props => (props.highlight ? dsBlueLight : dsBlue)};
`

export const Button = styled.button`
  background: none !important;
  color: inherit;
  border: none;
  padding: 0 !important;
  font: inherit;
  /*border is optional*/
  border-bottom: 1px solid #999;
  cursor: pointer;
`
