import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './modules/example/pages/index'
import TaskPage from './modules/task/pages/index'
import TaskDetail from './modules/taskDetails/pages'
import NewTaskPage from './modules/newTask/pages/index'
import * as serviceWorker from './serviceWorker'

export default function Apps() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  React.useEffect(() => {
    const body = document.querySelector('body')
    if (isDarkMode) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }
  }, [isDarkMode])
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route
            path="/test"
            element={
              <TaskPage isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            }
          ></Route>
          <Route
            path="/task/1"
            element={
              <TaskDetail
                epic="Sample Epic"
                epicId="E123"
                sprintId="S123"
                taskId="T123"
                taskName="Sample Task"
                taskDescription="This is a sample task description."
                taskType="Development"
                taskStatus="In Progress"
                expectedDeadline="2023-03-30"
                userStory="As a user, I want to view task details."
                userStoryId="US123"
                volunteer="John Doe"
                estimatedManHours={40}
                remainingManHours={20}
              />
            }
          ></Route>
          <Route path="/task/new" element={<NewTaskPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Apps />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
