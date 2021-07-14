import React from "react";
import headShot from "../pictures/headShot.png";

const About = () => {
  return (
    <div className="container">
      <h3 style={{ textAlign: "center", fontWeight: 700, fontSize: 30 }}>
        About Me
      </h3>

      <img src={headShot} alt="profile" width="auto" height="350px" />
      <p
        style={{
          fontSize: "20px",
          fontFamily: "monospace",
          padding: "5px 10px",
          margin: "5px 15px"
        }}
      >
        Hi! My name is Jacky Koo and I am a full stack developer. After working
        10 years in the Healthcare industry, I decided to sought out a career
        that will allow me to utilize the skills I’ve gain over the years to
        make a bigger impact in the world. <br />
        <br />
        After learning about the tech industry and specially the field of web
        development, I began a few month of self-studying and realized I have
        great passion for this field. I eventually enrolled in NuCamp and
        recently graduated as a full stack developer. <br />
        <br />
        As someone who enjoys challenges and problem solving, it allows me to
        utilize different angles to look at a problem and find different way to
        achieve the best results as a developer. My passion for helping other
        and my background in healthcare leads to my attention to detail and the
        ability to focus on creating the most user friendly experience for
        clients. <br />
        <br />
        I’m excited for the upcoming opportunities and challenges that will
        allow me to create a meaningful experience for others.
      </p>
    </div>
  );
};

export default About;
