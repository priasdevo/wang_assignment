import React from 'react';
import { Typography, Button } from '@mui/material'
import { FooterRow } from './styled';

function TaskCardFooter() {
  return (
    <FooterRow>
      <Typography>Remaining Man Hours: 10 hr</Typography>
      <Button variant="text">Edit Task</Button>
    </FooterRow>
  );
}

export default TaskCardFooter;
