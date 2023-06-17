import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "./style.scss";
export const Card = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/museums");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="museum-cards">
      <div className="container">
        <div className="museum-cards">
          <h2>PRODUCTS</h2>
          <div className="cards">
            {data.map((d) => (
              <div className="card">
                <img src={d.image} alt="" />
                <h1>{d.name}</h1>
                <h3>{d.price}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
