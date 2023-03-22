import React from 'react';
import { Typography, Chip } from '@mui/material'
import { HeaderRow } from './styled';

function TaskCardHeader() {
  return (
    <HeaderRow>
      <Typography>[Task name]</Typography>
      <Chip label="TODO" />
    </HeaderRow>
  );
}

export default TaskCardHeader;
