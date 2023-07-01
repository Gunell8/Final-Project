import React, { useEffect } from "react";
import { Navbar } from "../../../components/admin/Navbar";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteusersData,
  getusersData,
  } from "../../../redux/slice/usersDataSlice";
import { Space, Spin } from "antd";
export const AdminUsers = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  
  useEffect(() => {
    dispatch(getusersData());
  }, []);

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
                </div>
              </div>
            );
          })}
        </div>
      </div>

     
    </div>
  );
};
