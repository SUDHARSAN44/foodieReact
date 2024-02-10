import React from 'react'

import TextInput from '../component/TextInput'

import LoginButton from '../component/LoginButton'

import background from '../resource/images/login-background.jpg'

import LogoRed from '../component/LogoRed'

import '../styles/LoginPage.css'

const LoginPage = () => {
    return (
        <div className="login-page">

            <div className="login-background">
                <img src={background} alt="login-background"></img>
            </div>

            <div className='login-form'>
            <LogoRed/>
            <form action="">
                <h1 className="login-heading">Sign In</h1>
                <TextInput placeholder="Username" />
                <TextInput placeholder="Password" />
                <LoginButton value="Login" type="submit" />
                <span className='forgot-password'>Forgot Password?</span>
                <a href=''>Click Here</a>
                <br/>
                <a href="/foodItems">Go to Next Page</a>
            </form>
 
            </div>
        </div>
            );
  }

            export default LoginPage