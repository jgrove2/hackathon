import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddToCart from "./AddToCart.js"

export default function Product({ item } ) {
  console.log("items", item);
  return (
    <div>
    <Card style={{ width: "18rem", height: "10rem" }}>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{`Price: $${item.price.$numberDecimal}`}</Card.Text>
        <AddToCart item={item}/>
      </Card.Body>
    </Card>
    </div>
  );
}
