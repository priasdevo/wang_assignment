import React from 'react'
import TaskDetail from '../components/TaskDetails'
import useTaskDetailData from './hooks/useTaskDetailData/index'

const TaskDetailPage = () => {
  const { task } = useTaskDetailData()
  return (
    <>
      <TaskDetail {...task.data} />
    </>
  )
}

export default TaskDetailPage
