import { createGlobalStyle } from 'styled-components'
import { lighten } from 'polished'

export const dsBlue = '#7ad'
export const dsBlueLight = lighten(0.1)('#7ad')
export const textColor = '#aaa'

const backgroundColor = '#1e1e1e'
export const linkColor = dsBlueLight

export default createGlobalStyle`

  html {
    background: ${backgroundColor};
    text-align: left;
  }

  body {
    padding: 0;
    margin: 0;
    background: ${backgroundColor};
    color: #aaa;
    text-rendering: optimizeLegibility;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    font-size: 0.9em;
  }
  
  h1, h2, h3, h4, h5, h6 {
    color: ${dsBlue};
  }
  
  a, a:visited, a:hover, a:active {
    color: ${linkColor};
    text-decoration: none;
    border-bottom: 1px solid #5e6e7d;
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

`
