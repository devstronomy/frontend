import { createGlobalStyle } from 'styled-components'
import { darken, lighten } from 'polished'
import { Index } from 'react-virtualized'

export const dsBlue = '#7ad'
export const dsBlueLight = lighten(0.1)('#7ad')
export const textColor = '#aaa'

const backgroundColor = '#1e1e1e'
export const linkColor = dsBlueLight
export const linkUnderlineHoverColor = '#5e6e7d'

const tableBorder = '1px solid #24494E'

export const rowClassName = ({ index }: Index, isSelected?: (row: number) => boolean): string => {
  if (index === -1) {
    return ''
  }
  if (isSelected && isSelected(index)) {
    return 'rvt-selected-row'
  }
  if (index % 2 === 0) {
    return 'rvt-odd-row'
  }
  return ''
}

// Defaults for React Virtualized Table column.
const rvtColumn = `
  align-items: center;
  border-right: ${tableBorder};
  display: flex;
  flex: 1;
  height: 100%;
  min-width: 0;

  &:last-child {
    border-right: none;
  };
`

export default createGlobalStyle`

  html {
    height: 100%;
    background: ${backgroundColor};
    text-align: left;
  }

  body {
    height: 100%;
    padding: 0;
    margin: 0;
    background: ${backgroundColor};
    color: #aaa;
    text-rendering: optimizeLegibility;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.9em;
  }
  
  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${dsBlue};
  }
  
  a, a:visited, a:hover, a:active {
    color: ${linkColor};
    text-decoration: none;
    border-bottom: 1px solid ${linkUnderlineHoverColor};
  }
  
  a:hover {
    border-bottom: 1px solid ${linkColor};
  }
  
  hr {
    border-color: #444;
  }
  
  pre, code {
    background: ${lighten(0.1)(backgroundColor)}
    color: #cdc;
  }
  
  code {
    padding: 2px 4px 2px 4px;
  }
  
  pre {
    padding: 10px 10px 10px 10px;
  }
  
  table {
    border-collapse: collapse;
  }
  
  table, th, td {
    border: 1px solid ${lighten(0.2)(backgroundColor)};
  }
  
  th {
    text-align: center;
  }
  
  th, td {
    padding: 7px;
  }
  
  tr:nth-child(2n) {
    background: ${lighten(0.05)(backgroundColor)};
  }

  /*** Overrides for react-virtualized styles ***/
  .ReactVirtualized__Table__Grid {
    border-bottom: ${tableBorder};
    border-right: ${tableBorder};
    background: #34495E;
  }
  
  /** Always show scrollbar. */
  .ReactVirtualized__Table__Grid::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 10px;
  }
  .ReactVirtualized__Table__Grid::-webkit-scrollbar-thumb {
    border: 1px solid ${darken(0.25, dsBlue)}; 
    border-radius: 4px;
    background-color: rgba(0,0,0,.5);
    -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5);
  }
  
  .ReactVirtualized__Table__headerColumn {
    ${rvtColumn};
    justify-content: center;
    padding-right: 10px;
  }
  
  .ReactVirtualized__Table__headerRow {
    background: #24394E;
    border: ${tableBorder};
    padding-right: 0 !important;
    text-transform: none;
    color: #dddd49;
  }
  
  .ReactVirtualized__Table__rowColumn {
    ${rvtColumn};
    justify-content: flex-end; // expect number-type by default
    padding-right: 10px;
  }
  
  .ReactVirtualized__Table__row {
    color: #fff;
    border-bottom: ${tableBorder};
    border-left: ${tableBorder};
  }
  
  // Application specific React Virtualized Table (rvt) tweaks
  .rvt-main-column {
    justify-content: flex-start;
    color: #ffa;
  }

  .rvt-odd-row {
    background: #44596e;
  }

  .rvt-selected-row {
    background: #74899e;
    border-bottom: 0;
    border-top: 0;
  }
  
  .rvt-string-column {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`
