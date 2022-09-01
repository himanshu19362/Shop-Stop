import React, { useState } from 'react'
import '../assets/css/Login.css'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    // console.log('Hi' , email , password)
    auth.signInWithEmailAndPassword(email , password)
    .then(auth => {
      navigate('/')
    })
    .catch(err => {
      alert(err.message)
    })
  }

  const createAccount = () => {
    auth.createUserWithEmailAndPassword(email , password)
    .then(auth => {
      if(auth){
        navigate('/')
      }
    })
    .catch(err => {
      alert(err.message)
    })
  }

  return (
    <div className='login'>
        <div className='login-form'>
            <form onSubmit={handleSignIn}>
                <p>Sign In</p>                
                <input type={'email'} placeholder={'Enter Email'} onChange = {(e)=> setEmail(e.target.value)}/>                
                <input type={'password'} placeholder={'Enter Password'} onChange={(e) => setPassword(e.target.value)}/>
                <br />
                <div>
                    <button type={'submit'}>Sign In</button>
                </div>                             
            </form>            
            <hr />            
            <p className='terms'>By signing-in you agree to Shop Stop Conditions of Use & Sale. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads</p>
            <br />
            <button className='new-account' onClick={createAccount}>Create a new Account</button>

        </div>
    </div>
  )
}

export default Login

//https://him-image-api.herokuapp.com