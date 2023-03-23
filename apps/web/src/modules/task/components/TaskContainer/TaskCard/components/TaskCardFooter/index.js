import React from 'react';
import { Typography, Button } from '@mui/material'
import { FooterRow } from './styled';

const TaskCardFooter = (props) => {
  const {taskRemaining} = props
  return (
    <FooterRow>
      <Typography>Remaining Man Hours: {taskRemaining} hr</Typography>
      <Button variant="text">Edit Task</Button>
    </FooterRow>
  );
}

export default TaskCardFooter;
