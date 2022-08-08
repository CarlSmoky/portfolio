import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const user_name = useRef();
  const user_email = useRef();
  const user_message = useRef();
  const [displayMessage, setDisplayMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
        setDisplayMessage("Your message has been sent.");
        user_name.current.value = "";
        user_email.current.value = "";
        user_message.current.value = "";

        console.log(result.text);

      }, (error) => {
        setDisplayMessage("Error occured. Your message hasn't been sent");
        console.log(error.text);
      });
  };

  return (
    <div className="section-contact" id="contact">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          Contact
        </h2>
      </div>
     
      <div className="contact-form">
        <form className="form" ref={form} onSubmit={sendEmail}>

          <div className="form__group">
            <input type="text" className="form__input placeholder" placeholder="Full name" name="user_name" id="user_name" ref={user_name} required />
            <label for="user_name" className="form__label label">Full name</label>
          </div>

          <div className="form__group">
            <input type="email" className="form__input placeholder" placeholder="Email address" name="user_email" id="user_email" ref={user_email} required />
            <label for="user_email" className="form__label label">Email address</label>
          </div>

          <div className="form__group">
            <textarea className="form__textarea placeholder" placeholder="Message" name="user_message" id="user_message" rows="10" ref={user_message}required />
            <label for="user_message" className="form__label label">Message</label>
          </div>

          <div className="form__group">
            <input className="form__input form__button" type="submit" value="Send" />
            {displayMessage && <p className="form__message paragraph">{displayMessage}</p>}
          </div>
        </form>
      </div>
     </div>
  );
};

export default Contact;
