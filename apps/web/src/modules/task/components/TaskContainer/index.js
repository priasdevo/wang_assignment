import React from 'react'
import TaskCard from './TaskCard/index'
import TaskTable from './TaskTable/index'

const TaskContainer = (props) => {
  const { showType, isDarkMode, taskResponse } = props
  console.log('TEST: ', taskResponse)
  return (
    <div
      className="TaskContainer"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        gap: '15px',
        padding: '15px',
      }}
    >
      {showType === 'Card' && (
        <>
          {taskResponse.data.map((item, index) => {
            return <TaskCard key={index} isDarkMode={isDarkMode} {...item} />
          })}
        </>
      )}
      {showType === 'Table' && (
        <>
          <TaskTable isDarkMode={isDarkMode} task={taskResponse.task} />
        </>
      )}
    </div>
  )
}

export default TaskContainer
