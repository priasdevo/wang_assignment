import React from 'react';
import TaskContainer from '../components/TaskContainer/index';
import FilterContainer from '../components/FilterContainer/index'

const TaskPage = () => {
  const [display, setDisplay] = React.useState('Card');
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
      <FilterContainer display={display} setDisplay={setDisplay}/>
      <TaskContainer showType={display} />
    </div>
  );
}

export default TaskPage;
