import React from 'react';
import TaskCard from './TaskCard/index'
import TaskLine from './TaskLine/index'

function TaskContainer(props) {
  const {showType} = props;
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
    {showType === "Card" && (<>
      <TaskCard/>
      <TaskCard/>
    </>)}
    {showType === "Table" && (<>
      <TaskLine/>
    </>)}
      
    </div>
  );
}

export default TaskContainer;
