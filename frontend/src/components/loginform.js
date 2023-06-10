import { React, useContext, useState } from "react";
import "./css/loginform.css";
import { Link } from "react-router-dom";
import AuthContextProvider from "./authcontext";

const LoginForm = () => {
    const [ getEmail, setEmail ] = useState('');
    const [ getPassword, setPassword] = useState('');
    const { login } = useContext(AuthContextProvider)

    const submitForm = async () =>{
        const payload = {
            email: getEmail,
            password: getPassword
        };

        try{
            await login(payload)
        } catch(err){
            console.log(err.message);
            alert('Invalid Credentials');
        }
    };

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
    );
}

export default LoginForm;