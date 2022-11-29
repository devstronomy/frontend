import { Button } from '@mui/material'
import { ButtonTypeMap } from '@mui/material/Button'
import { ExtendButtonBase } from '@mui/material/ButtonBase'
import styled from 'styled-components'

export const MenuButton: ExtendButtonBase<ButtonTypeMap> = styled(Button)`
  && {
    color: white;
    border-bottom: none;
  }
`
