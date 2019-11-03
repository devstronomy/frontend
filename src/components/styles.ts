import styled from 'styled-components'
import LaunchIcon from '@material-ui/icons/Launch'

export interface Highlightable {
  highlight?: boolean
}

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
