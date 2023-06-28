import * as Yup from "yup";

export const GallerySchema = Yup.object({
  name: Yup.string().required(),
  title1: Yup.string().required(),
  title2: Yup.string().required(),
  title3: Yup.string().required(),
  title4: Yup.string().required(),
  about: Yup.string().required(),
  seller: Yup.string().required(),
  medium: Yup.string().required(),
  dimensionscm: Yup.string().required(),
  support: Yup.string().required(),
  framing: Yup.string().required(),
  type: Yup.string().required(),
  authenticity: Yup.string().required(),
  signature: Yup.string().required(),
  collectors: Yup.string().required(),
});