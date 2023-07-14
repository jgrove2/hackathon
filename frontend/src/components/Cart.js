import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

function Cart({cartItems}) {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{cartItems.name}</div>
          
        </div>
        <Badge bg="primary" pill>
          14
        </Badge>
      </ListGroup.Item>
      
    </ListGroup>
  );
}

export default Cart;