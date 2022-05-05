import './Modal.css';
import { useEffect } from 'react';
import Logo from '../Logo/Logo';
import { useState } from "react";
import axios from 'axios';
import { useMutation } from 'react-query';
import * as yup from 'yup';
import { useFormik } from 'formik';
import SubmitButton from './SubmitButton/SubmitButton';
import SocialItems from '../SocialItems/SocialItems';

const API_URL = 'https://api.qa.zgambling.com/public/password_recovery';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email(`Please enter a valid email`)
    .required(`Required field`),
});

const ModalWindow = ({ setIsOpen }) => {
  const [request, setrequest] = useState(null);
  const [isActiveError, setActiveError] = useState(false);
  const [errorTips, setErrorTips] = useState('');

  const { mutateAsync } = useMutation((data) => axios.post(API_URL, JSON.stringify(data)));
  const handleSubmit = async (values, { resetForm }) => {
    await mutateAsync(values, {
      onSuccess: () => {
        setrequest(true);
        resetForm();
      },
      onError: () => {
        setrequest(false);
        resetForm();
      },
    });
  };

  const formik = useFormik({
    validationSchema,
    validateOnMount: true,
    initialValues: {
      email: '',
    },
    onSubmit: handleSubmit,
  });

  useEffect(() => {
    console.log(formik.errors.email)
    if (formik.errors.email !== '') {
      setActiveError(true);
    }
    if (formik.errors.email === 'Required field') {
      setErrorTips(formik.errors.email);
    } else {
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
    } else {
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
          <form onSubmit={formik.handleSubmit} className='email-form'>
            <label htmlFor="email"><p>Tell us your email address</p>
              <p>and we will contact you as soon as possible</p></label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder='mail@mail.com'
              autoComplete="off"
              autoFocus
              spellcheck="false"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={isActiveError ? 'error-active' : 'form-field'}
              onBlur={inputTyping}
            />
            <h3 className='error-notify'>{errorTips}</h3>
            <SubmitButton 
              isActiveError={isActiveError}
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