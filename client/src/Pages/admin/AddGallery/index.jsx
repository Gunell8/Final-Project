import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import "./style.scss"
import React, { useState } from "react";
import { postData } from '../../../redux/slice/galeryDataSlice';
import { Navbar } from '../../../components/admin/Navbar';
export const AddGallery = () => {
    const dispatch = useDispatch();
  const [postImage, setPostImage] = useState("");
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        gender: "",
        doctorJob: "",
        location: "",
        phone: "",
        money: "",
        hour: "",
        star: "",
        image: "",
      },
    //   validationSchema: doctorsSchema,
      onSubmit: (values) => {
        values.image = postImage;
        dispatch(postData(values));
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
    <div id="add-doctor">
    <Helmet>
      <title>Doctris - Add Doctor</title>
      <meta name="description" content="test on react-helmet" />
      <meta name="theme-color" content="#ccc" />
    </Helmet>
    <Navbar />
    <div className="add-doctor">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <div className="form">
            <div className="left">
              <div className="input-control">
                <p>
                  <label htmlFor="firstName" className="m-2">
                    First name
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
                  <label htmlFor="email" className="m-2">
                    Your Email
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
                  <label htmlFor="phone" className="m-2">
                    Phone no
                  </label>
                </p>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  onChange={handleChange}
                  value={values.phone}
                  placeholder="Phone no:"
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
                  <label htmlFor="Gender" className="m-2">
                    Gender
                  </label>
                </p>
                <select
                  id="gender"
                  name="gender"
                  onChange={handleChange}
                  value={values.gender}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && touched.gender && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.gender}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="Appointment" className="m-2">
                    Appointment
                  </label>
                </p>
                <input
                  id="money"
                  name="money"
                  type="number"
                  onChange={handleChange}
                  value={values.money}
                  placeholder="Appointment Price"
                />
                {errors.money && touched.money && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.money}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="point" className="m-2">
                    Point
                  </label>
                </p>
                <select
                  id="star"
                  name="star"
                  onChange={handleChange}
                  value={values.star}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                {errors.star && touched.star && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.star}
                  </div>
                )}
              </div>
            </div>
            <div className="right">
              <div className="input-control">
                <p>
                  <label htmlFor="lastName" className="m-2">
                    Last name
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
              <div className="input-control">
                <p>
                  <label htmlFor="password" className="m-2">
                    Password
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
              <div className="input-control">
                <p>
                  <label htmlFor="address" className="m-2">
                    Address
                  </label>
                </p>
                <input
                  id="location"
                  name="location"
                  type="text"
                  onChange={handleChange}
                  value={values.location}
                  placeholder="Address"
                />
                {errors.location && touched.location && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.location}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="Departments" className="m-2">
                    Departments
                  </label>
                </p>
                <select
                  id="doctorJob"
                  name="doctorJob"
                  onChange={handleChange}
                  value={values.doctorJob}
                >
                  <option value="Eye Care">Eye Care</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Psychotherapist">Psychotherapist</option>
                  <option value="Orthopedic">Orthopedic</option>
                  <option value="Dentist">Dentist</option>
                  <option value="Gastrologist">Gastrologist</option>
                  <option value="Urologist">Urologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Nutritionists">Nutritionists</option>
                </select>
                {errors.doctorJob && touched.doctorJob && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.doctorJob}
                  </div>
                )}
              </div>
              <div className="input-control">
                <p>
                  <label htmlFor="Hour" className="m-2">
                    Working Hours
                  </label>
                </p>
                <input
                  id="hour"
                  name="hour"
                  type="text"
                  onChange={handleChange}
                  value={values.hour}
                  placeholder="Working Hours"
                />
                {errors.hour && touched.hour && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.hour}
                  </div>
                )}
              </div>
              <div className="input-image">
                <p>
                  <label htmlFor="image" className="m-2">
                    Image
                  </label>
                </p>
                <input
                  id="image"
                  name="image"
                  type="file"
                  onChange={(e) => {
                    handleFileUpload(e);
                  }}
                  // value={values.image}
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
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}
