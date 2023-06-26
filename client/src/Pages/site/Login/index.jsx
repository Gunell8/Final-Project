import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { patientsSchema } from "./schema";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Alert } from "antd";
import "./style.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { patientData } from "../../../redux/slice/patientsDataSlice";
const LoginPage = () => {
  const [userError, setUserError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: patientsSchema,
      onSubmit: async (values) => {
        const checkUser = await axios
          .create({
            credentials: "include",
            withCredentials: true,
          })
          .post("http://localhost:8080/login", values)
          .then((res) => {
            // dispatch(patientData(res.data.patient));
            navigate("/");
          })
          .catch(() => setUserError(true));

        // var myHeaders = new Headers();
        // myHeaders.append("Content-Type", "application/json");

        // var raw = JSON.stringify({
        //   email: values.email,
        //   password: values.password,
        // });

        // var requestOptions = {
        //   method: "POST",
        //   headers: myHeaders,
        //   credentials: "include",
        //   body: raw,
        //   redirect: "follow",
        // };

        // const chechUser = await fetch(
        //   "http://localhost:8080/login",
        //   requestOptions
        // ).then((res) => {
        //   return res.text().then(async (text) => {
        //     const data = text && JSON.parse(text);
        //     if (!res.ok) {
        //       return;
        //     }
        //     await dispatch(patientData(data?.patient));
        //     navigate("/");
        //   }).catch(() => setUserError(true));
        // });

        // const getUserData = await chechUser.then((res) => res.json());

        // console.log(chechUser);

        // if (chechUser.status === 200) {
        // navigate("/");
        // }
      },
    });
  return (
    <div id="login-page">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gallery - Login</title>
      </Helmet>
      <div className="container">
        <div className="login">
          <div className="form">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
              {userError && (
                <div className="error">
                  <Alert
                    type="error"
                    message="Invalid email or password"
                    banner
                  />
                </div>
              )}

              <div className="input-control">
                <p>
                  <label htmlFor="username" className="m-2">
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

              <div className="btn">
                <button type="submit" className="btn btn-success mt-2">
                  Sign In
                </button>
              </div>
              <div className="new-account">
                <p>Don't have an account ?</p>
                <Link to={"/register"}>Sign Up</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
