import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import TaskPage from './modules/task/pages/index'
import TaskDetail from './modules/taskDetails/pages'
import NewTaskPage from './modules/newTask/pages/index'
import * as serviceWorker from './serviceWorker'
import Navbar from 'common/components/Navbar'

export default function Apps() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Load isDarkMode state from localStorage, default to false
    return localStorage.getItem('isDarkMode') === 'true' ? true : false
  })

  React.useEffect(() => {
    const body = document.querySelector('body')
    if (isDarkMode) {
      body.classList.add('dark-mode')
    } else {
      body.classList.remove('dark-mode')
    }

    // Store isDarkMode state in localStorage
    localStorage.setItem('isDarkMode', isDarkMode)
  }, [isDarkMode])
  return (
    <div>
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<TaskPage isDarkMode={isDarkMode} />}
          ></Route>
          <Route
            path="/task"
            element={<TaskPage isDarkMode={isDarkMode} />}
          ></Route>
          <Route path="/task/:taskId" element={<TaskDetail />}></Route>
          <Route
            path="/task/new"
            element={<NewTaskPage isDarkMode={isDarkMode} />}
          ></Route>
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
