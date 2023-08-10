import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.sass';

export default function Contact() {
  const form = useRef();
  const [validate, setValidate] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_oknbaig', 'template_r9lgnro', form.current, 'SyGNesskWg3yxFHqL')
      .then((result) => {
        console.log(result.text);
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const validateEmail = ({ target: { value } }) => {
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(value)) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  return (
    <section className="section__container section__container--even" id="contact">
      <h2>{'<Contact me />'}</h2>
      <form ref={ form } onSubmit={ sendEmail }>
        <label htmlFor="user_name">Name</label>
        <input
          type="text"
          name="user_name"
          id="user_name"
          className="form__input"
          placeholder="Your name"
        />
        <label htmlFor="user_email">E-mail</label>
        <input
          type="email"
          name="user_email"
          id="user_email"
          className="form__input"
          placeholder="Your e-mail"
          onChange={ (e) => validateEmail(e) }
        />
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          className="form__input"
          placeholder="Type your message here"
        />
        <input
          type="submit"
          value="Send"
          className="form__submit"
          disabled={ validate }
        />
      </form>
    </section>
  );
}
