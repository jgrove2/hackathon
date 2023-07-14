import React, {useState, useEffect} from 'react';
import loginUser from '../util/login';
import addItemCart from '../util/addItemCart';
import {useCookies} from 'react-cookie';

const LoginPrompt = ({setOpen}) => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [cookies, setCookie, removeCookie] = useCookies(['jwt'])

    const handleChangeEmail = (event) => {
        setEmail(event.target.value);
    }
    const handleChangePassword = (event) => {
        setPassword(event.target.value);
    }
    const handleSubmit = async () =>{
        let response = await loginUser({email: email, password, password});
        setCookie('jwt', response.token, {path: '/'})
        let add = await addItemCart({itemId: 2})
        console.log(add);
    }
    return (
        <>
            <form>
                <div class='inputContainer'>
                    <label for='email'><b>Email:</b></label>
                    <input type='email' name='email' value={email} onChange={handleChangeEmail} required></input>
                    <label for='psswd'><b>Password:</b></label>
                    <input type='password' name='psswd' value={password} onChange={handleChangePassword} required></input>
                </div>
            </form>
                <button onClick={handleSubmit}>Login</button>
        </>
    )
}

export default LoginPrompt;