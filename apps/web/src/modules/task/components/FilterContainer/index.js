import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { ViewListOutlined, FormatListBulletedOutlined, LightMode, DarkMode } from '@mui/icons-material'

const FilterContainer = (props) => {
  const {display, setDisplay, isDarkMode, setIsDarkMode} = props
  const handleDisplayChange = (event,newDisplay) => {
    if(newDisplay !== null){
      setDisplay(newDisplay);
    }
    
  }

  const handleThemeChange = (event,newTheme) => {
    if(newTheme !== null){
      setIsDarkMode(newTheme)
    }
    
  }

  return (
    <div className="TaskContainer" style={{
        display: "flex",
        flexDirection: 'row',
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        gap: "15px",
        padding: "15px"
    }}>
    <TextField label="Task name" sx={{backgroundColor: "white"}}/>
    <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}>
        <InputLabel>Task Type</InputLabel>
        <Select
          label="TaskType"
        >
            <MenuItem value={"P"}>Front-End</MenuItem>
            <MenuItem value={"Ice"}>Back-End</MenuItem>
        </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}>
        <InputLabel>JobStatus</InputLabel>
        <Select
          label="JobStatus"
        >
            <MenuItem value={"TODO"}>TODO</MenuItem>
            <MenuItem value={"Develope"}>Develope</MenuItem>
            <MenuItem value={"Review"}>Review</MenuItem>
            <MenuItem value={"Done"}>Done</MenuItem>
        </Select>
    </FormControl>
    <FormControl sx={{ m: 1, minWidth: 120, backgroundColor: "white" }}>
        <InputLabel>Assignee</InputLabel>
        <Select
          label="Assignee"
        >
            <MenuItem value={"P"}>P</MenuItem>
            <MenuItem value={"Ice"}>Ice</MenuItem>
        </Select>
    </FormControl>
    <ToggleButtonGroup value={display} onChange={handleDisplayChange} exclusive={true} aria-label="Medium sizes">
      <ToggleButton value="Card" key="Card">
        <ViewListOutlined />
      </ToggleButton>
      <ToggleButton value="Table" key="Table">
        <FormatListBulletedOutlined />
      </ToggleButton>
    </ToggleButtonGroup>

    <ToggleButtonGroup value={isDarkMode} onChange={handleThemeChange} exclusive={true} aria-label="Medium sizes">
      <ToggleButton value={false} key="Light">
        <LightMode />
      </ToggleButton>
      <ToggleButton value={true} key="Dark">
        <DarkMode />
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}

export default FilterContainer;
