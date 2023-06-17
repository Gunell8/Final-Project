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
                    <h6>{data.price}</h6>
                 <ul>
                    <li>{data.title1}</li>
                    <li>{data.title2}</li>
                    <li>{data.title3}</li>
                    <li>{data.title4}</li>
                 </ul>
                   </div>
                   <div className="right-down">
                    <p>
                        {data.about}
                    </p>
                     <p>About the seller: {data.seller}</p>
                     <p>Medium: {data.medium}</p>
                     <p>Dimensionscm inch: {data.dimensionscm}</p>
                     <p>Support: {data.support}</p>
                     <p>Framing: {data.framing}</p>
                     <p>Type: {data.type}</p>
                     <p>Authenticity: {data.authenticity}</p>
                     <p>Signature: {data.signature}</p>
                     <p>Collector’s Guide: : {data.collectors}</p>
                   </div>

                </div>

            </div>
        </div>
      </section>
    </div>
  )
}
