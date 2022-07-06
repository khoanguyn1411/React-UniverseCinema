import * as yup from "yup";
export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("This field has to be your email.")
    .required("Email is required."),
  password: yup.string().required("Password is required."),
});
