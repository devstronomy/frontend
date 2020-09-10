import { Button } from '@material-ui/core'
import { ButtonTypeMap } from '@material-ui/core/Button'
import { ExtendButtonBase } from '@material-ui/core/ButtonBase'
import styled from 'styled-components'

export const MenuButton: ExtendButtonBase<ButtonTypeMap> = styled(Button).attrs({ className: 'DS-MenuButton' })`
  && {
    color: white;
    border-bottom: none;
  }
`
