import React from 'react'
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextField,
  ToggleButtonGroup,
  ToggleButton,
} from '@mui/material'
import {
  ViewListOutlined,
  FormatListBulletedOutlined,
} from '@mui/icons-material'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../common/constants/theme'

const FilterContainer = (props) => {
  const {
    display,
    setDisplay,
    isDarkMode,
    taskNameFilter,
    setTaskNameFilter,
    taskTypeFilter,
    setTaskTypeFilter,
    taskStatusFilter,
    setTaskStatusFilter,
    assigneeFilter,
    setAssigneeFilter,
  } = props
  const handleDisplayChange = (event, newDisplay) => {
    if (newDisplay !== null) {
      setDisplay(newDisplay)
    }
  }
  const currentPalette = isDarkMode ? darkModePalette : lightModePalette

  return (
    <div
      className="TaskContainer"
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        gap: '15px',
        padding: '15px',
      }}
    >
      <TextField
        label="Task name"
        sx={{
          backgroundColor: currentPalette.backgroundAdjust,
          color: currentPalette.text,
        }}
        inputProps={{ style: { color: currentPalette.text } }}
        InputLabelProps={{
          style: { color: currentPalette.text },
        }}
        value={taskNameFilter}
        onChange={(e) => setTaskNameFilter(e.target.value)}
      />
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          backgroundColor: currentPalette.backgroundAdjust,
        }}
      >
        <InputLabel sx={{ color: currentPalette.text }}>Task Type</InputLabel>
        <Select
          label="TaskType"
          value={taskTypeFilter}
          onChange={(e) => setTaskTypeFilter(e.target.value)}
          sx={{ color: currentPalette.text }}
        >
          <MenuItem value={''}>All</MenuItem>
          <MenuItem value={'P'}>Front-End</MenuItem>
          <MenuItem value={'Ice'}>Back-End</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          backgroundColor: currentPalette.backgroundAdjust,
        }}
      >
        <InputLabel sx={{ color: currentPalette.text }}>Task Status</InputLabel>
        <Select
          label="TaskStatus"
          value={taskStatusFilter}
          onChange={(e) => setTaskStatusFilter(e.target.value)}
          sx={{ color: currentPalette.text, width: '130px' }}
        >
          <MenuItem value={''}>All</MenuItem>
          <MenuItem value={'TODO'}>TODO</MenuItem>
          <MenuItem value={'Develope'}>Develope</MenuItem>
          <MenuItem value={'Review'}>Review</MenuItem>
          <MenuItem value={'Done'}>Done</MenuItem>
        </Select>
      </FormControl>
      <FormControl
        sx={{
          m: 1,
          minWidth: 120,
          backgroundColor: currentPalette.backgroundAdjust,
        }}
      >
        <InputLabel sx={{ color: currentPalette.text }}>Assignee</InputLabel>
        <Select
          label="Assignee"
          value={assigneeFilter}
          onChange={(e) => setAssigneeFilter(e.target.value)}
          sx={{ color: currentPalette.text }}
        >
          <MenuItem value={''}>All</MenuItem>
          <MenuItem value={'P'}>P</MenuItem>
          <MenuItem value={'Ice'}>Ice</MenuItem>
        </Select>
      </FormControl>
      <ToggleButtonGroup
        value={display}
        onChange={handleDisplayChange}
        exclusive={true}
        sx={{ backgroundColor: currentPalette.backgroundAdjust }}
        aria-label="Medium sizes"
      >
        <ToggleButton value="Card" key="Card">
          <ViewListOutlined style={{ color: currentPalette.text }} />
        </ToggleButton>
        <ToggleButton value="Table" key="Table">
          <FormatListBulletedOutlined style={{ color: currentPalette.text }} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default FilterContainer
