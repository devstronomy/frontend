import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { ExtendButtonBase } from '@material-ui/core/ButtonBase'
import { ButtonTypeMap } from '@material-ui/core/Button'

export const MenuButton: ExtendButtonBase<ButtonTypeMap> = styled(Button).attrs({ className: 'DS-MenuButton' })`
  && {
    color: white;
    border-bottom: none;
  }
`
