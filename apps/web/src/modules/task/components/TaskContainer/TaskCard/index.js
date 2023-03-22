import React from 'react';
import TaskCardHeader from './TaskCardHeader/index'
import TaskCardBody from './TaskCardBody/index'
import TaskCardFooter from './TaskCardFooter/index'

import { CardContainer } from './styled';
import { Divider } from '@mui/material';

function TaskCard() {
  return (
    <CardContainer>
      <TaskCardHeader/>
      <Divider variant="fullWidth" style={{width:'100%'}}/>
      <TaskCardBody />
      <Divider variant="fullWidth" style={{width:'100%'}}/>
      <TaskCardFooter />
    </CardContainer>
  );
}

export default TaskCard;
