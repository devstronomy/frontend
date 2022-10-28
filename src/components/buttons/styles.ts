import { Button } from '@mui/material'
import { ButtonTypeMap } from '@mui/material/Button'
import { ExtendButtonBase } from '@mui/material/ButtonBase'
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
