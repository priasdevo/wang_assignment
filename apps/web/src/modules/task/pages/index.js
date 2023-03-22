import React from 'react';
import TaskContainer from '../components/TaskContainer/index';
import FilterContainer from '../components/FilterContainer/index'

function TaskPage() {
  return (
    <div className="TaskPage" style={{
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
        width: "100%",
        alignItems: "center",
        gap: "15px",
        padding: "15px"
    }}>
      <FilterContainer/>
      <TaskContainer/>
    </div>
  );
}

export default TaskPage;
