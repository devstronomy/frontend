import AppBar from '@material-ui/core/AppBar'
import amber from '@material-ui/core/colors/amber'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import React from 'react'
import { Route, HashRouter as Router } from 'react-router-dom'

import githubIcon from '../assets/GitHub-Mark-Light-32px.png'
import ExternalLinkMenuButton from '../components/buttons/ExternalLinkMenuButton'
import RouteMenuButton from '../components/buttons/RouteMenuButton'
import GlobalStyles from '../components/globalStyles'
import AboutPage from '../components/pages/about/AboutPage'
import DatasetsPage from '../components/pages/datasets/DatasetsPage'
import SolarSystemPage from '../components/pages/solar-system/SolarSystemPage'
import ApolloPage from './pages/apollo/ApolloPage'
import * as S from './styles'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[900] },
    secondary: { main: amber[500] },
  },
})

const App = () => (
  <Router>
    <MuiThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <RouteMenuButton to=''>Planets & Satellites</RouteMenuButton>
          <RouteMenuButton to='/datasets'>Datasets</RouteMenuButton>
          <RouteMenuButton to='/apollo'>Apollo</RouteMenuButton>

          <S.FlexGrow />
          <ExternalLinkMenuButton link='/celestial/'>Celestial</ExternalLinkMenuButton>
          <RouteMenuButton to='/about'>About</RouteMenuButton>
          <ExternalLinkMenuButton link='https://github.com/devstronomy/'>
            <img src={githubIcon} alt='GitHub' />
          </ExternalLinkMenuButton>
        </Toolbar>
      </AppBar>

      <Route exact path='/' component={SolarSystemPage} />
      <Route path='/planets' component={SolarSystemPage} />
      <Route path='/datasets' component={DatasetsPage} />
      <Route path='/apollo' component={ApolloPage} />
      <Route path='/about' component={AboutPage} />
    </MuiThemeProvider>
  </Router>
)

export default App
