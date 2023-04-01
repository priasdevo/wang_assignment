import { useCallback } from 'react'
import axios from 'axios'

const useNewMember = () => {
  const addNewMember = useCallback(async (memberName) => {
    try {
      await axios.post(`http://localhost:5000/member`, {
        memberName: memberName,
      })
      //console.log(data)
      //setTask(data)
    } catch (err) {
      console.error('THIS IS ERRPR : ', err.message)
    }
  }, [])

  return {
    addNewMember,
  }
}

export default useNewMember
