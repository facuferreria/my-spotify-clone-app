import React from "react";
import "../styles/Login.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import accessUrl from "../spotify.js";


function Login() {

    return (
        <div className="login">
            <div className= "logo-container">
                <FontAwesomeIcon icon="fa-brands fa-spotify" size= "8x"/>
                <h1 className= "logo-title">Spotify Clone</h1>
            </div>
            <a href={accessUrl} className= "login-btn">LOGIN TO SPOTIFY</a>
        </div>
    );
}

export default Login;