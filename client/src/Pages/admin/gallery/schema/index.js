import * as Yup from "yup";

export const gallerySchemaEdit = Yup.object({
  name: Yup.string().required("Please enter a input"),
  title1: Yup.string().required("Please enter a input"),
  title2: Yup.string().required("Please enter a input"),
  title3: Yup.string().required("Please enter a input"),
  title4: Yup.string().required("Please enter a input"),
  about: Yup.string().required("Please enter a input"),
  seller: Yup.string().required("Please enter a input"),
  price: Yup.number().required("Please enter a input"),
  medium: Yup.string().required("Please enter a input"),
  dimensionscm: Yup.string().required("Please enter a input"),
  support: Yup.string().required("Please enter a input"),
  framing: Yup.string().required("Please enter a input"),
  type: Yup.string().required("Please enter a input"),
  authenticity: Yup.string().required("Please enter a input"),
  signature: Yup.string().required("Please enter a input"),
  collectors: Yup.string().required("Please enter a input"),
});