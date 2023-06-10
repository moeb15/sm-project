import { React, useState } from "react";
import "./css/createaccount.css";
import { Link } from "react-router-dom";
import axios from "axios";

const CreateAccountForm = () => {
    const [ getEmail, setEmail ] = useState('')
    const [ getUser, setUser ] = useState('')
    const [ getPassword, setPassword ] = useState('')

    const submitAccount = async() =>{
        const userData = {
            username:getUser,
            email:getEmail,
            password:getPassword
        };
        try{
            await axios.post("http://127.0.0.1:5000/users/create_account", userData);
            alert("Account Created!");
        }catch(err){
            console.log(err.message)
            alert('Account Not Created!')
        }
    }
    return (
        <div>
            <form className="cover">
                <input type="text" placeholder="Username"
                value={getUser}
                onChange={(e) => setUser(e.target.value)}/>
                <input type="email" placeholder="Email"
                value={getEmail}
                onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" placeholder="Password"
                value={getPassword}
                onChange={(e) => setPassword(e.target.value)}/>

                <div className="create-btn" onClick={submitAccount}>
                    Create Account
                </div>
                <div className="login-account">
                    <Link to="/" className="login">
                        Login
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default CreateAccountForm;