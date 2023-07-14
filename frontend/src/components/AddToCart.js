import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import addItemCart from '../util/addItemCart';
import {useCookies} from 'react-cookie';
import LoginModal from './LoginModal';



function AddToCart({item, setCartItems}) {
  const [show, setShow] = useState(false);
  const [count,setCount] = useState(0)
  const [cookies, setCookie, removeCookie] = useCookies(['jwtToken'])
  const [modalOpen, setModalOpen] = useState(false);

  const handleClose = () => {
    setCartItems((prev) => [...prev, {name: item.name,
        price: item.price.$numberDecimal,
        quantity: count}])
    setShow(false)};
  const handleShow = async () => {
    let token = cookies['jwtToken']
    let response = await addItemCart(item.id, token);
    console.log(response);
    // if(response.message) {
    //   setModalOpen(!modalOpen);
    // } else {
      
    // }
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
        Add to Cart!
      </Button>
      <LoginModal open={modalOpen} setOpen={setModalOpen}/>
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
      </Modal>
    </>
  );
}

export default AddToCart;