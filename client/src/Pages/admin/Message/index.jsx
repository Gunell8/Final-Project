import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/admin/Navbar";
import "./style.scss";
import axios from "axios";
import { Space, Spin, message } from "antd";
export const Message = () => {
  const [contactData, setContactData] = useState([]);
  const[loading,setLoading]=useState(false)
  const getContactData = async () => {
    setLoading(true)
    const response = await axios.get("http://localhost:8080/contact");
    setContactData(response.data);
    setLoading(false)
  };
  useEffect(() => {
    getContactData();
  }, []);
  const deleteMessage = async (id) => {
   await axios.delete(`http://localhost:8080/contact/${id}`).then(() => 
      getContactData()
    );
  };
  return (
    <div className="contact">
      <Navbar />
      <div className="contact-messages">
        <h2>Message</h2>
        <div className="messages">
        {loading ? (
            <div className="spin">
              <Space size="middle">
                <Spin size="large" />
              </Space>
            </div>
          ) :
          contactData?.map((d) => {
            return d.isAdmin ? null : (
              <div key={d._id} className="message">
                <div className="title">
                  <h1>
                    <span>Name:</span> {d.name}
                  </h1>
                  <h3>
                    <span>Email:</span> {d.email}
                  </h3>
                  <p>
                    <span>Message:</span> {d.message}
                  </p>
                </div>
                <div className="btn" onClick={() => deleteMessage(d._id)}>
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
