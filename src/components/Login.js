import React from 'react'
import '../assets/css/Login.css'

const Login = () => {
  return (
    <div className='login'>
        <div className='login-form'>
            <form>
                <p>Sign In</p>
                {/* <p>Username</p> */}
                <input type={'type'} placeholder={'Enter Username'} />
                {/* <p>Password</p> */}
                <input type={'password'} placeholder={'Enter Password'}/>
                <br />
                <div>
                    <button type={'submit'}>Sign In</button>
                </div>                
            </form>
            <br />
            <hr />
            <br />
            <p className='terms'>By signing-in you agree to Shop Stop Conditions of Use & Sale. 
            Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads</p>
            <br />
            <button className='new-account'>Create a new Account</button>

        </div>
    </div>
  )
}

export default Login