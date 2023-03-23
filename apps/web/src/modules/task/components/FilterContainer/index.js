import React from 'react';
import { Select, MenuItem, FormControl, InputLabel, TextField, ToggleButtonGroup, ToggleButton } from '@mui/material'
import { ViewListOutlined, FormatListBulletedOutlined, LightMode, DarkMode } from '@mui/icons-material'

function FilterContainer() {
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
    <ToggleButtonGroup aria-label="Medium sizes">
      <ToggleButton value="left" key="left">
        <ViewListOutlined />
      </ToggleButton>
      <ToggleButton value="left" key="left">
        <FormatListBulletedOutlined />
      </ToggleButton>
    </ToggleButtonGroup>

    <ToggleButtonGroup aria-label="Medium sizes">
      <ToggleButton value="left" key="left">
        <LightMode />
      </ToggleButton>
      <ToggleButton value="left" key="left">
        <DarkMode />
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}

export default FilterContainer;
