import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import ProductList from "./components/ProductList.js";

// const contentStyle = {
//   width: "100%",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };

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

  //   const renderSlider = () => {
  //     <Carousel autoplay>
  //       <div>
  //         <h3 style={contentStyle}>1</h3>
  //       </div>
  //       <div>
  //         <h3 style={contentStyle}>2</h3>
  //       </div>
  //       <div>
  //         <h3 style={contentStyle}>3</h3>
  //       </div>
  //       <div>
  //         <h3 style={contentStyle}>4</h3>
  //       </div>
  //     </Carousel>;

  return (
    <div>
      {/* {renderSlider()} */}
      <div>
        {item && (<ProductList items={item} setCartItems={setCartItems} />)}
      </div>
    </div>
  );
}

export default Home;
