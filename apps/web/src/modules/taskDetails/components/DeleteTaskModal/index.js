import React from 'react'
import { Typography, Modal, Box, Button } from '@mui/material'
import useDeleteTask from './hooks/useDeleteTask'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../common/constants/theme'

const DeleteTaskModal = (props) => {
  const { isOpen, onClose, taskId, isDarkMode } = props
  const { deleteTask } = useDeleteTask()

  const currentPalette = isDarkMode ? darkModePalette : lightModePalette

  const handleSave = () => {
    deleteTask(taskId)
    window.location.href = '/task'

    onClose()
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="edit-task-modal-title"
      aria-describedby="edit-task-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '40%',
          bgcolor: currentPalette.backgroundAdjust,
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <Typography id="delete-task-modal-title" variant="h5" component="h2">
          Delete Task
        </Typography>
        <Typography id="delete-task-modal-description" variant="body1" mt={2}>
          Are you sure you want to delete this task? This action cannot be
          undone.
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
          sx={{ gap: '10px' }}
        >
          <Button onClick={onClose} color="primary" variant="outlined" mr={1}>
            Cancel
          </Button>
          <Button onClick={handleSave} color="error" variant="outlined">
            Delete
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default DeleteTaskModal
