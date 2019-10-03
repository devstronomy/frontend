import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import HomeContent from './components/pages/HomeContent'
import PlanetsContent from './components/pages/PlanetsContent'
import DatasetsContent from './components/pages/DatasetsContent'

import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import grey from '@material-ui/core/colors/grey'
import amber from '@material-ui/core/colors/amber'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import LaunchIcon from '@material-ui/icons/Launch'
import GlobalStyles from './components/globalStyles'
import ExternalLinkMenuButton from './components/buttons/ExternalLinkMenuButton'
import RouteMenuButton from './components/buttons/RouteMenuButton'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[900] },
    secondary: { main: amber[500] }
  }
})

const styles = () => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  launchIcon: {
    width: 13,
    height: 13,
    color: 'white'
  }
})

const App = (props: { classes: any }) => {
  const { classes } = props

  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div>
          <div className={classes.root}>
            <GlobalStyles />
            <AppBar position='static'>
              <Toolbar variant='dense'>
                <RouteMenuButton to='/'>Home</RouteMenuButton>
                <RouteMenuButton to='/planets'>Planets & Satellites</RouteMenuButton>
                <RouteMenuButton to='/datasets'>Datasets</RouteMenuButton>

                <div className={classes.grow} />

                <ExternalLinkMenuButton link='https://github.com/devstronomy/'>
                  GitHub <LaunchIcon className={classes.launchIcon} />
                </ExternalLinkMenuButton>
              </Toolbar>
            </AppBar>
          </div>

          <Route path='/' exact component={HomeContent} />
          <Route path='/planets/' component={PlanetsContent} />
          <Route path='/datasets/' component={DatasetsContent} />
        </div>
      </MuiThemeProvider>
    </Router>
  )
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(App)
