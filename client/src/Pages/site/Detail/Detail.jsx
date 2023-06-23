import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../../redux/slice/wishlistSlice";
export const Detail = () => {
  const [data, setData] = useState("");
  const params = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const detail = async () => {
    const res = await axios.get(`http://localhost:8080/museums/${params.id}`);
    setData(res.data);
  };
  useEffect(() => {
    detail();
  }, []);
  return (
    <div>
      <section id="detail">
        <div className="container">
          <div className="detail">
            <div className="left">
              <img src={data.image} alt="" />
            </div>
            <div className="right">
              <div className="right-up">
                <h5>{data.name}</h5>
                <h6>$ {data.price} USD</h6>
                <ul>
                  <li>{data.title1}</li>
                  <li>{data.title2}</li>
                  <li>{data.title3}</li>
                  <li>{data.title4}</li>
                </ul>
              </div>
              <div className="btn">
                <button onClick={() => navigate("/")}>Go Back Home</button>
                <button
                  disabled={
                    wishlist.data.find((elem) => elem._id === data._id)
                      ? true
                      : false
                  }
                  onClick={() => dispatch(addToWishlist(data))}
                >
                  {wishlist.data.find((elem) => elem._id === data._id)
                    ? "Already Added"
                    : "Add To Wishlist"}
                </button>
              </div>{" "}
              <div className="right-down">
                <p>{data.about}</p>
                <div className="display">
                  <p>
                    About the seller: <span>{data.seller}</span>{" "}
                  </p>
                  <p>
                    Medium:<span>{data.medium}</span>
                  </p>
                  <p>
                    Dimensionscm inch:<span>{data.dimensionscm}</span>{" "}
                  </p>
                  <p>
                    Support:<span> {data.support}</span>
                  </p>
                  <p>
                    Framing:<span>{data.framing}</span>{" "}
                  </p>
                  <p>
                    Type:<span>{data.type}</span>{" "}
                  </p>
                  <p>
                    Authenticity:<span>{data.authenticity}</span>{" "}
                  </p>
                  <p>
                    Signature:<span>{data.signature}</span>{" "}
                  </p>
                  <p>
                    Collector’s Guide:<span>{data.collectors}</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
