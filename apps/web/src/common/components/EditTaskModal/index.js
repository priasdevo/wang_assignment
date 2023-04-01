import React, { useEffect, useState } from 'react'
import {
  Select,
  MenuItem,
  Modal,
  Box,
  TextField,
  Button,
  InputLabel,
  FormControl,
} from '@mui/material'
import useEditTask from './hooks/useEditTask'
import { lightModePalette, darkModePalette } from '../../constants/theme'

const EditTaskModal = (props) => {
  const {
    isOpen,
    onClose,
    taskAssignee,
    taskRemaining,
    taskId,
    member,
    isDarkMode,
    taskStatus,
  } = props
  const [assignee, setAssignee] = useState(taskAssignee)
  const [remaining, setRemaining] = useState(taskRemaining)
  const [status, setStatus] = useState(taskStatus)
  const { updateTask } = useEditTask()

  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  useEffect(() => {
    setAssignee(taskAssignee)
    setRemaining(taskRemaining)
  }, [taskAssignee, taskRemaining])

  const handleSave = () => {
    updateTask(taskId, assignee, remaining, status)
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
          gap: '20px',
        }}
      >
        <h2 id="edit-task-modal-title" style={{ color: currentPalette.text }}>
          Edit Task
        </h2>
        <FormControl
          sx={{
            width: '100%',
            backgroundColor: currentPalette.backgroundAdjust,
          }}
          margin="dense"
        >
          <InputLabel sx={{ color: currentPalette.text }}>volunteer</InputLabel>
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
        </FormControl>
        <FormControl
          sx={{
            width: '100%',
            backgroundColor: currentPalette.backgroundAdjust,
          }}
          margin="dense"
        >
          <InputLabel sx={{ color: currentPalette.text }}>
            Task Status
          </InputLabel>
          <Select
            label="TaskStatus"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            sx={{ color: currentPalette.text, width: '100%' }}
          >
            <MenuItem value={'Todo'}>TODO</MenuItem>
            <MenuItem value={'Develop'}>Develope</MenuItem>
            <MenuItem value={'Review'}>Review</MenuItem>
            <MenuItem value={'Done'}>Done</MenuItem>
          </Select>
        </FormControl>
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
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
