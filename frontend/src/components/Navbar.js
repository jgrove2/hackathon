import React, { useState, useEffect } from 'react';
import LoginModal from './LoginModal';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Navbar.css';
import authenticateLogin from '../util/authenticateLogin';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [cookies, setCookie, removeCookie] = useCookies(['jwtToken'])
    const [loggedIn, setLogIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const auth = async () => {
            let token = cookies['jwtToken']
            if (token) {
                let response = await authenticateLogin(token)
                if (response?.ok) {
                    setLogIn(true);
                } else {
                    setLogIn(false);
                }
            }
        }
        auth();
    }, [])

    useEffect(() => {
        const auth = async () => {
            let token = cookies['jwtToken']
            if (token) {
                let response = await authenticateLogin(token)
                if (response?.ok) {
                    setLogIn(true);
                } else {
                    setLogIn(false);
                }
            }
        }
        auth();
    }, [modalOpen]);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    const goToCart = async () => {
        let token = cookies['jwtToken']
        if (token) {
            let response = await authenticateLogin(token)
            if (response?.ok) {
                navigate('/cart')
            } else {
                setModalOpen(true);
            }
        }
    }

    const logOut = () => {
        removeCookie(['jwtToken']);
        setLogIn(false);
        navigate('/');
    }

    const handleSearch = async (event) => {
        event.preventDefault();
        console.log('seraching...');
    }

    return (
        <>
            <div className='Navbar'>
                <div className='left'>
                <button className="home" onClick={() => navigate('/')}>Home</button>
                <div class="search-container">
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Search.." name="search" />
                            <button type="submit">Search</button>
                    </form>
                </div>
                </div>
                <div className="right">
                {loggedIn ? <button className='login' onClick={logOut}>Logout</button> :
                    <button className='login' onClick={toggleModal}>Login</button>}

                <button className='cart' onClick={goToCart}>Cart</button>
                </div>
            </div>
            <LoginModal open={modalOpen} setOpen={setModalOpen} />
        </>
    )
}

export default Navbar;