import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./style.scss";
import { usersSchema } from "./schema";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
const SignupPage = () => {
  const [postImage, setPostImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthday: "",
        address: "",
        phone: "",
        image: "",
      },
      validationSchema: usersSchema,
      onSubmit: async (values) => {
        values.image = postImage;
        const checkUser = await axios
          .create({
            withCredentials: true,
          })
          .post("http://localhost:8080/register", values)
          .then((res) => {
            navigate("/");
          });
        resetForm();
      },
    });

  // image
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage(base64);
  };

  return (
    <div id="sign-up-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery - Sign Up</title>
      </Helmet>
      <div className="container">
        <div className="signup">
          <div className="form">
            <form onSubmit={handleSubmit}>
              <h2>Sign Up</h2>
              <div className="row">
                <div className="left">
                  <div className="input-control">
                    <p>
                      <label htmlFor="firstName" className="m-2">
                        First Name
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      onChange={handleChange}
                      value={values.firstName}
                      placeholder="First Name"
                    />
                    {errors.firstName && touched.firstName && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          margin: "5px 0 5px 3px",
                        }}
                      >
                        {errors.firstName}
                      </div>
                    )}
                  </div>
                  <div className="input-control">
                    <p>
                      <label htmlFor="lastName" className="m-2">
                        Last Name
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      onChange={handleChange}
                      value={values.lastName}
                      placeholder="Last Name"
                    />
                    {errors.lastName && touched.lastName && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          margin: "5px 0 5px 3px",
                        }}
                      >
                        {errors.lastName}
                      </div>
                    )}
                  </div>
                </div>
                <div className="left">
                  <div className="input-control">
                    <p>
                      <label htmlFor="email" className="m-2">
                        Your Email
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      value={values.email}
                      placeholder="Email"
                    />
                    {errors.email && touched.email && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          margin: "5px 0 5px 3px",
                        }}
                      >
                        {errors.email}
                      </div>
                    )}
                  </div>
                  <div className="input-control">
                    <p>
                      <label htmlFor="password" className="m-2">
                        Password
                        <span className="required">*</span>
                      </label>
                    </p>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={handleChange}
                      value={values.password}
                      placeholder="Password"
                    />
                    {errors.password && touched.password && (
                      <div
                        style={{
                          color: "red",
                          fontSize: "12px",
                          margin: "5px 0 5px 3px",
                        }}
                      >
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="input-image">
                  <p>
                    <label htmlFor="image" className="m-2">
                      Image
                      <span className="required">*</span>
                    </label>
                  </p>
                  <input
                    id="image"
                    name="image"
                    type="file"
                    placeholder="Image"
                    onChange={(e) => {
                      handleFileUpload(e);
                    }}
                  />
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="birthday" className="m-2">
                      Birthday
                      <span className="required">*</span>
                    </label>
                  </p>
                  <input
                    id="birthday"
                    name="birthday"
                    type="date"
                    onChange={handleChange}
                    value={values.birthday}
                  />
                  {errors.birthday && touched.birthday && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.birthday}
                    </div>
                  )}
                </div>
              </div>

              <div className="left">
                <div className="input-control">
                  <p>
                    <label htmlFor="phone" className="m-2">
                      Phone
                      <span className="required">*</span>
                    </label>
                  </p>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    value={values.phone}
                    placeholder="Phone"
                  />
                  {errors.phone && touched.phone && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.phone}
                    </div>
                  )}
                </div>
                <div className="input-control">
                  <p>
                    <label htmlFor="address" className="m-2">
                      Address
                      <span className="required">*</span>
                    </label>
                  </p>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={values.address}
                    placeholder="Address"
                  />
                  {errors.address && touched.address && (
                    <div
                      style={{
                        color: "red",
                        fontSize: "12px",
                        margin: "5px 0 5px 3px",
                      }}
                    >
                      {errors.address}
                    </div>
                  )}
                </div>
              </div>
           
              <div className="btn">
                <button type="submit" className="btn btn-success mt-2">
                  Register
                </button>
              </div>

              <div className="have-account">
                <p>Already have an account ?</p>
                <Link to={"/login"}>Sign in</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
