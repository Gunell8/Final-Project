import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
    email: Yup.string()
    .required("Please enter a email").email("should be email"),
    name: Yup.string()
    .required("Please enter a name"),
    message: Yup.string()
    .required("Please enter a message"),
});