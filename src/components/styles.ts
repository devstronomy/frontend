import styled from 'styled-components'
import { dsBlue, dsBlueLight, textColor } from './globalStyles'
import { Button } from '@material-ui/core'
import LaunchIcon from '@material-ui/icons/Launch'

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
  font-weight: normal;
  color: ${textColor};
`

export const Text = styled.span<Highlightable>`
  color: ${props => (props.highlight ? dsBlueLight : dsBlue)};
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

export const LinkButton = styled(Button).attrs({ className: 'DS-Button' })`
  && {
    font-weight: normal;
    background: none !important;
    border: none;
    border-bottom: 1px solid #999;
    border-radius: unset;
    color: ${textColor};
    cursor: pointer;
    line-height: normal;
    padding: 0 !important;
    text-transform: none;
    vertical-align: initial;
  }
`

export const Unit = styled.span`
  font-size: smaller;
  color: #c77;
`

export const Root = styled.div`
  flex-grow: 1;
`

export const Grow = styled.div`
  flex-grow: 1;
`

export const StyledLaunchIcon = styled(LaunchIcon)`
  width: 13px;
  height: 13px;
  color: white;
`

export const Page = styled.div.attrs({ className: 'flexCenter' })`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  > * {
    align-content: flex-start;
    width: 80%;
    max-width: 800px;
    padding: 0 auto;
    margin: 0.5em 0 0.5em 0;
  }

  > div > ul,
  ol,
  li {
    margin: 0.1em 0 0.1em 0;
  }
`

export const DatasetContent = styled(Page)``

export const PlanetsHeader = styled.div`
  padding: 20px 20px 0 20px;
  text-align: center;
`

export const DatasetHeader = styled.h1`
  padding: 20px 20px 0 20px;
`
