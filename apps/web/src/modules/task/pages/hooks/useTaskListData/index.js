import React, { useEffect, useCallback } from 'react'
import axios from 'axios'

const useTaskList = () => {
  const [task, setTask] = React.useState({})
  const [taskNameFilter, setTaskNameFilter] = React.useState('')
  const [taskTypeFilter, setTaskTypeFilter] = React.useState('')
  const [taskStatusFilter, setTaskStatusFilter] = React.useState('')
  const [assigneeFilter, setAssigneeFilter] = React.useState('')

  const fetchTaskList = useCallback(async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/task', {
        params: {
          taskName: taskNameFilter,
          taskType: taskTypeFilter,
          taskStatus: taskStatusFilter,
          volunteer: assigneeFilter,
        },
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setTask(data)
    } catch (err) {
      console.error('THIS IS ERRPR : ', err.message)
    }
  }, [taskNameFilter, taskTypeFilter, taskStatusFilter, assigneeFilter])

  useEffect(() => {
    fetchTaskList()
  }, [
    taskNameFilter,
    taskTypeFilter,
    taskStatusFilter,
    assigneeFilter,
    fetchTaskList,
  ])

  return {
    fetchTaskList,
    task,
    taskNameFilter,
    setTaskNameFilter,
    taskTypeFilter,
    setTaskTypeFilter,
    taskStatusFilter,
    setTaskStatusFilter,
    assigneeFilter,
    setAssigneeFilter,
  }
}

export default useTaskList
