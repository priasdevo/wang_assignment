import React from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const useTaskDetailData = () => {
  const { taskId } = useParams()
  const [task, setTask] = React.useState({})
  const fetchTask = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/task/' + taskId, {
        params: {},
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setTask(data)
    } catch (err) {
      console.error('THIS IS ERRPR : ', err.message)
    }
  }

  return { fetchTask, task }
}

export default useTaskDetailData
