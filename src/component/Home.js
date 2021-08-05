import React from "react";
import mac from "../pictures/mac.jpeg";
import Typical from "react-typical";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home-banner">
      <div className="home-banner-text">
        <h1 style={{ fontSize: "50px", fontFamily: "cursive" }}>
          Hi, I'm Jacky Koo
        </h1>
        <p style={{ fontSize: "40px", fontFamily: "cursive" }}>
          I'm a
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " Developer",
              1500,
              " Gambler",
              1500,
              " Animation Collector",
              1500
            ]}
          />
        </p>
      </div>
    </div>
  );
}

export default Home;
