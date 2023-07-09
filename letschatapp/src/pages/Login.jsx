import React from 'react'
import Add from "../img/addAvatar.png"

const Login = () => {
  return (
    <div className="formContainer">
        <div className="formWrapper">
            <span className="logo">Lama Chat</span>
            <span className="title">Register</span>
            <form>
                <input type="email" placeholder="email" />
                <input type="password" placeholder="password" />
                <button>Sign in</button>
            </form>
            <p>You dont't have an account? Register</p>
        </div>
    </div>
  )
}

export default Login;