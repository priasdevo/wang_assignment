import React from 'react';
import { Typography, Chip } from '@mui/material'
import { HeaderRow } from './styled';

function TaskCardHeader() {
  return (
    <HeaderRow>
      <Typography>[Task name]</Typography>
      <div style={{
        display: 'flex',
        gap: '8px'}}>
        <Chip label="Front-End" color="primary" />
        <Chip label="TODO" />
      </div>
    </HeaderRow>
  );
}

export default TaskCardHeader;
