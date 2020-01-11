import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import AboutPage from '../components/pages/about/AboutPage'
import SolarSystemPage from '../components/pages/solar-system/SolarSystemPage'
import DatasetsPage from '../components/pages/datasets/DatasetsPage'

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import amber from '@material-ui/core/colors/amber'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import GlobalStyles from '../components/globalStyles'
import ExternalLinkMenuButton from '../components/buttons/ExternalLinkMenuButton'
import RouteMenuButton from '../components/buttons/RouteMenuButton'
import * as S from './styles'
import githubIcon from '../assets/GitHub-Mark-Light-32px.png'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[900] },
    secondary: { main: amber[500] }
  }
})

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <GlobalStyles/>
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <RouteMenuButton to=''>Planets & Satellites</RouteMenuButton>
            <RouteMenuButton to='/datasets'>Datasets</RouteMenuButton>

            <S.FlexGrow/>

            <RouteMenuButton to='/about'>About</RouteMenuButton>
            <ExternalLinkMenuButton link='https://github.com/devstronomy/'>
              <img src={githubIcon} alt='GitHub'/>
            </ExternalLinkMenuButton>
          </Toolbar>
        </AppBar>

        <Route exact path='/' component={SolarSystemPage}/>
        <Route path='/planets' component={SolarSystemPage}/>
        <Route path='/datasets' component={DatasetsPage}/>
        <Route path='/about' component={AboutPage}/>
      </MuiThemeProvider>
    </Router>
  )
}

export default App
