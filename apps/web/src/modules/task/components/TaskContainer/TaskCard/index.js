import React from 'react'
import TaskCardHeader from './components/TaskCardHeader/index'
import TaskCardBody from './components/TaskCardBody/index'
import TaskCardFooter from './components/TaskCardFooter/index'

import { CardContainer } from './styled'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const TaskCard = (props) => {
  const {
    taskName,
    taskType,
    taskStatus,
    taskDescription,
    volunteer,
    remainingManHour,
    taskId,
    isDarkMode,
  } = props
  console.log('Props: ', props)
  return (
    <Link
      to={`/task/${taskId}`}
      passHref
      style={{
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
        color: 'inherit',
        width: '100%',
      }}
    >
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
          taskAssignee={volunteer}
        />
        <Divider variant="fullWidth" style={{ width: '100%' }} />
        <TaskCardFooter taskRemaining={remainingManHour} />
      </CardContainer>
    </Link>
  )
}

export default TaskCard
