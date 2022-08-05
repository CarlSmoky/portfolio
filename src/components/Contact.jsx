import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [displayMessage, setDisplayMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
      .then((result) => {
        setDisplayMessage(true);
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="section-contact" id="contact">
      <div className="u-center-text u-margin-bottom-small">
        <h2 className="heading-secondary">
          Skill
        </h2>
      </div>
     
      <div className="contact-form">
        <form className="form" ref={form} onSubmit={sendEmail}>

          <div className="form__group">
            <input type="text" className="form__input" placeholder="Full name" name="name" id="name" required />
            <label for="name" className="form__label">Full name</label>
          </div>

          <div className="form__group">
            <input type="email" className="form__input" placeholder="Email address" name="email" id="email" required />
            <label for="email" className="form__label">Email address</label>
          </div>

          <div className="form__group">
            <textarea className="form__textarea" placeholder="Message" name="message" id="message" rows="10" required />
            <label for="message" className="form__label">Message</label>
          </div>

          <div className="form__group">
            <input className="form__input" type="submit" value="Send" />
            {displayMessage && <p className="form__message">Your message has sent.</p>}
          </div>
        </form>
      </div>
     </div>
  );
};

export default Contact;
