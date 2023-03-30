import React, { useEffect, useCallback } from 'react'
import axios from 'axios'

const useTaskList = () => {
  const [task, setTask] = React.useState({})
  const [taskNameFilter, setTaskNameFilter] = React.useState('')
  const [taskTypeFilter, setTaskTypeFilter] = React.useState('')
  const [taskStatusFilter, setTaskStatusFilter] = React.useState('')
  const [assigneeFilter, setAssigneeFilter] = React.useState('')
  const [hasMore, setHasMore] = React.useState(false)
  const [page, setPage] = React.useState(1)
  const pageControl = React.useRef(1)

  const fetchTaskList = useCallback(async () => {
    try {
      console.log('Hasmore : ', task.maxPage)
      setHasMore(task.maxPage > page)
      if (pageControl.current <= page) {
        pageControl.current = page + 1
        const { data } = await axios.get('http://localhost:5000/task', {
          params: {
            taskName: taskNameFilter,
            taskType: taskTypeFilter,
            taskStatus: taskStatusFilter,
            volunteer: assigneeFilter,
            page: page,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (page === 1) {
          setTask((prevTask) => ({
            ...prevTask,
            data: [...data.data],
            maxPage: data.maxPage,
          }))
        } else {
          setTask((prevTask) => ({
            ...prevTask,
            data: [...(prevTask.data || []), ...data.data],
            maxPage: data.maxPage,
          }))
        }

        console.log(data.maxPage, page)
        console.log(data.maxPage > page)
        console.log(hasMore)
        setPage((prev) => prev + 1)
      }
    } catch (err) {
      console.error('THIS IS ERRPR : ', err.message)
    }
  }, [
    taskNameFilter,
    taskTypeFilter,
    taskStatusFilter,
    assigneeFilter,
    page,
    setPage,
    setHasMore,
    hasMore,
    setTask,
    pageControl,
    task,
  ])
  useEffect(() => {
    if (task.maxPage !== 1) {
      fetchTaskList()
    }
  }, [task.maxPage])

  useEffect(() => {
    console.log(
      'TEST FIlter Change : ',
      taskNameFilter,
      taskTypeFilter,
      taskStatusFilter,
      assigneeFilter,
    )
    setTask({ ...task, data: [], maxPage: 1 })
    setPage(1)
    pageControl.current = 1

    setHasMore(true)
  }, [taskNameFilter, taskTypeFilter, taskStatusFilter, assigneeFilter])

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
    hasMore,
    page,
    setPage,
  }
}

export default useTaskList
