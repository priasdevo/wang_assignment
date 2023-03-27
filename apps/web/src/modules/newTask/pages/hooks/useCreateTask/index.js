import { useState } from 'react'
import axios from 'axios'

const useCreateTask = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
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

  const createTask = async () => {
    console.log('SS')
    setLoading(true)
    setError(null)
    setSuccess(false)
    console.log('TTTT')

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
    } catch (err) {
      console.log('ERROR : ', err)
      setError(err)
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
