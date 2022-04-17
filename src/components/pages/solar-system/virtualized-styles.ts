import { Table as VirtualizedTable } from 'react-virtualized'
import styled from 'styled-components'

// TODO: workaround for unmaintained library
export const Table = styled(VirtualizedTable as any)`
  .ReactVirtualized__Table__row {
    display: flex;
    align-items: center;
    cursor: ${(props) => (props.pointerCursor ? 'pointer' : 'initial')};
  }

  .ReactVirtualized__Table__headerRow {
    font-weight: 700;
    text-transform: none;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .ReactVirtualized__Table__sortableHeaderIcon {
    flex-basis: auto;
  }

  .ReactVirtualized__Table__headerTruncatedText {
    flex-grow: 1;
    justify-content: flex-start;
  }

  .ReactVirtualized__Table__headerColumn:first-of-type,
  .ReactVirtualized__Table__rowColumn:first-of-type {
    margin-left: 0.6rem;
  }

  .ReactVirtualized__Table__headerColumn,
  .ReactVirtualized__Table__rowColumn {
    margin-right: 0.6rem;
    min-width: 0;
  }

  .ReactVirtualized__Table__sortableHeaderIcon {
    min-width: 1em;
    fill: currentColor;
  }

  .ReactVirtualized__Table__sortableHeaderColumn {
    cursor: pointer;
  }
`
