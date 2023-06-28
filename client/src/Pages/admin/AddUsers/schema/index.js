import * as Yup from "yup";

export const usersSchema = Yup.object({
  firstName: Yup.string()
    .required("Please enter a first name")
    .max(20, "must use max 20 characters!")
    .matches(/^([A-Za-z]*)$/gi, "Surname can only contain letters."),
  lastName: Yup.string()
    .required("Please enter a last name")
    .max(20, "must use max 20 characters!")
    .matches(/^([A-Za-z]*)$/gi, "Surname can only contain letters."),
  password: Yup.string()
    .required("Please enter a password")
    .min(8, "must use min 8 characters!"),
  email: Yup.string().required("Please enter a email").email("must be email!"),
  phone: Yup.string().required("Please enter a phone"),
  address: Yup.string().required("Please enter a address"),
  birthday: Yup.string().required("Please select a your birthday"),
});