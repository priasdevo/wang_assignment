import React from 'react'
import TaskCardHeader from './components/TaskCardHeader/index'
import TaskCardBody from './components/TaskCardBody/index'
import TaskCardFooter from './components/TaskCardFooter/index'

import { CardContainer } from './styled'
import { Divider, Link } from '@mui/material'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../../common/constants/theme'

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
    member,
  } = props
  console.log('Props: ', props)
  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  return (
    <Link
      href={`/task/${taskId}`}
      passHref
      style={{
        display: 'flex',
        justifyContent: 'center',
        textDecoration: 'none',
        color: currentPalette.text,
        width: '100%',
      }}
    >
      <CardContainer
        key={taskId}
        sx={{ backgroundColor: currentPalette.backgroundAdjust }}
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
        <TaskCardFooter
          taskRemaining={remainingManHour}
          volunteer={volunteer}
          taskId={taskId}
          isDarkMode={isDarkMode}
          member={member}
        />
      </CardContainer>
    </Link>
  )
}

export default TaskCard
