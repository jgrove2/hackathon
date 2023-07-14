import React, { useState, useEffect } from "react";
import ProductList from "./components/ProductList.js";
import Navbar from './components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import travelersumbrella from './components/images/travelersumbrella.jpg'
import redshirt from './components/images/redshirt.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const contentStyle = {
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Home({setCartItems}) {
  const [item, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const itemUrl = await fetch("http://localhost:8081/get/items");
      const itemJson = await itemUrl.json();
        console.log(itemJson);
      setItems(itemJson);
    };
    fetchItems();
  }, []);
  console.log(item);

  const carouselStyle= {
    padding: "150px",
    width : "600px",
    border: "1px",
    alignSelf: "center",
  }

  return (
    <div style={{paddingTop: "5rem"}}>
    <Container  style={{backgroundColor: "#D3D3D3"}}>
      <Carousel style={{display: "flex",
        alignItems: "center"}}>
      <Carousel.Item interval={2000}>
        <img
        style={carouselStyle}
          src={travelersumbrella}
          alt="First slide"
        />
        <Carousel.Caption style={{color: "black"}}>
          <h3>Travelers Umbrella</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
        style={carouselStyle}
          src={redshirt}
          alt="First slide"
        />
        <Carousel.Caption style={{color: "black"}} >
          <h3>Travelers Shirt</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
    </Container>
      <Row>
        <Col>
      <div>
        {item && (<ProductList items={item} setCartItems={setCartItems} />)}
      </div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
