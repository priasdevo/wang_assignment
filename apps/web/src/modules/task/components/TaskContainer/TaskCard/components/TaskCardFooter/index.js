import React from 'react'
import { Typography, Button } from '@mui/material'
import { FooterRow } from './styled'
import EditTaskModal from '../../../../../../../common/components/EditTaskModal/index'

const TaskCardFooter = (props) => {
  const { taskRemaining, volunteer, taskId, isDarkMode, member, taskStatus } =
    props
  console.log(taskStatus)
  const [modalOpen, setModalOpen] = React.useState(false)
  const handleOpenModal = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
  }

  const handleSaveChanges = (newAssignee, newRemaining) => {
    // Perform any necessary action to save the changes, such as updating the state or making an API call.
    console.log('New Assignee:', newAssignee)
    console.log('New Remaining Man Hours:', newRemaining)
    // Update the state or make an API call to save changes here.
  }

  return (
    <FooterRow>
      <Typography>Remaining Man Hours: {taskRemaining} hr</Typography>
      <Button variant="text" onClick={handleOpenModal}>
        Edit Task
      </Button>
      <EditTaskModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        taskAssignee={volunteer}
        taskRemaining={taskRemaining}
        taskId={taskId}
        onSave={handleSaveChanges}
        isDarkMode={isDarkMode}
        member={member}
        taskStatus={taskStatus}
      />
    </FooterRow>
  )
}

export default TaskCardFooter
