'use client'
import styles from '@styles/PasswordReset.module.css'
import Image from 'next/image'

import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

export default function RegistrationPage() {
  // Form Inputs validations
  const RegistrationPageSchema = Yup.object({
    email: Yup.string()
      .email('Please enter a valid email-address')
      .required('This field is required'),
  })

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
          <h3 className={styles.mainHeading}>Password Reset </h3>
          <p className={styles.mainSubHeading}>
            Enter your email and we will send you a reset link
          </p>
        </div>

        <Formik
          initialValues={{
            email: '',
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

              <button
                type='submit'
                disabled={isSubmitting}
                className={`${styles.formButton}`}
              >
                {isSubmitting ? 'Sending Link...' : 'Send link'}
              </button>
            </Form>
          )}
        </Formik>
      </main>
    </section>
  )
}
