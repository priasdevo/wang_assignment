import React, { useState } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const EditTaskModal = (props) => {
  const { isOpen, onClose, taskAssignee, taskRemaining, onSave } = props;
  const [assignee, setAssignee] = useState(taskAssignee);
  const [remaining, setRemaining] = useState(taskRemaining);

  const handleSave = () => {
    onSave(assignee, remaining);
    onClose();
  };

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
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <h2 id="edit-task-modal-title">Edit Task</h2>
        <TextField
          label="Assignee"
          value={assignee}
          onChange={(e) => setAssignee(e.target.value)}
          fullWidth
          margin="dense"
        />
        <TextField
          label="Remaining Man Hours"
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
  );
};

export default EditTaskModal;
