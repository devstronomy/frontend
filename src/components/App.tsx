import AppBar from '@mui/material/AppBar'
import amber from '@mui/material/colors/amber'
import grey from '@mui/material/colors/grey'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import githubIcon from '../assets/GitHub-Mark-Light-32px.png'
import ExternalLinkMenuButton from './buttons/ExternalLinkMenuButton'
import RouteMenuButton from './buttons/RouteMenuButton'
import GlobalStyles from './globalStyles'

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: grey[900] },
    secondary: { main: amber[500] },
  },
})

const AbbrsPage = React.lazy(() => import('./pages/abbrs'))
const AboutPage = React.lazy(() => import('./pages/about/AboutPage'))
const CelestialPage = React.lazy(() => import('./pages/celestial/CelestialPage'))
const DatasetsPage = React.lazy(() => import('./pages/datasets/DatasetsPage'))
const SolarSystemPage = React.lazy(() => import('./pages/solar-system/SolarSystemPage'))

const SolarSystemPageSuspended = () => (
  <React.Suspense fallback={<>Loading Datasets page...</>}>
    <SolarSystemPage />
  </React.Suspense>
)

const App = () => (
  <HashRouter>
    <ThemeProvider theme={theme}>
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
        <Route path='/' element={<SolarSystemPageSuspended />} />
        <Route path='planets' element={<SolarSystemPageSuspended />} />
        <Route
          path='datasets'
          element={
            <React.Suspense fallback={<>Loading Datasets page...</>}>
              <DatasetsPage />
            </React.Suspense>
          }
        />
        <Route
          path='celestial'
          element={
            <React.Suspense fallback={<>Loading Celestial page...</>}>
              <CelestialPage />
            </React.Suspense>
          }
        />
        <Route
          path='abbrs'
          element={
            <React.Suspense fallback={<>Loading Abbreviation page...</>}>
              <AbbrsPage />
            </React.Suspense>
          }
        />
        <Route
          path='about'
          element={
            <React.Suspense fallback={<>Loading About page...</>}>
              <AboutPage />
            </React.Suspense>
          }
        />
      </Routes>
    </ThemeProvider>
  </HashRouter>
)

export default App
