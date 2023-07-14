import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Cart({cartItems}) {
    console.log("here", cartItems)
  return (
    
      <ListGroup as="ol" numbered>
    {cartItems?.map(function (eachItem, indexOfEachItem){return (<ListGroup.Item
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
      </ListGroup.Item>)})}
      
      
    </ListGroup>
  );
}

export default Cart;