import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.sass';
import { Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const form = useRef();
  const [validate, setValidate] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [thanks, setThanks] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_oknbaig', 'template_r9lgnro', form.current, 'SyGNesskWg3yxFHqL')
      .then((result) => {
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
    setThanks(true);
  };

  const validateEmail = ({ target: { value } }) => {
    setEmail(value);
    const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (regex.test(value)) {
      setValidate(false);
    } else {
      setValidate(true);
    }
  };

  const resetForm = (e) => {
    sendEmail(e);
    setValidate(true);
    setEmail('');
    setName('');
    setMessage('');
  };

  return (
    <section className="section__container section__container--even" id="contact">
      <h2>{`<${t('Contact me')} />`}</h2>
      <form ref={ form } onSubmit={ sendEmail }>
        <TextField
          name="user_name"
          id="user_name"
          label={t("Your name")}
          variant='outlined'
          color='warning'
          InputLabelProps={{ style: { color: 'lightgray' } }}
          InputProps={{ style: { color: 'white' } }}
          margin='normal'
          onChange={ (e) => setName(e.target.value) }
          value={ name }
        />
        <TextField
          name="user_email"
          id="user_email"
          label={t("Your e-mail")}
          onChange={ (e) => validateEmail(e) }
          color='warning'
          variant='outlined'
          InputLabelProps={{ style: { color: 'lightgray' } }}
          InputProps={{ style: { color: 'white' } }}
          margin='normal'
          placeholder={t('example@example.com')}
          value={ email }
          required
        />
        <TextField
          label={t("Your message")}
          name="message"
          id="message"
          color='warning'
          placeholder={t("Type your message here")}
          variant='outlined'
          InputLabelProps={{ style: { color: 'lightgray' } }}
          InputProps={{ style: { color: 'white' } }}
          multiline
          minRows={ 4 }
          margin='normal'
          onChange={ (e) => setMessage(e.target.value) }
          value={ message }
          required
        />
        <Button
          variant='contained'
          color='warning'
          value="Send"
          disabled={ validate }
          type="submit"
          onClick={(e) => resetForm(e) }
        >{t('Submit')}</Button>
      </form>
      { thanks && <p className='thanks-message'>Thanks for your message!</p> }
    </section>
  );
}
