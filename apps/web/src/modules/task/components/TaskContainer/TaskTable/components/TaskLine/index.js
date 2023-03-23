import React from 'react';
import { TableCell, TableRow } from '@mui/material'

const TaskLine = (props) => {
    const {taskName, taskType, taskStatus, taskAssignee, taskRemaining} = props
    return (
        <TableRow>
            <TableCell align='left'>{taskName}</TableCell>
            <TableCell align='center'>{taskType}</TableCell>
            <TableCell align='center'>{taskStatus}</TableCell>
            <TableCell align='center'>{taskAssignee}</TableCell>
            <TableCell align='center'>{taskRemaining}</TableCell>
        </TableRow>
  );
}

export default TaskLine;
