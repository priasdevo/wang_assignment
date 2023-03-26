// src/components/NewTaskPage/index.js
import React, { useState } from 'react';
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material';
import { NewTaskContainer } from './styled';

const NewTaskPage = () => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskType, setTaskType] = useState('');
  const [taskStatus, setTaskStatus] = useState('');
  const [expectedDeadline, setExpectedDeadline] = useState('');
  const [userStory, setUserStory] = useState('');
  const [volunteer, setVolunteer] = useState('');
  const [estimatedManHours, setEstimatedManHours] = useState('');
  const [remainingManHours, setRemainingManHours] = useState('');
  const [epic, setEpic] = useState('');
  const [epicId, setEpicId] = useState('');
  const [sprintId, setSprintId] = useState('');
  const [taskId, setTaskId] = useState('');
  const [userStoryId, setUserStoryId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform necessary actions to create a new task with the input data
  };

  return (
    <NewTaskContainer>
      <Typography variant="h4" gutterBottom>
        Create a New Task
      </Typography>
      <form onSubmit={handleSubmit} style={{width: "100%"}}>
          <Grid item xs={12}>
            <TextField
              label="Task Name"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Task ID"
              value={taskId}
              onChange={(e) => setTaskId(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
        <TextField
          label="Task Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Task Type</InputLabel>
              <Select
                value={taskType}
                onChange={(e) => setTaskType(e.target.value)}
              >
                <MenuItem value="feature">Feature</MenuItem>
                <MenuItem value="bug">Bug</MenuItem>
                <MenuItem value="improvement">Improvement</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel>Task Status</InputLabel>
              <Select
                value={taskStatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <MenuItem value="todo">To Do</MenuItem>
                <MenuItem value="in-progress">In Progress</MenuItem>
                <MenuItem value="done">Done</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expected Deadline"
              type="date"
              value={expectedDeadline}
              onChange={(e) => setExpectedDeadline(e.target.value)}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="User Story ID"
              value={userStoryId}
              onChange={(e) => setUserStoryId(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
        <TextField
          label="User Story"
          value={userStory}
          onChange={(e) => setUserStory(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Volunteer"
              value={volunteer}
              onChange={(e) => setVolunteer(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Estimated Man Hours"
              value={estimatedManHours}
              onChange={(e) => setEstimatedManHours(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Remaining Man Hours"
              value={remainingManHours}
              onChange={(e) => setRemainingManHours(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="EPIC"
              value={epic}
              onChange={(e) => setEpic(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
        </Grid>
          <Grid item xs={12}>
            <TextField
              label="EPIC ID"
              value={epicId}
              onChange={(e) => setEpicId(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="SPRINT ID"
              value={sprintId}
              onChange={(e) => setSprintId(e.target.value)}
              fullWidth
              margin="normal"
            />
          </Grid>
        <Button type="submit" variant="contained" sx={{marginTop: '1rem'}}>
          Create Task
        </Button>
      </form>
    </NewTaskContainer>
  );
};

export default NewTaskPage;