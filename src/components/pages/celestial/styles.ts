import styled from 'styled-components'

export const CelestialContainer = styled.div`
  * {
    box-sizing: border-box;
  }
  overflow: hidden;

  /* TODO: Hack. I did not find a better way. There were always miscellaneous layout issues. */
  height: calc(100vh - 46px);
  max-height: calc(100vh - 46px);
`
