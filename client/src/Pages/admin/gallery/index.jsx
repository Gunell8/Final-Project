import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/admin/Navbar";
import "./style.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteData,
  getData,
  updateData,
} from "../../../redux/slice/galeryDataSlice";
import { GallerySchema } from "../AddGallery/schema";
export const AdminGallery = () => {
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery);
  const [editData, setEditData] = useState(false);
  useEffect(() => {
    dispatch(getData());
  }, []);
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        id: "",
        name: "",
        price: "",
        title1: "",
        title2: "",
        title3: "",
        title4: "",
        about: "",
        seller: "",
        support: "",
        framing: "",
        type: "",
        authenticity: "",
        image: "",
        dimensionscm: "",
        medium: "",
      },
      // validationSchema: GallerySchema,
      onSubmit: (values) => {
        dispatch(updateData(values)).then(() => dispatch(getData()));
      },
    });

  const handleEdit = async (id) => {
    setEditData(true);
    gallery.data?.map((element) => {
      if (element._id === id) {
        values.id = element._id;
        values.name = element.name;
        values.price = element.price;
        values.title1 = element.title1;
        values.title2 = element.title2;
        values.title3 = element.title3;
        values.title4 = element.title4;
        values.location = element.location;
        values.about = element.about;
        values.seller = element.seller;
        values.medium = element.medium;
        values.dimensionscm = element.dimensionscm;
        values.support = element.support;
        values.framing = element.framing;
        values.type = element.type;
        values.authenticity = element.authenticity;
        values.signature = element.signature;
        values.collectors = element.collectors;
        values.image = element.image;
      }
    });
  };

  return (
    <div className="admingallery">
      <Navbar />
      <div className="museum-cards">
        <h2>PRODUCTS</h2>
        <div className="cards">
          {gallery.data.map((d) => (
            <div className="card">
              <img src={d.image} alt="" />
              <h1>{d.name}</h1>
              <h3>{d.price}</h3>
              <div className="btn">
                <button
                  className="deleteBtn"
                  onClick={() =>
                    dispatch(deleteData(d._id)).then(() => dispatch(getData()))
                  }
                >
                  Delete
                </button>
                <button onClick={() => handleEdit(d._id)} className="editBtn">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {editData && (
        <div id="update-gallery">
          <form onSubmit={handleSubmit}>
            <div className="close-bg">

            <button onClick={() => setEditData(false)} className="close">
              x
            </button>
            </div>
           
            <div className="form">
              <div className="left">
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Name
                    </label>
                  </p>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={handleChange}
                    value={values.name}
                    placeholder="Name"
                  />
                  {errors.name && touched.name && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Price
                    </label>
                  </p>
                  <input
                    id="price"
                    name="price"
                    type="text"
                    onChange={handleChange}
                    value={values.price}
                    placeholder="Price"
                  />
                  {errors.price && touched.price && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.price}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Title4
                    </label>
                  </p>
                  <input
                    id="title4"
                    name="title4"
                    type="text"
                    onChange={handleChange}
                    value={values.title4}
                    placeholder="Title4"
                  />
                  {errors.title4 && touched.title4 && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.title4}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      About
                    </label>
                  </p>
                  <input
                    id="about"
                    name="about"
                    type="text"
                    onChange={handleChange}
                    value={values.about}
                    placeholder="About"
                  />
                  {errors.about && touched.about && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.about}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Seller
                    </label>
                  </p>
                  <input
                    id="seller"
                    name="seller"
                    type="text"
                    onChange={handleChange}
                    value={values.seller}
                    placeholder="Seller"
                  />
                  {errors.seller && touched.seller && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.seller}
                    </div>
                  )}
                </div>
              </div>
              <div className="middle">
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Title1
                    </label>
                  </p>
                  <input
                    id="title1"
                    name="title1"
                    type="text"
                    onChange={handleChange}
                    value={values.title1}
                    placeholder="Title1"
                  />
                  {errors.title1 && touched.title1 && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.title1}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Title2
                    </label>
                  </p>
                  <input
                    id="title2"
                    name="title2"
                    type="text"
                    onChange={handleChange}
                    value={values.title2}
                    placeholder="Title2"
                  />
                  {errors.title2 && touched.title2 && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.title2}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Title3
                    </label>
                  </p>
                  <input
                    id="title3"
                    name="title3"
                    type="text"
                    onChange={handleChange}
                    value={values.title3}
                    placeholder="Title3"
                  />
                  {errors.title3 && touched.title3 && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.title3}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Medium
                    </label>
                  </p>
                  <input
                    id="medium"
                    name="medium"
                    type="text"
                    onChange={handleChange}
                    value={values.medium}
                    placeholder="Medium"
                  />
                  {errors.medium && touched.medium && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.medium}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Dimensionscm
                    </label>
                  </p>
                  <input
                    id="dimensionscm"
                    name="dimensionscm"
                    type="text"
                    onChange={handleChange}
                    value={values.dimensionscm}
                    placeholder="Dimensionscm"
                  />
                  {errors.dimensionscm && touched.dimensionscm && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.dimensionscm}
                    </div>
                  )}
                </div>
              </div>
              <div className="right">
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Support
                    </label>
                  </p>
                  <input
                    id="support"
                    name="support"
                    type="text"
                    onChange={handleChange}
                    value={values.support}
                    placeholder="Support"
                  />
                  {errors.support && touched.support && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.support}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Framing
                    </label>
                  </p>
                  <input
                    id="framing"
                    name="framing"
                    type="text"
                    onChange={handleChange}
                    value={values.framing}
                    placeholder="Framing"
                  />
                  {errors.framing && touched.framing && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.framing}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Type
                    </label>
                  </p>
                  <input
                    id="type"
                    name="type"
                    type="text"
                    onChange={handleChange}
                    value={values.type}
                    placeholder="Type"
                  />
                  {errors.type && touched.type && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.type}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Authenticity
                    </label>
                  </p>
                  <input
                    id="authenticity"
                    name="authenticity"
                    type="text"
                    onChange={handleChange}
                    value={values.authenticity}
                    placeholder="Authenticity"
                  />
                  {errors.authenticity && touched.authenticity && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.authenticity}
                    </div>
                  )}
                </div>

           
                <div className="input-control">
                  <p>
                    <label htmlFor="image" className="m-2">
                      Image
                    </label>
                  </p>
                  <input
                    id="image"
                    name="image"
                    type="text"
                    onChange={handleChange}
                    value={values.image}
                    placeholder="Image"
                  />
                  {errors.image && touched.image && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.image}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
