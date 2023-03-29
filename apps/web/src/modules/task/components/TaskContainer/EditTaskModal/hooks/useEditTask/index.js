import { useCallback } from 'react'
import axios from 'axios'

const useEditTask = () => {
  const updateTask = useCallback(
    async (taskId, volunteer, remainingManHour) => {
      try {
        await axios.put(`http://localhost:5000/task/${taskId}`, {
          volunteer: volunteer,
          remainingManHour: remainingManHour,
        })
        //console.log(data)
        //setTask(data)
      } catch (err) {
        console.error('THIS IS ERRPR : ', err.message)
      }
    },
    [],
  )

  return {
    updateTask,
  }
}

export default useEditTask
