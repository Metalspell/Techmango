import './Modal.css';
import { useEffect, useState, useRef } from 'react';
import Logo from '../Logo/Logo';
import * as yup from 'yup';
import { useFormik } from 'formik';
import SubmitButton from './SubmitButton/SubmitButton';
import SocialItems from '../SocialItems/SocialItems';
import emailjs from 'emailjs-com';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(`Please enter a valid email`)
    .required(`Required field`),
});

const ModalWindow = ({ setIsOpen }) => {
  const form = useRef();
  const [request, setrequest] = useState(null);
  const [isActiveError, setActiveError] = useState(false);
  const [errorTips, setErrorTips] = useState('');

  const { REACT_APP_SERVICE_KEY, REACT_APP_TEMPLATE_KEY, REACT_APP_PRIVATE_KEY } = process.env;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      `${REACT_APP_SERVICE_KEY}`,
      `${REACT_APP_TEMPLATE_KEY}`,
      form.current,
      `${REACT_APP_PRIVATE_KEY}`)
      .then((result) => {
        setrequest(true);
      }, (error) => {
        setrequest(false);
      });
  };

  const formik = useFormik({
    validationSchema,
    validateOnMount: true,
    initialValues: {
      email: '',
    },
  });

  useEffect(() => {
    if (formik.errors.email !== '') {
      setActiveError(true);
    }
    if (formik.errors.email === 'Required field') {
      setErrorTips(formik.errors.email);
    } else if (formik.errors.email !== '' && formik.errors.email !== 'Required field') {
      setErrorTips('');
    }
    if (formik.errors.email === undefined) {
      setActiveError(false);
      setErrorTips('');
    }
  }, [formik.errors.email, isActiveError]);

  function inputTyping(e) {
    if (e.target.value !== '' && formik.errors.email !== '') {
      setErrorTips(formik.errors.email);
    } else if (formik.errors.email !== 'Required field') {
      setErrorTips('');
    }
  }

  return (
    <>
      <section className="modal-body">
        <Logo />
        <img className="modal-close-icon"
          onClick={() => setIsOpen(false)}
          src={require('./icons/Group110.png')}
          alt="close-icon"
        />
        {request === null ? (
          <form ref={form} onSubmit={sendEmail} className='email-form'>
            <label htmlFor="email"><p>Tell us your email address</p>
              <p>and we will contact you as soon as possible</p></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='MAIL@MAIL.COM'
              autoComplete="off"
              autoFocus
              spellCheck="false"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={isActiveError ? 'error-active' : 'form-field'}
              onBlur={inputTyping}
            />
            <h3 className='error-notify'>{errorTips}</h3>
            <SubmitButton
              isActiveError={isActiveError}
              errorTips={errorTips}
              onClick={() => setIsOpen(true)}
            ></SubmitButton>
          </form>
        ) : null}
        {request === true ? (
          <h1 className='congratulation-header'>
            Thanks, your message has been sent!
          </h1>
        ) : null}
        {request === false ? (
          <h1 className='congratulation-header'>
            Send error. Try it again
          </h1>
        ) : null}
        <SocialItems />
      </section>
    </>
  );
}

export default ModalWindow;