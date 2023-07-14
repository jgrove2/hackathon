import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import AddToCart from "./AddToCart.js"

export default function Product({ item } ) {
  console.log("items", item);
  return (
    <div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>{item.price.$numberDecimal}</Card.Text>
        <AddToCart item={item}/>
      </Card.Body>
    </Card>
    </div>
  );
}
