import React from "react";
import mac from "../pictures/mac.jpeg";

function Home() {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "white" }}>
      <img src={mac} alt="mac background" style={{ width: "100%" }} />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "30%"
        }}
      >
        <h1 style={{ fontSize: "40px", fontFamily: "cursive" }}>
          Hi, My name is Jacky Koo
        </h1>
        <h3 style={{ fontSize: "30px", fontFamily: "cursive" }}>
          I'm a FullStack Developer
        </h3>
      </div>
    </div>
  );
}

export default Home;
