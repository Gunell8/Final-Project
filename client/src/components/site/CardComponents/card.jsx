import React, { useEffect } from "react";
import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../redux/slice/galeryDataSlice";
import { addToWishlist, removeToWishlist } from "../../../redux/slice/wishlistSlice";
export const Card = () => {
  const [sortBtn, setSortBtn] = useState(false);
  const gallery = useSelector((state) => state.gallery);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  useEffect(() => {
    dispatch(getData());
  }, []);
  return (
    <div id="museum-cards">
      <div className="container">
        <div className="museum-cards">
          <h2>PRODUCTS</h2>
          <div className="inp">
            <input
              onChange={(e) => dispatch(getData(e.target.value))}
              type="text"
              placeholder="Search by name"
            />
            <div className="sortBy">
              <div onClick={() => setSortBtn(!sortBtn)} className="sort">
                Sort
              </div>
              {sortBtn && (
                <div className="btns">
                  <button onClick={() => dispatch(getData(2))}>
                    Sort by Name
                  </button>
                  <button onClick={() => dispatch(getData(1))}>
                    Sort by Price
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="cards">
            {gallery.data.map((data) => (
              <div className="card">
                <div className="heart">
                {wishlist.data.find((elem) => elem._id === data._id) ? (
                    <div
                      onClick={() => dispatch(removeToWishlist(data._id))}
                      className="icon"
                    >
                      <i className="fa-solid fa-heart"></i>
                    </div>
                  ) : (
                    <div
                      onClick={() => dispatch(addToWishlist(data))}
                      className="icon"
                    >
                      <i className="fa-regular fa-heart"></i>
                    </div>
                  )}
                </div>
                <img src={data.image} alt="" />
                <Link to={`/shop/${data._id}`}>
                  <h1>{data.name}</h1>
                </Link>
                <h3>$ {data.price}.00 USD</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
