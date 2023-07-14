import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';
import getCart from '../util/getCart';
import { useNavigate } from 'react-router-dom'
import checkoutCart from '../util/checkoutCart';

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [noCart, setNoCart] = useState(false);
  const [cartPrice, setCartPrice] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies(['jwtToken'])
  const navigate = useNavigate();

  useEffect(() => {
    const items = async () => {
      let token = cookies['jwtToken']
      let response = await getCart(token);
      if (response?.ok) {
        let parsed = await response.json();
        if (parsed.items === []) {
          setNoCart(true);
        } else {
          setNoCart(false);
          setCartItems(parsed.items);
          setCartPrice(parsed.price);
        }
      } else {
        console.log('error');
      }
    }
    items();
  }, [])

  const returnHome = async () => {
    let token = cookies['jwtToken']
    let response = await checkoutCart(token);
    if (response?.ok) {
      navigate('/');
    }
  }

  return (
    <div style={{ paddingTop: "5rem" }}>
      {
        noCart ?
          <div>
            <ListGroup as="ol" numbered>
              {cartItems?.map(function (eachItem, indexOfEachItem) {
                return (
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start"
                  >
                    <div className="ms-2 me-auto">
                      <div className="fw-bold">{eachItem.name}</div>
                      {eachItem.price.$decimalNumber}

                    </div>
                    <Badge bg="primary" pill>
                      {eachItem.quantity}
                    </Badge>
                  </ListGroup.Item>)
              })}
            </ListGroup>
            <div className='bottom'>
              <span>{`Total: $${cartPrice}`}</span>
              <button className="checkout" onClick={returnHome}>Checkout</button>
            </div> 
          </div> :
          <div className='noitems'>
          <h1>No Items In Cart</h1>
          </div>
      }
    </div>
  );
}

export default Cart;