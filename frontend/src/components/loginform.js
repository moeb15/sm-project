import React from "react";
import "./css/loginform.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
    return (
        <div className="cover">
            <h1>Welcome Back!</h1>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

            <div className="login-btn">
                <Link>Login</Link>
            </div>

            <div className="create-account">
                <Link to="create_account" className="create">
                    Create Account
                </Link>
            </div>
        </div>
    )
}

export default LoginForm;