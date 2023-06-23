import React from "react";
import { Helmet } from "react-helmet";
import { useDispatch, useSelector } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";
import { removeAll, removeToWishlist } from "../../redux/slice/wishlistSlice";
const WishListPage = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div id="wishlist-page">
      {console.log(wishlist.data)}
      <Helmet>
        <title>Gallery - Wishlist</title>
      </Helmet>
      <div className="wishlist-page">
        <div className="container"></div>
      </div>
      <div className="fav-gallery">
        <div className="container">
          <div className="cards">
            {wishlist.data.find((elem) => elem._id) ? (
              wishlist.data?.map((element) => {
                return (
                  <div key={element._id} className="card">
                    <div className="image">
                      <img src={element.image} alt="" />
                    </div>
                   <div className="h2">
                   <h2>{element.name}</h2>
                    <h2>$ {element.price} USD</h2>
                   </div>
                  </div>
                );
              })
            ) : (
              <h1>Empty</h1>
            )}
          </div>
          {wishlist.data.find((elem) => elem._id) && (
            <div className="btn">
              <button onClick={() => dispatch(removeAll([]))}>
                Remove All
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishListPage;
