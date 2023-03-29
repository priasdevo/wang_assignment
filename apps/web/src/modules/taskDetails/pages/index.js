import useMemberData from 'common/hooks/uesMemberData'
import React from 'react'
import TaskDetail from '../components/TaskDetails'
import useTaskDetailData from './hooks/useTaskDetailData/index'

const TaskDetailPage = (props) => {
  const { isDarkMode } = props
  const { task } = useTaskDetailData()
  const { member } = useMemberData()
  return (
    <>
      <TaskDetail member={member} isDarkMode={isDarkMode} {...task.data} />
    </>
  )
}

export default TaskDetailPage
