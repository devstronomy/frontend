import { TextField } from '@material-ui/core'
import { lighten } from 'polished'
import styled from 'styled-components'

import { dsBlue, dsBlueLight } from '../../globalStyles'

export const AbbrsPage = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1.2rem;
  flex-grow: 1;
`

export const TableWrapper = styled.div`
  // https://github.com/bvaughn/react-virtualized/blob/master/docs/usingAutoSizer.md
  flex: 1 1 auto;

  max-width: 800px;
  padding-top: 1rem;

  a {
    border-bottom: none;
    :hover {
      color: hsl(210, 60%, 93%); // normal un-hovered is #a0c4e7 -> hsl(210, 60%, 77%)
      border-bottom: none;
    }
  }
`

export const DSTextField = styled(TextField)`
  && {
    margin: 0 0 0.3rem 0;
  }

  .MuiInputLabel-root {
    color: ${dsBlueLight};
  }

  .MuiOutlinedInput-input {
    padding: 0.9rem 0.6rem;
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
