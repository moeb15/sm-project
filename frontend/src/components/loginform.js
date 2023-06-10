import { React, useState } from "react";
import "./css/loginform.css";
import { Link } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {
    const [ getEmail, setEmail ] = useState('')
    const [ getPassword, setPassword] = useState('')
    
    const submitForm = () =>{
        axios.post("http://127.0.0.1:5000/token", {
            email: getEmail,
            password: getPassword
        })
        .then(function (response){
            console.log(response)
            window.location = "/homepage"
        })
        .catch(function (error){
            console.log(error)
            alert("Invalid Credentials")
        })
    }

    return (
        <form>
            <div className="login-div">
                <input type="email" placeholder="Email"
                onChange={(e)=>setEmail(e.target.value)}/>
                <input type="password" placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}/>

                <div className="login-btn" onClick={submitForm}>Login</div>
                <div className="create-account">
                    <Link to="create_account" className="create">
                        Sign Up
                    </Link>
                </div>
            </div>
        </form>
    )
}

export default LoginForm;