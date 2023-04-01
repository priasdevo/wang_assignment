import React, { useState } from 'react'
import { Modal, Box, TextField, Button } from '@mui/material'
import useNewMember from './hooks/useNewMember'
import { lightModePalette, darkModePalette } from '../../constants/theme'

const EditTaskModal = (props) => {
  const { isOpen, onClose, isDarkMode } = props
  const [assignee, setAssignee] = useState()
  const { addNewMember } = useNewMember()

  const currentPalette = isDarkMode ? darkModePalette : lightModePalette

  const handleSave = () => {
    addNewMember(assignee)
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
          Add New Member
        </h2>
        <TextField
          label="Member Name"
          inputProps={{ style: { color: currentPalette.text } }}
          InputLabelProps={{
            style: { color: currentPalette.text },
          }}
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          fullWidth
          margin="dense"
          type="string"
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
