import React, { useCallback, useEffect } from 'react'
import axios from 'axios'

const useMemberData = () => {
  const [member, setMember] = React.useState({})
  const getMember = useCallback(async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/member`, {})
      //console.log(data)
      setMember(data.data)
    } catch (err) {
      console.error('THIS IS ERRPR : ', err.message)
    }
  }, [])
  useEffect(() => {
    if (Object.keys(member).length === 0) {
      getMember()
    }
  }, [member])
  return {
    member,
  }
}

export default useMemberData
