import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./style.scss"
export const Detail = () => {
    const [data, setData] = useState("");
    const params = useParams();
    const detail = async () => {
      const res = await axios.get(`http://localhost:8080/museums/${params.id}`);
      setData(res.data);
    };
    useEffect(() => {
      detail();
    }, []);
  return (
    <div>
      <section id='detail'>
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
                   <button>Add to Cart</button>
                   <div className="right-down">
                    <p>
                        {data.about}
                    </p>
                   <div className="display">
                   <p>About the seller: <span>{data.seller}</span> </p>
                     <p>Medium:<span>{data.medium}</span></p> 
                     <p>Dimensionscm inch:<span>{data.dimensionscm}</span> </p>
                     <p>Support:<span> {data.support}</span></p>
                     <p>Framing:<span>{data.framing}</span> </p>
                     <p>Type:<span>{data.type}</span> </p>
                     <p>Authenticity:<span>{data.authenticity}</span> </p>
                     <p>Signature:<span>{data.signature}</span> </p> 
                     <p>Collector’s Guide:<span>{data.collectors}</span> </p> 
                   </div>
                   </div>

                </div>

            </div>
        </div>
      </section>
    </div>
  )
}
