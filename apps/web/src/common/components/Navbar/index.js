import {
  Link,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'
import React from 'react'

import { NavbarContainer } from './styled'
import { lightModePalette, darkModePalette } from '../../constants/theme'

const Navbar = (props) => {
  const { isDarkMode, setIsDarkMode } = props

  const handleThemeChange = (event, newTheme) => {
    if (newTheme !== null) {
      setIsDarkMode(newTheme)
    }
  }

  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  return (
    <NavbarContainer sx={{ backgroundColor: currentPalette.backgroundAdjust }}>
      <Link
        href="/task"
        sx={{ textDecoration: 'none', color: currentPalette.text }}
      >
        <Typography>Main</Typography>
      </Link>
      <div style={{ display: 'flex', gap: '10px', marginRight: '15px' }}>
        <ToggleButtonGroup
          value={isDarkMode}
          onChange={handleThemeChange}
          exclusive={true}
          sx={{ backgroundColor: currentPalette.backgroundAdjust }}
          aria-label="Medium sizes"
        >
          <ToggleButton value={false} key="Light">
            <LightMode style={{ color: currentPalette.text }} />
          </ToggleButton>
          <ToggleButton value={true} key="Dark">
            <DarkMode style={{ color: currentPalette.text }} />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </NavbarContainer>
  )
}

export default Navbar
