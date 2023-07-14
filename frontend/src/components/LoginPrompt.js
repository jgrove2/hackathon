import React, {useState, useEffect} from 'react';
import loginUser from '../util/login';
import addItemCart from '../util/addItemCart';
import {useCookies} from 'react-cookie';

const LoginPrompt = ({setOpen, setError}) => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['jwtToken'])

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async (event) =>{
        event.preventDefault();
        try {
            let response = await loginUser({email: email, password, password});
            if(response.token){
                setCookie('jwtToken', response.token, { path: '/', sameSite: 'strict' });
                setOpen(false);
            } else {
                setError(response.message);
            }
        } catch(err) {
            console.log(err);
        }
    }
    return (
        <>
        <h1 style={{textAlign: "center"}}>Login</h1>
            <form className="form-container" onSubmit={handleSubmit}>
                <div className="form-input">
                    <label for='email'>Email:</label>
                    <input type='email' name='email' value={email} onChange={handleChangeEmail} required></input>
                    </div>
                    <div className="form-input">
                    <label for='psswd'>Password:</label>
                    <input type='password' name='psswd' value={password} onChange={handleChangePassword} required minLength={5}></input>
                    </div>
            <div className = "form-button">
                <button type="submit">Login</button>
            </div>
            </form>
        </>
    )
}

export default LoginPrompt;