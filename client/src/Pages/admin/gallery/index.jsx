import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/admin/Navbar";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../../../redux/slice/galeryDataSlice";
export const AdminGallery = () => {
const dispatch = useDispatch();
const gallery = useSelector((state) => state.gallery);

useEffect(() => {
  dispatch(getData());
}, []);
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
              <button className="deleteBtn" onClick={
                ()=>dispatch(deleteData(d._id)).then(()=>dispatch(getData()))
              }>Delete</button>
              <button className="editBtn" >Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
