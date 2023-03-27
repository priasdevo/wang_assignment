import React from 'react'
import TaskDetail from '../components/TaskDetails'
import useTaskDetailData from './hooks/useTaskDetailData/index'

const TaskDetailPage = () => {
  const { fetchTask, task } = useTaskDetailData()
  fetchTask()
  return (
    <>
      <TaskDetail {...task.data} />
    </>
  )
}

export default TaskDetailPage
