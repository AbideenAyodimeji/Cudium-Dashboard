'use client'
import React, { useState } from 'react'
import styles from '@styles/RegistrationPage.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function RegistrationPage() {
  // Form Inputs validations
  const RegistrationPageSchema = Yup.object({
    firstName: Yup.string()
      .min(2, 'Must be at least two characters long')
      .required('This field is required'),
    lastName: Yup.string()
      .min(2, 'Must be at least two characters long')
      .required('This field is required'),
    email: Yup.string()
      .email('Please enter a valid email-address')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters at least')
      .required('This field is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('This field is required'),
  })

  // password visibility state
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState)
  }

  // confirmPassword visibility state
  const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false)

  // Function to toggle confirmPassword visibility
  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(prevState => !prevState)
  }

  // error message icon
  const RequiredIcon = [
    <Image
      src='/Images/requiredIcon.svg'
      alt='Cudium Logo'
      width={15}
      height={15}
      className={styles.requiredIcon}
    />,
  ]

  return (
    <section className={styles.section}>
      <Image
        src='/Images/leftTopBgImg.svg'
        alt='Background Image'
        width={100}
        height={100}
        className={styles.leftTopBgImg}
      />
      <Image
        src='/Images/rightBgImg.svg'
        alt='Background Image'
        width={100}
        height={100}
        className={styles.rightBgImg}
      />
      <Image
        src='/Images/leftBtmBgImg.svg'
        alt='Background Image'
        width={100}
        height={100}
        className={styles.leftBtmBgImg}
      />

      <header className={`${styles.header} ${styles.justifyCenter}`}>
        <div className={` ${styles.flexRow} ${styles.alignCenter} `}>
          <Image
            src='/Images/cudiumLogo.png'
            alt='Cudium Logo'
            width={50}
            height={50}
            className={styles.cudiumLogo}
          />
          <p className={styles.headerText}>Cudium</p>
        </div>
      </header>

      <main className={styles.main}>
        <div className={`${styles.flexColumn} ${styles.alignCenter}`}>
          <h3 className={styles.mainHeading}>Create your account</h3>
          <p className={styles.mainSubHeading}>Enjoy a great experience</p>
        </div>

        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={RegistrationPageSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
              // resetting form after submission
              resetForm()
            }, 400)
          }}
        >
          {({ touched, errors, isSubmitting }) => (
            <Form
              className={`${styles.forms} ${styles.flexColumn} ${styles.twoVhGap}`}
            >
              <div>
                <p className={styles.labels}>First name</p>
                <Field
                  type='text'
                  name='firstName'
                  id='firstName'
                  placeholder='Enter your first name'
                  className={`${styles.formInputs} ${
                    touched.firstName && errors.firstName
                      ? styles.inputsError
                      : ''
                  }`}
                />
                <ErrorMessage name='firstName'>
                  {msg => (
                    <div
                      className={`${styles.errorMessageContainer}  ${styles.alignCenter} ${styles.zeroOneVwGap}`}
                    >
                      {RequiredIcon}
                      <p className={styles.errorMessageText}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div>
                <p className={styles.labels}>Last name</p>
                <Field
                  type='text'
                  name='lastName'
                  id='lastName'
                  placeholder='Enter your Last name'
                  className={`${styles.formInputs} ${
                    touched.lastName && errors.lastName
                      ? styles.inputsError
                      : ''
                  }`}
                />
                <ErrorMessage name='lastName'>
                  {msg => (
                    <div
                      className={`${styles.errorMessageContainer} ${styles.alignCenter} ${styles.zeroOneVwGap}`}
                    >
                      {RequiredIcon}
                      <p className={styles.errorMessageText}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div>
                <p className={styles.labels}>Email</p>
                <Field
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Type your e-mail'
                  className={`${styles.formInputs} ${
                    touched.email && errors.email ? styles.inputsError : ''
                  }`}
                />
                <ErrorMessage name='email'>
                  {msg => (
                    <div
                      className={`${styles.errorMessageContainer} ${styles.alignCenter} ${styles.zeroOneVwGap}`}
                    >
                      {RequiredIcon}
                      <p className={styles.errorMessageText}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className={`${styles.inputField} `}>
                <p className={styles.labels}>Password</p>
                <Field
                  type={isPasswordVisible ? 'text' : 'password'}
                  name='password'
                  id='password'
                  placeholder='Type your password'
                  className={`${styles.formInputs} ${
                    touched.password && errors.password
                      ? styles.inputsError
                      : ''
                  }`}
                />

                <div
                  onClick={togglePasswordVisibility}
                  className={styles.eyeContainer}
                >
                  {isPasswordVisible ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className={styles.eyeSlashIcon}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />
                  )}
                </div>

                <ErrorMessage name='password'>
                  {msg => (
                    <div
                      className={`${styles.errorMessageContainer} ${styles.alignCenter} ${styles.zeroOneVwGap}`}
                    >
                      {RequiredIcon}
                      <p className={styles.errorMessageText}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <div className={`${styles.inputField}`}>
                <p className={styles.labels}>Confirm password</p>
                <Field
                  type={isConfirmPasswordVisible ? 'text' : 'password'}
                  name='confirmPassword'
                  id='confirmPassword'
                  placeholder='Confirm your password'
                  className={`${styles.formInputs} ${
                    touched.confirmPassword && errors.confirmPassword
                      ? styles.inputsError
                      : ''
                  }`}
                />

                <div onClick={toggleConfirmPasswordVisibility}>
                  {isConfirmPasswordVisible ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      className={styles.eyeSlashIcon}
                    />
                  ) : (
                    <FontAwesomeIcon icon={faEye} className={styles.eyeIcon} />
                  )}
                </div>

                <ErrorMessage name='confirmPassword'>
                  {msg => (
                    <div
                      className={`${styles.errorMessageContainer} ${styles.alignCenter} ${styles.zeroOneVwGap}`}
                    >
                      {RequiredIcon}
                      <p className={styles.errorMessageText}>{msg}</p>
                    </div>
                  )}
                </ErrorMessage>
              </div>

              <button
                type='submit'
                disabled={isSubmitting}
                className={`${styles.formButton}`}
              >
                {isSubmitting ? 'Registering...' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </section>
  )
}
