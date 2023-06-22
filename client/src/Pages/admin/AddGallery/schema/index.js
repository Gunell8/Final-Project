import * as Yup from "yup";

export const GallerySchema = Yup.object({
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
    .min(8, "must use min 8 characters!")
    .max(16, "must use max 16 characters!"),
  email: Yup.string().required("Please enter a email").email("must be email!"),
  gender: Yup.string().required("Please select a gender"),
  phone: Yup.string().required("Please enter a phone"),
  location: Yup.string().required("Please enter a address"),
  money: Yup.string().required("Please enter a appointment"),
  hour: Yup.string().required("Please enter a working hour"),
  doctorJob: Yup.string().required("Please select a departments"),
  star: Yup.string().required("Please select a doctor's point"),
  // image: Yup.string().required("Please select a doctor's image"),
});