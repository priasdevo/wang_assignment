import React from 'react'
import TaskCardHeader from './components/TaskCardHeader/index'
import TaskCardBody from './components/TaskCardBody/index'
import TaskCardFooter from './components/TaskCardFooter/index'

import { CardContainer } from './styled'
import { Divider } from '@mui/material'

const TaskCard = (props) => {
  const {
    taskName,
    taskType,
    taskStatus,
    taskDescription,
    taskAssignee,
    taskRemaining,
    taskId,
    isDarkMode,
  } = props
  console.log('Props: ', props)
  return (
    <CardContainer
      key={taskId}
      sx={{ backgroundColor: isDarkMode ? '#D4C4A4' : '' }}
    >
      <TaskCardHeader
        taskName={taskName}
        taskStatus={taskStatus}
        taskType={taskType}
      />
      <TaskCardBody
        taskDescription={taskDescription}
        taskAssignee={taskAssignee}
      />
      <Divider variant="fullWidth" style={{ width: '100%' }} />
      <TaskCardFooter taskRemaining={taskRemaining} />
    </CardContainer>
  )
}

export default TaskCard
