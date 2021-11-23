import emailjs from 'emailjs-com';
import { useState } from "react";
import { useTranslation } from 'react-i18next';

import handshakeImage from "../../assets/shake.svg";

import ReCaptchaV2 from 'react-google-recaptcha'

import "./contact.scss";

const defaultForm = {
  email: '',
  message: '',
  token: '',
}

export default function Contact() {
  const { t } = useTranslation();


  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState(defaultForm)

  const { email, message, token } = form;


  const validateEmail = (email) => {
    // eslint-disable-next-line
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

      const { REACT_APP_API_KEY_SERVICE_ID, REACT_APP_API_KEY_USER_ID, REACT_APP_API_KEY_TEMPLATE_ID } = process.env;

      emailjs.send(REACT_APP_API_KEY_SERVICE_ID, REACT_APP_API_KEY_TEMPLATE_ID, templateParams, REACT_APP_API_KEY_USER_ID)
        .then((result) => {
          setIsSubmitted(true);
        },
          (error) => {
            alert("An error occurred, Please try again", error.text);
          });
    }
  };

  /**
  * Updates the form values for each input
  *
  * @param {object} event - Input event object
  */
  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  /**
  * Adds the token to the form object
  *
  * @param {string} token - response from ReCaptcha
  */
  const handleToken = (token) => {
    setForm((currentForm) => {
      return { ...currentForm, token }
    })
  }

  /**
  * Removes the token from the from object
  */
  const handleExpire = () => {
    setForm((currentForm) => {
      return { ...currentForm, token: null }
    })
  }

  // const isCaptchaLegit = async () => {
  //   const { REACT_APP_SITE_KEY, REACT_APP_SECRET_KEY } = process.env;

  //   var body = {
  //     secret: REACT_APP_SECRET_KEY,
  //     response: token
  //   };

  //   const rawResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(body)
  //   });
  //   const content = await rawResponse.json();
  //   console.log('content:', content)

  //   return content
  // }

  const createResponseMessage = () => {
    if (isValidEmail && !!message) {
      return <span className="valid-input">{t("contact.validInput.thanks")}.<br /> {t("contact.validInput.replyAsap")}</span>
    }
    if (!isValidEmail) {
      return <span className="invalid-input">{t("contact.invalidEmail")}</span>
    }
    if (!message) {
      return <span className="invalid-input">{t("contact.invalidMessage")}</span>
    }
    return '';
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src={handshakeImage} alt="" />
      </div>
      <div className="right">
        <h2>{t("contact.contactMe")}</h2>
        <h5>{t("contact.description")}</h5>
        <form onSubmit={handleSubmit}>
          <input id="from_email" type="text" name="email" placeholder={t("contact.email")} value={email} onChange={handleChange} />
          <textarea id="message" name="message" placeholder={t("contact.message")} value={message} onChange={handleChange}></textarea>
          <button type="submit">{t("contact.send")}</button>
          {isSubmitted && createResponseMessage()}
          {/* <ReCaptchaV2
            sitekey={process.env.REACT_APP_SITE_KEY}
            onChange={handleToken}
            onExpire={handleExpire}
          /> */}
        </form>
      </div>
    </div>
  );
}