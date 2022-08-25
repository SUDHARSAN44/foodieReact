import React from "react";
import wLogo from '../resource/images/foodieLogo.png'
import '../styles/NavBar.css'

const NavBar = ()=>{
    return(
        <nav className="nav-bar">
        <div className="logo-wrapper">
            <img src={wLogo} alt="logo for foodie app"/>
        </div>
        <div className="profile-wrapper">
            <div className="profile-name">Hello, Mukhilan</div>
            <div className="profile-image"></div>
        </div>
    </nav>
    )
}

export default NavBar