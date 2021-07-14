import React from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";
import Footer from "../Footer/Footer";

function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3mkjr8q",
        "template_ldt8pao",
        e.target,
        "user_zHX9tgHVRd5mSK3BB9kYl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <>
      <form class="form" onSubmit={sendEmail}>
        <h2>CONTACT US</h2>
        <p type="Name:">
          <input placeholder="Write your name here.."></input>
        </p>
        <p type="Email:">
          <input placeholder="Let us know how to contact you back.."></input>
        </p>
        <p type="Message:">
          <input placeholder="What would you like to tell us.."></input>
        </p>
        <button>Send Message</button>
      </form>
    </>
  );
}

export default ContactUs;
