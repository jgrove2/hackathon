import React, { useState, useRef, useEffect } from 'react';
import LoginPrompt from './LoginPrompt';
import SignupPrompt from './SignupPrompt';

const LoginModal = ({open, onRequestClose, setOpen}) => {
    const [loginOrSignup, setLoginOrSignup] = useState(true);
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialogNode = dialogRef.current;
        if( open ) {
            dialogNode.showModal()
        } else {
            dialogNode.close()
        }
    }, [open])

    useEffect(() => {
        const dialogNode = dialogRef.current
        const handleCancel = (event) => {
            event.preventDefault()
            setLoginOrSignup(true);
            setOpen(false)
        }
        dialogNode.addEventListener('cancel', handleCancel);
        return () => {
            dialogNode.removeEventListener('cancel', handleCancel)
        }
    }, [onRequestClose])

    return (
    <>
    <dialog ref={dialogRef}>
        {
            loginOrSignup ?
            <LoginPrompt /> :
            <SignupPrompt />
        }
        <button onClick={() => setLoginOrSignup(!loginOrSignup)} >
            {loginOrSignup ? 'Register' : 'Back to Login'}</button>
        <button onClick={() => {setOpen(false); setLoginOrSignup(true);}}>Close</button>
    </dialog>
    </>
    )
}

export default LoginModal;