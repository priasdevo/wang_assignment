import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { TableContainer } from './styled'
import TaskLine from './components/TaskLine'
import { taskHolder } from '../placeholder'

const TaskTable = (props) => {
  const { isDarkMode } = props
  return (
    <TableContainer>
      <Table sx={{ backgroundColor: isDarkMode ? '#D4C4A4' : 'white' }}>
        <TableHead>
          <TableRow>
            <TableCell align="left">Task Name</TableCell>
            <TableCell align="center">Task Type</TableCell>
            <TableCell align="center">Task Status</TableCell>
            <TableCell align="center">Assignee</TableCell>
            <TableCell align="center">Remaining Man Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {taskHolder.map((item, index) => {
            return <TaskLine key={index} {...item} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TaskTable
