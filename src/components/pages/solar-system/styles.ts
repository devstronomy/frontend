import { Button } from '@material-ui/core'
import styled from 'styled-components'

import { dsBlue, dsBlueLight, linkColor, linkUnderlineHoverColor, textColor } from '../../globalStyles'

interface Highlightable {
  highlight?: boolean
}

export const SolarSystemHeader = styled.div`
  padding: 1.2rem 1.2rem 0 1.2rem;
  text-align: center;
`

export const PlanetContainer = styled.div`
  padding: 0.6rem;
`

export const SatellitesContainer = styled.div`
  margin-top: 0.6rem;
`

export const HeaderContainer = styled.div`
  display: inline-block;
  margin: 0.6rem 0 0.6rem 0;
  margin-inline-end: 0;
`

export const HeaderText = styled.span<Highlightable>`
  font-weight: bold;
  font-size: larger;
  color: ${(props) => (props.highlight ? dsBlueLight : dsBlue)};
`

export const PlainText = styled.span`
  font-weight: normal;
  color: ${textColor};
`

export const Text = styled.span<Highlightable>`
  color: ${(props) => (props.highlight ? dsBlueLight : dsBlue)};
`

export const LinkButton = styled(Button).attrs({ className: 'DS-Button' })`
  && {
    font-weight: normal;
    background: none !important;
    border: none;
    border-bottom: 1px solid ${linkUnderlineHoverColor};
    border-radius: unset;
    color: ${linkColor};
    cursor: pointer;
    line-height: normal;
    padding: 0 !important;
    text-transform: none;
    vertical-align: initial;
  }

  :hover {
    border-bottom: 1px solid ${linkColor};
  }
`

export const Unit = styled.span`
  font-size: smaller;
  color: #c77;
`
