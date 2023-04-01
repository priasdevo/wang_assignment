import React from 'react'
import { Typography, Chip } from '@mui/material'
import { HeaderRow } from './styled'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../../../../common/constants/theme'

const TaskCardHeader = (props) => {
  const { taskName, taskStatus, taskType, isDarkMode } = props
  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  const taskTypeColor = currentPalette.taskType[taskType]
  const taskStatusColor = currentPalette.taskStatus[taskStatus]

  return (
    <HeaderRow>
      <Typography>{taskName}</Typography>
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Chip
          label={taskType}
          style={{ backgroundColor: taskTypeColor, color: currentPalette.text }}
        />
        <Chip
          label={taskStatus}
          style={{
            color: currentPalette.text,
            backgroundColor: taskStatusColor,
          }}
        />
      </div>
    </HeaderRow>
  )
}

export default TaskCardHeader
