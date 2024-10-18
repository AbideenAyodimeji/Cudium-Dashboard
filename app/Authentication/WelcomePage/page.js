'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import styles from '@styles/WelcomePage.module.css'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function WelcomePage() {
  // Form Inputs validations
  const RegistrationPageSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email-address')
      .required('This field is required'),
    password: Yup.string()
      .min(8, 'Must be 8 characters at least')
      .required('This field is required'),
  })

  // password visibility state
  const [isPasswordVisible, setPasswordVisible] = useState(false)

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState)
  }

  // error message icon
  const RequiredIcon = (
    <Image
      src='/Images/requiredIcon.svg'
      alt='Cudium Logo'
      width={15}
      height={15}
      className={styles.requiredIcon}
    />
  )

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
          <h3 className={styles.mainHeading}>Welcome back!</h3>
          <p className={styles.mainSubHeading}>Let's build something great</p>
        </div>

        <Formik
          initialValues={{
            email: '',
            password: '',
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
                <p className={styles.labels}>E-mail</p>
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

              <div>
                <div className={`${styles.spaceBetween} ${styles.alignCenter}`}>
                  <p className={styles.labels}>Password</p>
                  <Link href='Authentication/PasswordReset'>
                    <p className={styles.forgotPassword}>Forgot Password?</p>
                  </Link>
                </div>

                <div
                  className={`${styles.inputField} ${styles.alignCenter} ${styles.spaceBetween} ${styles.justifyCenter}`}
                >
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

                  <div onClick={togglePasswordVisibility}>
                    {isPasswordVisible ? (
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className={styles.eyeSlashIcon}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faEye}
                        className={styles.eyeIcon}
                      />
                    )}
                  </div>
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

              <button
                type='submit'
                disabled={isSubmitting}
                className={`${styles.formButton}`}
              >
                {isSubmitting ? 'Registering...' : 'Sign in'}
              </button>
            </Form>
          )}
        </Formik>

        <Link href='Authentication/Registration'>
          <div
            className={`${styles.register} ${styles.justifyCenter} ${styles.alignCenter} `}
          >
            <p className={styles.registerText}>
              Register if you dont have an account
            </p>
          </div>
        </Link>

        {/* <div
          className={`${styles.invalid} ${styles.justifyCenter} ${styles.alignCenter} ${styles.halfVwGap}`}
        >
          <Image
            src='/Images/invalidEmailIcon.svg'
            alt='Invalid Email Icon'
            width={15}
            height={15}
            className={styles.invalidEmailIcon}
          />
          <p className={styles.invalidText}>Invalid email or password!</p>
        </div> */}
      </main>
    </section>
  )
}
