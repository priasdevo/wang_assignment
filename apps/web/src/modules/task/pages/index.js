import React from 'react'
import TaskContainer from '../components/TaskContainer/index'
import FilterContainer from '../components/FilterContainer/index'
import useTaskList from './hooks/useTaskListData'

const TaskPage = (props) => {
  const { isDarkMode } = props
  const [display, setDisplay] = React.useState('Card')
  const { task, fetchTaskList } = useTaskList()
  fetchTaskList()
  return (
    <div
      className="TaskPage"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        gap: '15px',
        padding: '15px',
        boxSizing: 'border-box',
      }}
    >
      <FilterContainer
        display={display}
        setDisplay={setDisplay}
        isDarkMode={isDarkMode}
      />
      {task.data !== undefined && (
        <TaskContainer
          taskResponse={task}
          showType={display}
          isDarkMode={isDarkMode}
        />
      )}
    </div>
  )
}

export default TaskPage
