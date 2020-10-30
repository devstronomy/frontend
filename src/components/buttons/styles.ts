import { Button } from '@material-ui/core'
import { ButtonTypeMap } from '@material-ui/core/Button'
import { ExtendButtonBase } from '@material-ui/core/ButtonBase'
import styled from 'styled-components'

const widthBoundary = '600px'

export const MenuButton: ExtendButtonBase<ButtonTypeMap> = styled(Button).attrs({ className: 'DS-MenuButton' })`
  && {
    @media (max-width: ${widthBoundary}) {
      font-size: 0.7rem;
    }

    color: white;
    border-bottom: none;
  }
`
