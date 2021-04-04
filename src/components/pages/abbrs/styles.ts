import { TextField } from '@material-ui/core'
import { lighten } from 'polished'
import styled from 'styled-components'

import { dsBlue, dsBlueLight } from '../../globalStyles'

export const AbbrsPage = styled.div`
  min-height: 200px;
  max-height: 70%;
  max-width: 800px;
  padding: 20px 20px 0 20px;
  flex-grow: 1;
`

export const DSTextField = styled(TextField)`
  && {
    margin: 0 0 5px 0;
  }

  .MuiInputLabel-root {
    color: ${dsBlueLight};
  }

  .MuiOutlinedInput-input {
    padding: 14px 10px;
  }

  .MuiInputLabel-root.Mui-focused {
    color: ${dsBlue};
  }

  .MuiOutlinedInput-notchedOutline {
    border-color: ${dsBlueLight};
  }

  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${lighten(0.3)(dsBlue)};
    border-width: 1px;
  }
`
