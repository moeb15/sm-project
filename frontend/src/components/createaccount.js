import React from "react";
import "./css/createaccount.css";
import { Link } from "react-router-dom";

const CreateAccountForm = () => {
    return (
        <div className="cover">
            <h1>Create An Account</h1>
            <input type="text" placeholder="Username"/>
            <input type="email" placeholder="Email"/>
            <input type="password" placeholder="Password"/>

            <div className="create-btn">Create Account</div>
            <div className="login-account">
                <Link to="/" className="login">
                    To Login Page
                </Link>
            </div>
        </div>
    )
}

export default CreateAccountForm;