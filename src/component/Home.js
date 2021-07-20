import React from "react";
import mac from "../pictures/mac.jpeg";
import Typical from "react-typical";

function Home() {
  return (
    <div style={{ position: "relative", textAlign: "center", color: "white" }}>
      <img src={mac} alt="mac background" style={{ width: "100%" }} />
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "30%"
        }}
      >
        <h1 style={{ fontSize: "50px", fontFamily: "cursive" }}>
          Hi, I'm Jacky Koo
        </h1>
        <p style={{ fontSize: "40px", fontFamily: "cursive" }}>
          I'm a
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " developer",
              1500,
              " husband",
              1500,
              " animation collector",
              1500
            ]}
          />
        </p>
      </div>
    </div>
  );
}

export default Home;
