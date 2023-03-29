import React from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import { TableContainer } from './styled'
import TaskLine from './components/TaskLine'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../../common/constants/theme'

const TaskTable = (props) => {
  const { isDarkMode, task } = props
  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  return (
    <TableContainer>
      <Table
        sx={{
          backgroundColor: currentPalette.backgroundAdjust,
          borderRadius: '12px',
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell align="left" sx={{ color: currentPalette.text }}>
              Task Name
            </TableCell>
            <TableCell align="center" sx={{ color: currentPalette.text }}>
              Task Type
            </TableCell>
            <TableCell align="center" sx={{ color: currentPalette.text }}>
              Task Status
            </TableCell>
            <TableCell align="center" sx={{ color: currentPalette.text }}>
              Assignee
            </TableCell>
            <TableCell align="center" sx={{ color: currentPalette.text }}>
              Remaining Man Hours
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {task.map((item, index) => {
            return <TaskLine key={index} isDarkMode={isDarkMode} {...item} />
          })}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TaskTable
