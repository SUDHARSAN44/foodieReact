import React from "react";
import './../styles/LoginButton.css'

const LoginButton = (props) =>{
    return(
        <div className="form-field">
            <button className="login-button" type={props.type}>{props.value}</button>
        </div>
    )
}

export default LoginButton