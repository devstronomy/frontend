import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import amber from '@mui/material/colors/amber'
import grey from '@mui/material/colors/grey'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import * as React from 'react'
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
    mode: 'dark',
    primary: { main: grey[900] },
    secondary: { main: amber[500] },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 700, // this one is customized by Devstronomy
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
})

const App = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => setAnchorElNav(event.currentTarget)
  const handleCloseNavMenu = () => setAnchorElNav(null)

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppBar position='static'>
          <Toolbar variant='dense'>
            {/* Use an expanded menu on screens with a larger width. */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
              <RouteMenuButton to=''>Planets & Satellites</RouteMenuButton>
              <RouteMenuButton to='/datasets'>Datasets</RouteMenuButton>
              <RouteMenuButton to='/celestial/'>Celestial</RouteMenuButton>
              <RouteMenuButton to='/abbrs'>Abbreviations</RouteMenuButton>
            </Box>

            {/* Use a collapsible menu on screens with a small width. */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', sm: 'none' } }}>
              <IconButton size='large' onClick={handleOpenNavMenu} color='inherit'>
                <MenuIcon />
              </IconButton>
              <Menu
                id='menu-appbar'
                anchorEl={anchorElNav}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <MenuItem>
                  <RouteMenuButton onClick={handleCloseNavMenu} to=''>
                    Planets & Satellites
                  </RouteMenuButton>
                </MenuItem>
                <MenuItem>
                  <RouteMenuButton onClick={handleCloseNavMenu} to='/datasets'>
                    Datasets
                  </RouteMenuButton>
                </MenuItem>
                <MenuItem>
                  <RouteMenuButton onClick={handleCloseNavMenu} to='/celestial/'>
                    Celestial
                  </RouteMenuButton>
                </MenuItem>
                <MenuItem>
                  <RouteMenuButton onClick={handleCloseNavMenu} to='/abbrs'>
                    Abbreviations
                  </RouteMenuButton>
                </MenuItem>
              </Menu>
            </Box>

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
      </ThemeProvider>
    </HashRouter>
  )
}

export default App
