import React from "react";
import '../styles/LogoRed.css'

import logo from '../resource/images/logo.png'

const LogoRed = () => {
    return (

        <div className="logo-container">
            <img src={logo} alt="Foodie Logo" />
        </div>
    )
}

export default LogoRed