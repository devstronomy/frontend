import styled from 'styled-components'

export const Page = styled.div.attrs({ className: 'flexCenter' })`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  > * {
    align-content: flex-start;
    width: 80%;
    max-width: 800px;
    padding: 0 auto;
    margin: 0.5em 0 0.5em 0;
  }

  > div > ul,
  ol,
  li {
    margin: 0.1em 0 0.1em 0;
  }
`
