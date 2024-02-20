import * as Yup from "yup";

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

  export default validationSchema;