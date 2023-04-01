// src/components/NewTaskPage/index.js
import React from 'react'
import {
  Typography,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from '@mui/material'
import { NewTaskContainer } from './styled'
import useCreateTask from './hooks/useCreateTask/index'
import {
  lightModePalette,
  darkModePalette,
} from '../../../common/constants/theme'
import useMemberData from 'common/hooks/uesMemberData'

const NewTaskPage = (props) => {
  const { isDarkMode } = props
  const {
    taskName,
    setTaskName,
    taskDescription,
    setTaskDescription,
    taskType,
    setTaskType,
    taskStatus,
    setTaskStatus,
    expectedDeadline,
    setExpectedDeadline,
    userStory,
    setUserStory,
    volunteer,
    setVolunteer,
    estimatedManHour,
    setEstimatedManHour,
    remainingManHour,
    setRemainingManHour,
    epicId,
    setEpicId,
    sprintId,
    setSprintId,
    taskId,
    setTaskId,
    userStoryId,
    setUserStoryId,
    createTask,
    error,
  } = useCreateTask()

  const { member } = useMemberData()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Perform necessary actions to create a new task with the input data
  }
  console.log(isDarkMode)
  const currentPalette = isDarkMode ? darkModePalette : lightModePalette

  return (
    <NewTaskContainer
      style={{
        backgroundColor: currentPalette.backgroundAdjust,
        color: currentPalette.text,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Create a New Task
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <Grid item xs={12}>
          <TextField
            label="Task Name"
            inputProps={{ style: { color: currentPalette.text } }}
            InputLabelProps={{
              style: { color: currentPalette.text },
            }}
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            fullWidth
            margin="normal"
            error={!!error.taskName}
            helperText={error.taskName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Task ID"
            inputProps={{ style: { color: currentPalette.text } }}
            InputLabelProps={{
              style: { color: currentPalette.text },
            }}
            value={taskId}
            onChange={(e) => setTaskId(e.target.value)}
            fullWidth
            margin="normal"
            error={!!error.taskId}
            helperText={error.taskId}
          />
        </Grid>
        <TextField
          label="Task Description"
          inputProps={{ style: { color: currentPalette.text } }}
          InputLabelProps={{
            style: { color: currentPalette.text },
          }}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          fullWidth
          margin="normal"
          multiline
          rows={4}
          error={!!error.taskDescription}
          helperText={error.taskDescription}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel sx={{ color: currentPalette.text }}>
                Task Type
              </InputLabel>
              <Select
                value={taskType}
                sx={{ color: currentPalette.text }}
                onChange={(e) => setTaskType(e.target.value)}
                error={!!error.taskType}
              >
                <MenuItem value={'Frontend'}>Frontend</MenuItem>
                <MenuItem value={'Backend'}>Backend</MenuItem>
                <MenuItem value={'Design'}>Design</MenuItem>
                <MenuItem value={'Infra'}>Infra</MenuItem>
                <MenuItem value={'Testing'}>Testing</MenuItem>
              </Select>
              {error.taskType && (
                <Typography variant="caption" color="error">
                  {error.taskType}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel sx={{ color: currentPalette.text }}>
                Task Status
              </InputLabel>
              <Select
                value={taskStatus}
                sx={{ color: currentPalette.text }}
                onChange={(e) => setTaskStatus(e.target.value)}
                error={!!error.taskStatus}
              >
                <MenuItem value={'Todo'}>TODO</MenuItem>
                <MenuItem value={'Develop'}>Develope</MenuItem>
                <MenuItem value={'Review'}>Review</MenuItem>
                <MenuItem value={'Done'}>Done</MenuItem>
              </Select>
              {error.taskStatus && (
                <Typography variant="caption" color="error">
                  {error.taskStatus}
                </Typography>
              )}
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Expected Deadline"
              inputProps={{ style: { color: currentPalette.text } }}
              InputLabelProps={{
                style: { color: currentPalette.text },
                shrink: true,
              }}
              type="date"
              value={expectedDeadline}
              onChange={(e) => setExpectedDeadline(e.target.value)}
              fullWidth
              margin="normal"
              error={!!error.expectedDeadline}
              helperText={error.expectedDeadline}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="User Story ID"
              inputProps={{ style: { color: currentPalette.text } }}
              InputLabelProps={{
                style: { color: currentPalette.text },
              }}
              value={userStoryId}
              onChange={(e) => setUserStoryId(e.target.value)}
              fullWidth
              margin="normal"
              error={!!error.userStoryId}
              helperText={error.userStoryId}
            />
          </Grid>
        </Grid>
        <TextField
          label="User Story"
          inputProps={{ style: { color: currentPalette.text } }}
          InputLabelProps={{
            style: { color: currentPalette.text },
          }}
          value={userStory}
          onChange={(e) => setUserStory(e.target.value)}
          fullWidth
          margin="normal"
          error={!!error.userStory}
          helperText={error.userStory}
        />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth margin="normal">
              <InputLabel sx={{ color: currentPalette.text }}>
                volunteer
              </InputLabel>
              <Select
                label="Assignee"
                value={volunteer}
                onChange={(e) => setVolunteer(e.target.value)}
                sx={{
                  color: currentPalette.text,
                }}
                fullWidth
                error={!!error.volunteer}
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
              {error.volunteer && (
                <Typography variant="caption" color="error">
                  {error.volunteer}
                </Typography>
              )}
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Estimated Man Hour"
              inputProps={{ style: { color: currentPalette.text } }}
              InputLabelProps={{
                style: { color: currentPalette.text },
              }}
              value={estimatedManHour}
              onChange={(e) => setEstimatedManHour(e.target.value)}
              fullWidth
              margin="normal"
              type="number"
              error={!!error.estimatedManHour}
              helperText={error.estimatedManHour}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Remaining Man Hour"
            inputProps={{ style: { color: currentPalette.text } }}
            InputLabelProps={{
              style: { color: currentPalette.text },
            }}
            value={remainingManHour}
            onChange={(e) => setRemainingManHour(e.target.value)}
            fullWidth
            margin="normal"
            type="number"
            error={!!error.remainingManHour}
            helperText={error.remainingManHour}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="EPIC ID"
            inputProps={{ style: { color: currentPalette.text } }}
            InputLabelProps={{
              style: { color: currentPalette.text },
            }}
            value={epicId}
            onChange={(e) => setEpicId(e.target.value)}
            fullWidth
            margin="normal"
            error={!!error.epicId}
            helperText={error.epicId}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="SPRINT ID"
            inputProps={{ style: { color: currentPalette.text } }}
            InputLabelProps={{
              style: { color: currentPalette.text },
            }}
            value={sprintId}
            onChange={(e) => setSprintId(e.target.value)}
            fullWidth
            margin="normal"
            error={!!error.sprintId}
            helperText={error.sprintId}
          />
        </Grid>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ marginTop: '1rem' }}
            onClick={createTask}
          >
            Create Task
          </Button>
        </div>
      </form>
    </NewTaskContainer>
  )
}

export default NewTaskPage
