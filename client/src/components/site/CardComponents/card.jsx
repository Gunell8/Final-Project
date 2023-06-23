import React, { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/slice/galeryDataSlice";
export const Card = () => {
  const [sortBtn, setSortBtn] = useState(false);
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery);
  
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div id="museum-cards">
      <div className="container">
        <div className="museum-cards">
          <h2>PRODUCTS</h2>
          <div className="inp">
            <input onChange={(e) => dispatch(getData(e.target.value))} type="text" placeholder="Search by name" />
            <div className="sortBy">
              <div onClick={() => setSortBtn(!sortBtn)} className="sort">Sort</div>
              {sortBtn && (
                <div className="btns">
                    <button onClick={() => dispatch(getData(2))}>Sort by Name</button>
                    <button onClick={() => dispatch(getData(1))}>Sort by Price</button>
                </div>
              )}
            </div>
          </div>
          <div className="cards">
            {gallery.data.map((d) => (
              <div className="card">
                <div className="heart">
                <AiFillHeart/>
                </div>
                <img src={d.image} alt="" />
                <Link to={`/shop/${d._id}`}>
                  <h1>{d.name}</h1>
                </Link>
                <h3>$ {d.price}.00 USD</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
