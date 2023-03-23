import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'

function TaskLine() {
  return (
    <div>
        <Table sx={{backgroundColor: "white"}}>
            <TableHead>
                <TableRow>
                    <TableCell>Task Name</TableCell>
                    <TableCell>Task Type</TableCell>
                    <TableCell>Task Status</TableCell>
                    <TableCell>Assignee</TableCell>
                    <TableCell>Remaining Man Hourse</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>[Task name]</TableCell>
                    <TableCell>Front-End</TableCell>
                    <TableCell>TODO</TableCell>
                    <TableCell>P[Assignee]</TableCell>
                    <TableCell>10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>[Task name]</TableCell>
                    <TableCell>Front-End</TableCell>
                    <TableCell>TODO</TableCell>
                    <TableCell>P[Assignee]</TableCell>
                    <TableCell>10</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  );
}

export default TaskLine;
