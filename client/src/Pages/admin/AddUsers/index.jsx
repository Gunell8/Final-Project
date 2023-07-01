import { useFormik } from 'formik';
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet";
import "./style.scss"
import { postData } from '../../../redux/slice/galeryDataSlice';
import { Navbar } from '../../../components/admin/Navbar';
import { usersSchema } from './schema';
import { useState } from 'react';
import axios from 'axios';
export const AddUsers = () => {
    const dispatch = useDispatch();
    const [postImage, setPostImage] = useState("");

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
     values.image = postImage 
        const checkUser = await axios
          .post("http://localhost:8080/register", values );
      resetForm()
      },
    });
    
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
    <div id="add-gallery">
    <Helmet>
      <title>Users - Add Users</title>
      <meta name="description" content="test on react-helmet" />
      <meta name="theme-color" content="#ccc" />
    </Helmet>
    <Navbar />
    <div id="update-gallery">
          <form onSubmit={handleSubmit}>            
          <div className="form">
              <div className="left">
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      First Name
                    </label>
                  </p>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    onChange={handleChange}
                    value={values.firstName}
                    placeholder="firstName"
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
                    <label htmlFor="firstName" className="m-2">
                      Last Name
                    </label>
                  </p>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    onChange={handleChange}
                    value={values.lastName}
                    placeholder="lastName"
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
                    <label htmlFor="firstName" className="m-2">
                      Password
                    </label>
                  </p>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    value={values.password}
                    placeholder="password"
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
                  placeholder="Image"
                  onChange={(e) => {
                    handleFileUpload(e);
                  }}
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
              <div className="right">
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Birthday
                    </label>
                  </p>
                  <input
                    id="birthday"
                    name="birthday"
                    type="date"
                    onChange={handleChange}
                    value={values.birthday}
                    placeholder="birthday"
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
                <div className="input-control">
                  <p>
                    <label htmlFor="firstName" className="m-2">
                      Phone
                    </label>
                  </p>
                  <input
                    id="phone"
                    name="phone"
                    type="text"
                    onChange={handleChange}
                    value={values.phone}
                    placeholder="phone"
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
                    <label htmlFor="firstName" className="m-2">
                    Your Email
                    </label>
                  </p>
                  <input
                    id="email"
                    name="email"
                    type="text"
                    onChange={handleChange}
                    value={values.email}
                    placeholder="email"
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
                    <label htmlFor="firstName" className="m-2">
                    Address
                    </label>
                  </p>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    onChange={handleChange}
                    value={values.address}
                    placeholder="address"
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
            </div>
            <div className="btn">
              <button type="submit" className="btn btn-success mt-2">
                Add
              </button>
            </div>
          </form>
        </div>
  </div>
  )
}
