import React from "react";
import styled, {css} from "styled-components";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FilteredPropsInputField from "./FilteredPropsInputField";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too Long!")
    .required("Name is required"),
  subject: Yup.string()
    .min(8, "The subject is too short")
    .max(50, "The subject is too long")
    .required("Subject is required"),
  message: Yup.string()
    .min(5, "The message is too short")
    .max(1000, "The message is too long")
    .required("Message is required"),
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
    padding-top: 40px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (width < 768px) {
    margin-top: 12px;
    font-size: 16px;
    padding: 0 20px;
  }
`;

const ContactForm = styled(Form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  border: 0.1px solid rgba(0, 99, 255, 1);
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme}) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 2px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 2px solid rgb(0, 156, 38);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 2px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 2px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(191, 49, 12);
      }
    `}
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }

  ${({ valid }) =>
    valid &&
    css`
      border: 2px solid rgb(0, 156, 38);

      &:focus,
      &:active {
        border: 2px solid rgb(0, 156, 38);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(0, 156, 38);
      }
    `}

  ${({ error }) =>
    error &&
    css`
      border: 2px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 2px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 2px solid rgb(191, 49, 12);
      }
    `}
`;

const ErrMsg = styled.span`
  display: block;
  color: red;
  font-size: 18px;
  margin-top: 3px;
  margin-left: 10px;
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background-color: #0063ff;
  border: 1.8px solid ${({ theme }) => theme.primary};
  background: -moz-;
  background: -webkit-;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.6s ease-in-out;
  /* &:hover {
    background-color: #0063ff;
    color: ${({ theme }) => theme.white};
  } */

  &:disabled {
    background-color: transparent;
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

const Contact = () => {
  //hooks
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "Contact Service",
        "template_5og5hnc",
        form.current,
        "p_1pev07R-1uqEYNO"
      )
      .then(
        (result) => {
          toast.success("Your email was sent successfully", {
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
          validationSchema={validationSchema}
        >
          {({ isSubmitting, isValid, dirty, errors, touched, values }) => (
            <ContactForm onSubmit={handleSubmit} ref={form}>
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
                Send
              </ContactButton>
            </ContactForm>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

// <Formik
//   initialValues={{
//     name: "",
//     subject: "",
//     email: "",
//     message: "",
//   }}
//   onSubmit={handleSubmit}
//   validationSchema={validationSchema}
// >
//   {({ isSubmitting, isValid, dirty, errors, touched }) => (
//     <Form>
//       <section className="register-form">
//         <div className="form-field">
//           <label className="form-control" htmlFor="name">
//             Name
//           </label>
//           <Field
//             placeholder="Your name"
//             className={errors.name && touched.name && "red-border"}
//             name="name"
//             id="name"
//             type="text"
//           />
//           <ErrorMessage
//             name="name"
//             component="span"
//             className="error-message"
//           />
//         </div>
//         <div className="form-field">
//           <label className="form-control" htmlFor="password">
//             Password
//           </label>
//           <Field
//             placeholder="Your password"
//             className={errors.password && touched.password && "red-border"}
//             name="password"
//             id="password"
//             type="password"
//           />
//           <ErrorMessage
//             name="password"
//             component="span"
//             className="error-message"
//           />
//         </div>
//         <div className="form-field">
//           <label className="form-control" htmlFor="email">
//             Email
//           </label>
//           <Field
//             placeholder="example@gmail.com"
//             className={errors.email && touched.email && "red-border"}
//             name="email"
//             id="email"
//             type="text"
//           />
//           <ErrorMessage
//             name="email"
//             component="span"
//             className="error-message"
//           />
//         </div>
//         <div className="form-field">
//           <label className="form-control" htmlFor="address">
//             Address
//           </label>
//           <Field
//             placeholder="Your address"
//             className={errors.address && touched.address && "red-border"}
//             name="address"
//             id="address"
//             type="text"
//           />
//           <ErrorMessage
//             name="address"
//             component="span"
//             className="error-message"
//           />
//         </div>
//       </section>
//       <button
//         className="submit-form-button"
//         type="submit"
//         disabled={!(isValid && dirty) || isSubmitting}
//       >
//         Create Account
//       </button>
//       {isSubmitting && <Loader />}
//     </Form>
//   )}
// </Formik>;

export default Contact;
