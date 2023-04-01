import React from 'react'
import { Typography } from '@mui/material'
import { BodyRow } from './styled'
import { Box } from '@mui/system'

const TaskCardBody = (props) => {
  const { taskDescription, taskAssignee } = props
  return (
    <BodyRow>
      <Typography>{taskDescription}</Typography>
      {taskAssignee && (
        <Box sx={{ border: 1 }}>
          <Typography sx={{ padding: '5px' }}>{taskAssignee}</Typography>
        </Box>
      )}
    </BodyRow>
  )
}

export default TaskCardBody
