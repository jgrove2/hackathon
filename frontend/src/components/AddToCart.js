import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import addItemCart from '../util/addItemCart';
import {useCookies} from 'react-cookie';
import LoginModal from './LoginModal';



function AddToCart({item, numCartItems, setNumCartItems}) {
  const [show, setShow] = useState(false);
  const [count,setCount] = useState(0)
  const [cookies, setCookie, removeCookie] = useCookies(['jwtToken'])
  const [modalOpen, setModalOpen] = useState(false);
  const [added, setAdded] = useState(false);

  const handleShow = async () => {
    let token = cookies['jwtToken']
    let response = await addItemCart({itemId: item.id}, token);
    console.log(numCartItems+1)
    setNumCartItems(numCartItems+1);
    if(response?.ok) {
      setAdded(true);
      // setTimeout(setAdded(false), 1000);
      
    }
  };

  const increaseCount = () => setCount((prev) => prev + 1)
  const decreaseCount = () => {setCount((prev) => {
    if(prev<1){
        return 0
    } else{
        return prev - 1
    }
    })}


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {added ? 'Addded' : 'Add to Cart!'}
      </Button>
      {/* <LoginModal open={modalOpen} setOpen={setModalOpen}/>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Button variant="primary" onClick={decreaseCount} >-</Button>
        {count}
        <Button variant="primary" onClick={increaseCount}>+</Button>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default AddToCart;