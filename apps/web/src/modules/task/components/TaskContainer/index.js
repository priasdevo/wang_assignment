import React from 'react';
import TaskCard from './TaskCard/index'

function TaskContainer() {
  return (
    <div className="TaskContainer" style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        gap: "15px",
        padding: "15px"
    }}>
      <TaskCard/>
      <TaskCard/>
    </div>
  );
}

export default TaskContainer;
