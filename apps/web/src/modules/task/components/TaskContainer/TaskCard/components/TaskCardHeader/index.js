import React from 'react'
import { Typography, Chip } from '@mui/material'
import { HeaderRow } from './styled'

const TaskCardHeader = (props) => {
  const { taskName, taskStatus, taskType } = props
  return (
    <HeaderRow>
      <Typography>{taskName}</Typography>
      <div
        style={{
          display: 'flex',
          gap: '8px',
        }}
      >
        <Chip label={taskType} color="primary" />
        <Chip label={taskStatus} />
      </div>
    </HeaderRow>
  )
}

export default TaskCardHeader
