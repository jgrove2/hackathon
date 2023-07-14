import React, {useState} from 'react';
import LoginModal from './LoginModal';
import './Navbar.css';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <>
            <div className='Navbar'>
                <button className='login' onClick={toggleModal}>Login</button>
                <button className='cart'>Cart</button>
            </div>
                <LoginModal open={modalOpen} setOpen={setModalOpen}/>
        </>
    )
}

export default Navbar;