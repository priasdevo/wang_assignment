import { useState } from 'react'
import dayjs from 'dayjs'
import axios from 'axios'

const useCreateTask = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState({})
  const [success, setSuccess] = useState(false)
  const [taskName, setTaskName] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskType, setTaskType] = useState('')
  const [taskStatus, setTaskStatus] = useState('')
  const [expectedDeadline, setExpectedDeadline] = useState('')
  const [userStory, setUserStory] = useState('')
  const [volunteer, setVolunteer] = useState('')
  const [estimatedManHour, setEstimatedManHour] = useState('')
  const [remainingManHour, setRemainingManHour] = useState('')
  const [epic, setEpic] = useState('')
  const [epicId, setEpicId] = useState('')
  const [sprintId, setSprintId] = useState('')
  const [taskId, setTaskId] = useState('')
  const [userStoryId, setUserStoryId] = useState('')

  const validateFields = () => {
    let isValid = true
    const validationErrors = {}

    if (!taskName.trim()) {
      validationErrors.taskName = 'Task name is required'
      isValid = false
    }

    if (!taskDescription.trim()) {
      validationErrors.taskDescription = 'Task description is required'
      isValid = false
    }

    if (!taskType.trim()) {
      validationErrors.taskType = 'Task type is required'
      isValid = false
    }

    if (!taskStatus.trim()) {
      validationErrors.taskStatus = 'Task status is required'
      isValid = false
    }

    if (!userStory.trim()) {
      validationErrors.userStory = 'User story is required'
      isValid = false
    }

    if (!volunteer.trim()) {
      validationErrors.volunteer = 'Volunteer is required'
      isValid = false
    }

    if (
      !estimatedManHour.trim() ||
      isNaN(estimatedManHour) ||
      parseFloat(estimatedManHour) <= 0
    ) {
      validationErrors.estimatedManHour =
        'Estimated man-hour must be a positive number'
      isValid = false
    }

    if (
      !remainingManHour.trim() ||
      isNaN(remainingManHour) ||
      parseFloat(remainingManHour) <= 0
    ) {
      validationErrors.remainingManHour =
        'Remaining man-hour must be a positive number'
      isValid = false
    }

    if (!dayjs(expectedDeadline).isAfter(dayjs())) {
      isValid = false
      validationErrors.expectedDeadline =
        'Expected deadline must be after today.'
    }

    if (!epic.trim()) {
      validationErrors.epic = 'Epic is required'
      isValid = false
    }

    if (!epicId.trim()) {
      validationErrors.epicId = 'Epic ID is required'
      isValid = false
    }

    if (!sprintId.trim()) {
      validationErrors.sprintId = 'Sprint ID is required'
      isValid = false
    }

    if (!taskId.trim()) {
      validationErrors.taskId = 'Task ID is required'
      isValid = false
    }

    if (!userStoryId.trim()) {
      validationErrors.userStoryId = 'User story ID is required'
      isValid = false
    }

    setError(validationErrors)
    return isValid
  }

  const createTask = async () => {
    if (!validateFields()) {
      return
    }

    setLoading(true)
    setError(null)
    setSuccess(false)

    try {
      await axios.post('http://localhost:5000/task', {
        taskName,
        taskDescription,
        taskType,
        taskStatus,
        expectedDeadline,
        userStory,
        volunteer,
        estimatedManHour,
        remainingManHour,
        epic,
        epicId,
        sprintId,
        taskId,
        userStoryId,
      })
      setSuccess(true)
      console.log('Success')
      window.location.href = '/task'
    } catch (err) {
      console.log('ERROR : ', err)
    }

    setLoading(false)
  }

  return {
    loading,
    error,
    success,
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
    epic,
    setEpic,
    epicId,
    setEpicId,
    sprintId,
    setSprintId,
    taskId,
    setTaskId,
    userStoryId,
    setUserStoryId,
    createTask,
  }
}

export default useCreateTask
