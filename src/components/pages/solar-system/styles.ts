import styled from 'styled-components'
import { dsBlue, dsBlueLight, linkColor, linkUnderlineHoverColor, textColor } from '../../globalStyles'
import { Button } from '@material-ui/core'

interface Highlightable {
  highlight?: boolean
}

export const SolarSystemHeader = styled.div`
  padding: 20px 20px 0 20px;
  text-align: center;
`

const TableContainer = styled.div`
  .main-column {
    justify-content: flex-start;
    color: #ffa;
  }

  .oddRow {
    background: #44596e;
  }

  .selectedRow {
    background: #74899e;
    border-bottom: 0;
    border-top: 0;
  }
`

export const PlanetContainer = styled(TableContainer)`
  padding: 10px;
`

export const SatellitesContainer = styled(TableContainer)`
  margin-top: 10px;
`

export const HeaderContainer = styled.div`
  display: inline-block;
  margin: 10px 0 10px 0;
  margin-inline-end: 0;
`

export const HeaderText = styled.span<Highlightable>`
  font-weight: bold;
  font-size: larger;
  color: ${props => (props.highlight ? dsBlueLight : dsBlue)};
`

export const PlainText = styled.span`
  font-weight: normal;
  color: ${textColor};
`

export const Text = styled.span<Highlightable>`
  color: ${props => (props.highlight ? dsBlueLight : dsBlue)};
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
