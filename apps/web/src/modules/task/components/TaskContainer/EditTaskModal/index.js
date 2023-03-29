import React, { useEffect, useState } from 'react'
import { Select, MenuItem, Modal, Box, TextField, Button } from '@mui/material'
import useEditTask from './hooks/useEditTask'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../../common/constants/theme'

const EditTaskModal = (props) => {
  const {
    isOpen,
    onClose,
    taskAssignee,
    taskRemaining,
    taskId,
    member,
    isDarkMode,
  } = props
  const [assignee, setAssignee] = useState(taskAssignee)
  const [remaining, setRemaining] = useState(taskRemaining)
  const { updateTask } = useEditTask()

  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  console.log('Modal : ', taskAssignee, taskRemaining)
  useEffect(() => {
    setAssignee(taskAssignee)
    setRemaining(taskRemaining)
  }, [taskAssignee, taskRemaining])

  const handleSave = () => {
    updateTask(taskId, assignee, remaining)
    window.location.reload()
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
          width: 400,
          bgcolor: currentPalette.backgroundAdjust,
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <h2 id="edit-task-modal-title" style={{ color: currentPalette.text }}>
          Edit Task
        </h2>
        <Select
          label="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          sx={{ color: currentPalette.text, width: '100%' }}
        >
          {Object.keys(member).length !== 0
            ? member.map((item) => {
                return (
                  <MenuItem key={item.memberName} value={item.memberName}>
                    {item.memberName}
                  </MenuItem>
                )
              })
            : ''}
        </Select>
        <TextField
          label="Remaining Man Hours"
          inputProps={{ style: { color: currentPalette.text } }}
          InputLabelProps={{
            style: { color: currentPalette.text },
          }}
          value={remaining}
          onChange={(e) => setRemaining(e.target.value)}
          fullWidth
          margin="dense"
          type="number"
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginTop: 2 }}>
          <Button onClick={onClose} sx={{ marginRight: 1 }}>
            Cancel
          </Button>
          <Button onClick={handleSave} variant="contained" color="primary">
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default EditTaskModal
