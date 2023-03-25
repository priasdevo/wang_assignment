import React from 'react';
import TaskCard from './TaskCard/index'
import TaskTable from './TaskTable/index'
import { taskHolder } from './placeholder';

const TaskContainer = (props) => {
  const {showType, isDarkMode} = props;
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
      {taskHolder.map((item,index) => {
        return(
          <TaskCard isDarkMode={isDarkMode} {...item}/>
        )
      })}
    </>)}
    {showType === "Table" && (<>
      <TaskTable isDarkMode={isDarkMode} task={taskHolder}/>
    </>)}
      
    </div>
  );
}

export default TaskContainer;
