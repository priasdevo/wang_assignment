import React from 'react';
import TaskContainer from '../components/TaskContainer/index';
import FilterContainer from '../components/FilterContainer/index'

const TaskPage = (props) => {
  const {isDarkMode, setIsDarkMode} = props
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
      <FilterContainer display={display} setDisplay={setDisplay} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <TaskContainer showType={display} isDarkMode={isDarkMode}/>
    </div>
  );
}

export default TaskPage;
