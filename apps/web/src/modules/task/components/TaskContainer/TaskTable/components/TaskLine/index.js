import React from 'react'
import { Link, TableCell, TableRow } from '@mui/material'
import {
  lightModePalette,
  darkModePalette,
} from '../../../../../../../common/constants/theme'

const TaskLine = (props) => {
  const {
    taskName,
    taskType,
    taskStatus,
    taskId,
    volunteer,
    remainingManHour,
    isDarkMode,
  } = props
  const currentPalette = isDarkMode ? darkModePalette : lightModePalette
  return (
    <TableRow>
      <TableCell align="left" sx={{ color: currentPalette.text }}>
        <Link
          href={`/task/${taskId}`}
          passHref
          style={{
            textDecoration: 'none',
            color: currentPalette.subtext,
          }}
        >
          {taskName}
        </Link>
      </TableCell>
      <TableCell align="center" sx={{ color: currentPalette.text }}>
        {taskType}
      </TableCell>
      <TableCell align="center" sx={{ color: currentPalette.text }}>
        {taskStatus}
      </TableCell>
      <TableCell align="center" sx={{ color: currentPalette.text }}>
        {volunteer}
      </TableCell>
      <TableCell align="center" sx={{ color: currentPalette.text }}>
        {remainingManHour}
      </TableCell>
    </TableRow>
  )
}

export default TaskLine
