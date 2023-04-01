import { useCallback } from 'react'
import axios from 'axios'

const useDeleteTask = () => {
  const deleteTask = useCallback(async (taskId) => {
    try {
      await axios.delete(`http://localhost:5000/task/${taskId}`, {})
      //console.log(data)
      //setTask(data)
    } catch (err) {
      console.error('THIS IS ERRPR : ', err.message)
    }
  }, [])

  return {
    deleteTask,
  }
}

export default useDeleteTask
