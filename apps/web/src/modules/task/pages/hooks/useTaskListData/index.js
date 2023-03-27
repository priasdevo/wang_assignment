import React, { useEffect } from 'react'
import axios from 'axios'

const useTaskList = () => {
  const [task, setTask] = React.useState({})
  const fetchTaskList = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/task', {
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
  const test = () => {
    console.log('Test')
  }
  useEffect(() => {
    console.log('TEST')
    fetchTaskList()
  }, [])

  return { fetchTaskList, task, test }
}

export default useTaskList
