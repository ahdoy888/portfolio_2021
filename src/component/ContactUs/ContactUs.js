import React from "react";
import emailjs from "emailjs-com";
import { Button, Form, FormGroup, Input } from "reactstrap";
import "./ContactUs.css";

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
      <form className="form" onSubmit={sendEmail}>
        <h2>CONTACT US</h2>
        <FormGroup>
          <p type="Name:">
            <Input placeholder="Write your name here.." />
          </p>
        </FormGroup>
        <FormGroup>
          <p type="Email:">
            <Input placeholder="Let us know how to contact you back.." />
          </p>
        </FormGroup>
        <FormGroup>
          <p type="Message:">
            <Input placeholder="What would you like to tell us.." />
          </p>
        </FormGroup>
        <Button>Send Message</Button>
      </form>
    </>
  );
}

export default ContactUs;
