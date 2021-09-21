import emailjs from 'emailjs-com';
import { useState } from "react";

import { apiKey } from '../../config/emailkeys';
import handshakeImage from "../../assets/shake.svg";

import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateEmail(email);
    setIsValidEmail(isValid);
    if (isValid && !!message) {
      var templateParams = {
        from_email: email,
        message: message
      };

      emailjs.send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, templateParams, apiKey.USER_ID)
        .then((result) => {
          setIsSubmitted(true);
          // alert("Message Sent, We will get back to you shortly", result.text);
        },
          (error) => {
            alert("An error occurred, Please try again", error.text);
          });
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setIsSubmitted(false);
  }

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
    setIsSubmitted(false);
  }

  const createResponseMessage = () => {
    if (isValidEmail && !!message) {
      return <span className="valid-input">Thanks, message was sent correctly.<br /> I'll reply ASAP :) </span>
    }
    if (!isValidEmail) {
      return <span className="invalid-input">Please introduce a valid email</span>
    }
    if (!message) {
      return <span className="invalid-input">Please write some message</span>
    }
    return '';
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handshakeImage} alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input id="from_email" type="text" placeholder="Email" value={email} onChange={handleEmailChange} />
          <textarea id="message" placeholder="Message" value={message} onChange={handleMessageChange}></textarea>
          <button type="submit">Send</button>
          {isSubmitted && createResponseMessage()}
        </form>
      </div>
    </div>
  );
}