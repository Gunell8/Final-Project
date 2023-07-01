import React, { useState } from "react";
import "./style.scss";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import { contactSchema } from "./schema/contactSchema";
export const Contact = () => {
  // const [userError, setUserError] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  const { handleSubmit, handleChange, values, errors, touched, resetForm } =
    useFormik({
      initialValues: {
        email: "",
        name: "",
        message: "",
      },
      validationSchema: contactSchema,
      onSubmit: async (values) => {
        await axios.post("http://localhost:8080/contact", values);
        resetForm()
      },
    });
  return (
    <div>
      <section id="contact">
        <div className="container">
          <div className="contact">
            <h2>Contact</h2>
            
            <div className="down">
              <div className="left">
                <div className="frst">
                  <p>For questions or correspondance, please contact</p>
                  <p>
                    Email: <a href="">info@example.com</a>
                  </p>
                </div>
                <div className="sec">
                  <h5>Gallery representation</h5>
                  <p>Artgram Gallery</p>
                  <p className="p">HS B26, Horton Ford Rd, Eidson, TN, 37731</p>
                  <a href="https://artgram-wbs.webflow.io/">
                    https://artgram-wbs.webflow.io
                  </a>
                </div>
              </div>
             <form onSubmit={handleSubmit} action="">
             <div className="right">
                <div className="one">
                  <label htmlFor="name">Name</label>
                  <input
                  id="name"
                  name="name"
                  type="name"
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
                <div className="two">
                  <label htmlFor="email">Email</label>
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
                <div className="three">
                  <label htmlFor="message">Message</label>
                  <textarea
                  id="message"
                  name="message"
                  type="message"
                  onChange={handleChange}
                  value={values.message}
                  placeholder="Message"
                />
                   {errors.message && touched.message && (
                  <div
                    style={{
                      color: "red",
                      fontSize: "12px",
                      margin: "5px 0 5px 3px",
                    }}
                  >
                    {errors.message}
                  </div>
                )}
                </div>
                <button type="submit">Submit</button>
              </div>
             </form>
            </div>
          </div>
          <div id="map">
            <div className="mapouter">
              <div className="gmap_canvas">
                <iframe
                  width="1080"
                  height="450"
                  id="gmap_canvas"
                  src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  style={{ width: "100%" }}
                ></iframe>
                <a href="https://123movies-i.net"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
