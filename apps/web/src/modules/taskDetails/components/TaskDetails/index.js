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
  Person,
  PlaylistAddCheck,
  Schedule,
} from '@mui/icons-material'
import EditTaskModal from '../../../../common/components/EditTaskModal/index'
import DeleteTaskModal from '../DeleteTaskModal'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../common/constants/theme'

const TaskDetail = (props) => {
  const {
    epicId,
    sprintId,
    taskName,
    taskDescription,
    taskType,
    taskId,
    taskStatus,
    expectedDeadline,
    userStory,
    userStoryId,
    volunteer,
    estimatedManHour,
    remainingManHour,
    member,
    isDarkMode,
  } = props

  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  console.log(volunteer, remainingManHour)

  const [open, setOpen] = React.useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false)

  const handleDelete = () => {
    setDeleteModalOpen(true)
  }

  const handleCloseDeleteModal = () => {
    setDeleteModalOpen(false)
  }

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
    <DetailContainer
      style={{
        backgroundColor: currentPalette.backgroundAdjust,
        color: currentPalette.text,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Task Details
      </Typography>
      <DetailRow>
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
        {new Date(expectedDeadline).toLocaleDateString('en-GB')}
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
          {estimatedManHour} hr
        </DetailItem>
        <DetailItem>
          <HourglassFull /> <strong>Remaining manhour:</strong>{' '}
          {remainingManHour} hr
        </DetailItem>
      </DetailRow>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="outlined" onClick={handleDelete}>
          Delete Task
        </Button>
        <Button variant="outlined" onClick={handleOpen}>
          Edit Task
        </Button>
      </div>
      <EditTaskModal
        isOpen={open}
        onClose={handleClose}
        taskAssignee={volunteer} // Pass the volunteer as taskAssignee
        taskRemaining={remainingManHour}
        taskId={taskId}
        taskStatus={taskStatus}
        member={member}
      />
      <DeleteTaskModal
        isOpen={deleteModalOpen}
        onClose={handleCloseDeleteModal}
        taskId={taskId}
        isDarkMode={isDarkMode}
      />
    </DetailContainer>
  )
}

export default TaskDetail
