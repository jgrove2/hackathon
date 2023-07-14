import React, { useState, useEffect } from 'react';
import registerUser from '../util/register';

const SignupPrompt = ({ setOpen, setError, setBack }) => {
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangeUser = (event) => {
        setUserName(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let data = { email: email, username: username, password: password }
            let response = await registerUser(data);
            if(response.ok){
                setBack(true);
                setOpen(false);
            } else {
                let error = await response.json()
                setError(error.message);
            }
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Register</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-input">
                    <label for='email'>Email:</label>
                    <input type='email' name='email' value={email} onChange={handleChangeEmail} required></input>
                </div>
                <div className="form-input">
                    <label for='username'>Username:</label>
                    <input type='text' name='username' value={username} onChange={handleChangeUser} required pattern="^[a-zA-Z0-9]{4,10}$"></input>
                </div>
                <div className="form-input">
                    <label for='psswd'>Password:</label>
                    <input type='password' name='psswd' value={password} onChange={handleChangePassword} required minLength={3}></input>
                </div>
                <div className="form-button">
                    <button type="submit">Register</button>
                </div>
            </form>
        </>
    )
}

export default SignupPrompt;