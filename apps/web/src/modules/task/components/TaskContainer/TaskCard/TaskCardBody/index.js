import React from 'react';
import { Typography } from '@mui/material'
import { BodyRow } from './styled';
import { Box } from '@mui/system';

function TaskCardBody() {
  return (
    <BodyRow>
      <Typography>Implement dark theme (Task Description)</Typography>
      <Box sx={{border:1}}>
        <Typography sx={{padding: "5px"}}>   P (Assignee name)</Typography>
      </Box>
      
    </BodyRow>
  );
}

export default TaskCardBody;
