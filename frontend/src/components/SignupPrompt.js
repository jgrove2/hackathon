import React, {useState, useEffect} from 'react';
import registerUser from '../util/register';

const SignupPrompt = ({setOpen}) => {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
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
    const handleSubmit = async () =>{
        let response = await registerUser({email: email, username: userName, password, password});
        console.log(response);
    }

    return (
        <>
            <form>
                <div class='inputContainer'>
                    <label for='email'><b>Email:</b></label>
                    <input type='email' name='email' value={email} onChange={handleChangeEmail} required></input>
                    <label for='username'><b>Username:</b></label>
                    <input type='text' name='username' value={userName} onChange={handleChangeUser} required></input>
                    <label for='psswd'><b>Password:</b></label>
                    <input type='password' name='psswd' value={password} onChange={handleChangePassword} required></input>
                </div>
            </form>
                <button onClick={handleSubmit}>Register</button>
        </>
    )
}

export default SignupPrompt;