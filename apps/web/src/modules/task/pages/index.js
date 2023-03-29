import React from 'react'
import TaskContainer from '../components/TaskContainer/index'
import FilterContainer from '../components/FilterContainer/index'
import useTaskList from './hooks/useTaskListData'
import ReactInfiniteScroller from 'react-infinite-scroller'
import { CircularProgress, Button, Link } from '@mui/material'
import {
  lightModePalette,
  darkModePalette,
} from '../../../common/constants/theme'
import useMemberData from 'common/hooks/uesMemberData'

const TaskPage = (props) => {
  const { isDarkMode } = props
  const { member } = useMemberData()
  const [display, setDisplay] = React.useState('Card')
  const {
    task,
    fetchTaskList,
    taskNameFilter,
    setTaskNameFilter,
    taskTypeFilter,
    setTaskTypeFilter,
    taskStatusFilter,
    setTaskStatusFilter,
    assigneeFilter,
    setAssigneeFilter,
  } = useTaskList()
  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
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
        taskNameFilter={taskNameFilter}
        setTaskNameFilter={setTaskNameFilter}
        taskTypeFilter={taskTypeFilter}
        setTaskTypeFilter={setTaskTypeFilter}
        taskStatusFilter={taskStatusFilter}
        setTaskStatusFilter={setTaskStatusFilter}
        assigneeFilter={assigneeFilter}
        setAssigneeFilter={setAssigneeFilter}
        member={member}
      />
      <div style={{ display: 'flex', gap: '10px', width: 'auto' }}>
        <Link
          href={`/task/new`}
          passHref
          style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            color: currentPalette.text,
            width: '100%',
          }}
        >
          <Button
            variant="contained"
            sx={{ width: 'auto', whiteSpace: 'nowrap' }}
          >
            New Task
          </Button>
        </Link>
        <Link
          href={`/member/new`}
          passHref
          style={{
            display: 'flex',
            justifyContent: 'center',
            textDecoration: 'none',
            color: currentPalette.text,
            width: 'auto',
          }}
        >
          <Button
            variant="contained"
            sx={{ width: 'auto', whiteSpace: 'nowrap' }}
          >
            New Member
          </Button>
        </Link>
      </div>
      <ReactInfiniteScroller
        loadMore={fetchTaskList}
        hasMore={false}
        loader={
          <div
            className="loader"
            key={0}
            style={{
              display: 'flex',
              alignItems: 'column',
              justifyContent: 'center',
            }}
          >
            <CircularProgress color="primary" />
          </div>
        }
        style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      >
        {task.data !== undefined && (
          <TaskContainer
            taskResponse={task}
            showType={display}
            isDarkMode={isDarkMode}
            member={member}
          />
        )}
      </ReactInfiniteScroller>
    </div>
  )
}

export default TaskPage
