import React, {useState} from 'react';
import LoginModal from './LoginModal';

const Navbar = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    return (
        <>
            <div className='Navbar'>
                <button onClick={toggleModal}>Login</button>
                <LoginModal open={modalOpen} setOpen={setModalOpen}/>
            </div>
        </>
    )
}

export default Navbar;