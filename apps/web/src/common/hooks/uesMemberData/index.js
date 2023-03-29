import React, { useCallback, useEffect } from 'react'
import axios from 'axios'

const useMemberData = () => {
  const [member, setMember] = React.useState({})
  const getMember = useCallback(async () => {
    try {
      console.log('TEST')
      const { data } = await axios.get(`http://localhost:5000/member`, {})
      //console.log(data)
      console.log('API : ', data.data)
      setMember(data.data)
    } catch (err) {
      console.error('THIS IS ERRPR : ', err.message)
    }
  }, [])
  useEffect(() => {
    getMember()
  }, [member])
  return {
    member,
  }
}

export default useMemberData
