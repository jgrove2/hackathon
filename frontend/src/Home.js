import React, { useState } from "react";
import { Carousel } from "antd";
import Navbar from './components/Navbar';

const contentStyle = {
  width: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Home() {
  const renderSlider = () => {
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>;
  };
  return (
    <>
      <Navbar />
    </>
  );
}

export default Home;
