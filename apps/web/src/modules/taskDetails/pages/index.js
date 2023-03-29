import useMemberData from 'common/hooks/uesMemberData'
import React from 'react'
import TaskDetail from '../components/TaskDetails'
import useTaskDetailData from './hooks/useTaskDetailData/index'

const TaskDetailPage = () => {
  const { task } = useTaskDetailData()
  const { member } = useMemberData()
  return (
    <>
      <TaskDetail member={member} {...task.data} />
    </>
  )
}

export default TaskDetailPage
