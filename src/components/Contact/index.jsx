import React from "react";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Formik, Field, ErrorMessage } from "formik";
import validationSchema from "./validationSchema";

const serviceID = import.meta.env.VITE_SERVICE_ID;
const templateID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;

import {
  Container,
  Wrapper,
  Title,
  Desc,
  ContactForm,
  ContactTitle,
  ContactInput,
  ContactInputMessage,
  ErrMsg,
  ContactButton,
} from "./ContactStyle";
import Loader from "./Loader";

const Contact = () => {
  //hooks
  const form = useRef();

  const handleSubmit = () => {
    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        toast.success("Email sent successfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        toast.error("An error occured", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        form.current.reset();
      }
    );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>
          Feel free to reach out to me for any questions or business inquires!
        </Desc>
        <Formik
          initialValues={{
            name: "",
            subject: "",
            email: "",
            message: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid, dirty, errors, touched, values }) => (
            <ContactForm ref={form}>
              <ContactTitle>Email Me 🚀</ContactTitle>

              <Field
                as={ContactInput}
                value={values.email}
                placeholder="Your Email"
                id="email"
                name="email"
                valid={touched.email && !errors.email}
                error={touched.email && errors.email}
              />
              <ErrorMessage
                name="email"
                component={ErrMsg}
                className="error-message"
              />

              <Field
                as={ContactInput}
                value={values.name}
                placeholder="Your Name"
                id="name"
                name="name"
                valid={touched.name && !errors.name}
                error={touched.name && errors.name}
              />
              <ErrorMessage
                name="name"
                component={ErrMsg}
                className="error-message"
              />

              <Field
                as={ContactInput}
                value={values.subject}
                placeholder="Subject"
                id="subject"
                name="subject"
                valid={touched.subject && !errors.subject}
                error={touched.subject && errors.subject}
              />
              <ErrorMessage
                name="subject"
                component={ErrMsg}
                className="error-message"
              />

              <Field
                as={ContactInputMessage}
                placeholder="Message"
                rows="4"
                name="message"
                id="message"
                valid={touched.message && !errors.message}
                error={touched.message && errors.message}
              />
              <ErrorMessage
                name="message"
                component={ErrMsg}
                className="error-message"
              />

              <ContactButton
                disabled={!(isValid && dirty) || isSubmitting}
                type="submit"
              >
                {isSubmitting ? <Loader /> : "Send"}
              </ContactButton>
            </ContactForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default Contact;
