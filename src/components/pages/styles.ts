import styled from 'styled-components'

const widthBoundary = '600px'

export const Page = styled.div.attrs({ className: 'flexCenter' })`
  && {
    display: flex;
    flex-direction: column;
    @media (min-width: ${widthBoundary}) {
      align-items: center;
      margin: 0 auto;
    }
    @media (max-width: ${widthBoundary}) {
      padding: 0 20px;
    }
  }

  > * {
    align-content: flex-start;
    @media (min-width: ${widthBoundary}) {
      width: 80%;
    }
    max-width: 800px;
    margin: 0.5em 0;
  }

  > div > ul,
  ol,
  li {
    margin: 0.1em 0;
  }
`
