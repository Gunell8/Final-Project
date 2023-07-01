import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/admin/Navbar";
import "./style.scss";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteusersData,
  getusersData,
  updateusersData,
} from "../../../redux/slice/usersDataSlice";
import { usersSchema } from "../AddUsers/schema";
import { Space, Spin } from "antd";
export const AdminUsers = () => {
  const [editData, setEditData] = useState(false);
  const [postImage, setPostImage] = useState("");

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  
  useEffect(() => {
    dispatch(getusersData());
  }, []);
  const { handleSubmit, handleChange, values, errors, touched } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        password: "",
        birthday: "",
        email: "",
        image: "",
        phone: "",
        address: "",

      },
      validationSchema: usersSchema,
      onSubmit: (values) => {
        dispatch(updateusersData(values)).then(() =>
          dispatch(getusersData())
        );
      },
    });
  // for image
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

  const handleEdit = async (id) => {
    setEditData(true);
    users.data?.map((element) => {
      if (element._id === id) {
        values.id = element._id;
        values.firstName = element.firstName;
        values.lastName = element.lastName;
        values.password = element.password;
        values.birthday = element.birthday;
        values.address = element.address;
        values.email = element.email;
        values.phone = element.phone;
        values.image = element.image;
      }
    });
  };
 
  return (
    <div className="admingallery">
      <Navbar />
      <div className="museum-cards">
        <h2>Users</h2>
        <div className="cards">
        {users.loading ? (
            <div className="spin">
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          ) :
          users.data.map((d) => {
            return d.isAdmin ? null : (
              <div key={d._id} className="card">
                <img src={d.image} alt="" />
                <h1>{d.firstName}</h1>
                <h3>{d.email}</h3>
                <div className="btn">
                  <button
                    className="deleteBtn"
                    onClick={() =>
                      dispatch(deleteusersData(d._id)).then(() =>
                        dispatch(getusersData())
                      )
                    }
                  >
                    Delete
                  </button>
                  <button onClick={() => handleEdit(d._id)} className="editBtn">
                    Edit
                  </button>
                </div>
              </div>
            );
          })}
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
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
