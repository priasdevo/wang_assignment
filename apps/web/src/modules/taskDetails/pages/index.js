import React from 'react'
import { Typography, Divider, Button } from '@mui/material'
import { DetailContainer, DetailRow, DetailItem } from './styled'
import {
  Assignment,
  CalendarToday,
  Description,
  Done,
  Group,
  HourglassEmpty,
  HourglassFull,
  Label,
  List,
  Person,
  PlaylistAddCheck,
  Schedule,
} from '@mui/icons-material'
import EditTaskModal from '../../task/components/TaskContainer/EditTaskModal/index'

const TaskDetail = (props) => {
  const {
    epic,
    epicId,
    sprintId,
    taskId,
    taskName,
    taskDescription,
    taskType,
    taskStatus,
    expectedDeadline,
    userStory,
    userStoryId,
    volunteer,
    estimatedManHours,
    remainingManHours,
  } = props

  const [open, setOpen] = React.useState(false)

  const handleOpen = () => {
    console.log('EE')
    setOpen(true)
    console.log(open)
  }

  const handleClose = () => {
    console.log('SS')
    setOpen(false)
  }

  return (
    <DetailContainer>
      <Typography variant="h4" gutterBottom>
        Task Details
      </Typography>
      <DetailRow>
        <DetailItem>
          <List /> <strong>EPIC:</strong> {epic}
        </DetailItem>
        <DetailItem>
          <Label /> <strong>EPIC_ID:</strong> {epicId}
        </DetailItem>
      </DetailRow>
      <Divider />
      <DetailRow>
        <DetailItem>
          <Assignment /> <strong>SPRINT_ID:</strong> {sprintId}
        </DetailItem>
        <DetailItem>
          <PlaylistAddCheck /> <strong>Task_ID:</strong> {taskId}
        </DetailItem>
      </DetailRow>
      <Divider />
      <DetailItem>
        <Description /> <strong>Task_Name:</strong> {taskName}
      </DetailItem>
      <Divider />
      <DetailItem>
        <Done /> <strong>Task_Description:</strong> {taskDescription}
      </DetailItem>
      <Divider />
      <DetailRow>
        <DetailItem>
          <Schedule /> <strong>Task_Type:</strong> {taskType}
        </DetailItem>
        <DetailItem>
          <CalendarToday /> <strong>Task_Status:</strong> {taskStatus}
        </DetailItem>
      </DetailRow>
      <Divider />
      <DetailItem>
        <HourglassEmpty /> <strong>Expected_DeadLine:</strong>{' '}
        {expectedDeadline}
      </DetailItem>
      <Divider />
      <DetailItem>
        <Person /> <strong>User story:</strong> {userStory}
      </DetailItem>
      <Divider />
      <DetailRow>
        <DetailItem>
          <Group /> <strong>User Story ID:</strong> {userStoryId}
        </DetailItem>
        <DetailItem>
          <HourglassFull /> <strong>Volunteer:</strong> {volunteer}
        </DetailItem>
      </DetailRow>
      <Divider />
      <DetailRow>
        <DetailItem>
          <HourglassEmpty /> <strong>Estimate manhour:</strong>{' '}
          {estimatedManHours} hr
        </DetailItem>
        <DetailItem>
          <HourglassFull /> <strong>Remaining manhour:</strong>{' '}
          {remainingManHours} hr
        </DetailItem>
      </DetailRow>
      <Button variant="outlined" onClick={handleOpen}>
        Edit Task
      </Button>
      <EditTaskModal
        isOpen={open}
        onClose={handleClose}
        taskAssignee={volunteer} // Pass the volunteer as taskAssignee
        taskRemaining={remainingManHours}
      />
    </DetailContainer>
  )
}

export default TaskDetail
