import AppBar from '@material-ui/core/AppBar'
import amber from '@material-ui/core/colors/amber'
import grey from '@material-ui/core/colors/grey'
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import { HashRouter, Route, Routes } from 'react-router-dom'

import githubIcon from '../assets/GitHub-Mark-Light-32px.png'
import ExternalLinkMenuButton from '../components/buttons/ExternalLinkMenuButton'
import RouteMenuButton from '../components/buttons/RouteMenuButton'
import GlobalStyles from '../components/globalStyles'
import AboutPage from '../components/pages/about/AboutPage'
import DatasetsPage from '../components/pages/datasets/DatasetsPage'
import SolarSystemPage from '../components/pages/solar-system/SolarSystemPage'
import AbbrsPage from './pages/abbrs'
import CelestialPage from './pages/celestial/CelestialPage'

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: { main: grey[900] },
    secondary: { main: amber[500] },
  },
})

const App = () => (
  <HashRouter>
    <MuiThemeProvider theme={theme}>
      <GlobalStyles />
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <RouteMenuButton to=''>Planets & Satellites</RouteMenuButton>
          <RouteMenuButton to='/datasets'>Datasets</RouteMenuButton>
          <RouteMenuButton to='/celestial/'>Celestial</RouteMenuButton>
          <RouteMenuButton to='/abbrs'>Abbreviations</RouteMenuButton>

          <div className='flex-grow' />
          <RouteMenuButton to='/about'>About</RouteMenuButton>
          <ExternalLinkMenuButton link='https://github.com/devstronomy/'>
            <img src={githubIcon} alt='GitHub' />
          </ExternalLinkMenuButton>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path='/' element={<SolarSystemPage />} />
        <Route path='planets' element={<SolarSystemPage />} />
        <Route path='datasets' element={<DatasetsPage />} />
        <Route path='celestial' element={<CelestialPage />} />
        <Route path='abbrs' element={<AbbrsPage />} />
        <Route path='about' element={<AboutPage />} />
      </Routes>
    </MuiThemeProvider>
  </HashRouter>
)

export default App
