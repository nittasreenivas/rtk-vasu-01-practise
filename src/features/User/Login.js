import React from 'react'
import { useState } from 'react'
import { useLazyAuthEmployeeQuery } from '../../services/authApi'
import { useDispatch } from 'react-redux'
import { updateUserDetails } from './userSlice'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const [user,setUser] = useState({
        username:'',
        password:''
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleUsername = (e) => {
        setUser({...user,username:e.target.value})
    }
    const handlePassword = (e) => {
        setUser({...user,password:e.target.value})
    }
  var [authUser] =  useLazyAuthEmployeeQuery()
   const handleLogin = () => {
    authUser(user).then((res) => {
        dispatch(updateUserDetails(res.data[0]))
        navigate("/home")
        console.log("res::",res.data[0])
    })
   }
  return (
    <div>
      <input type="text" placeholder='enter username' name="username"
      onChange={handleUsername}/> <br/>
      <input type="text" placeholder='enter password' name="password"
      onChange={handlePassword}/> <br/>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login