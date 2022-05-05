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
import emailjs from 'emailjs-com';

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
  const { mutateAsync, isLoading } = useMutation((data) => axios.post(API_URL, JSON.stringify(data)));
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
    if (formik.errors.email !== '') {
      setActiveError(true);
    }
    if (formik.errors.email === undefined) {
      setActiveError(false);
    }
  }, [formik.errors.email, isActiveError]);

  return (
    <>
      <section className="modal-body">
        <Logo />
        <img className="modal-close-icon"
          onClick={() => setIsOpen(false)}
          src={require('./icons/Group110.png')}
          alt=""
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
            />
            <h3 className='error-notify'>{formik.errors.email}</h3>
            <SubmitButton isActiveError={isActiveError}
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