import React from "react";
import { Navbar } from "../../../components/admin/Navbar";
import img1 from "../ ../../../../assests/images/630de818082485854e90d710_shop-02.jpg";
import img2 from "../ ../../../../assests/images/630de841b284c65424aa627c_shop-03.jpg";
import img3 from "../ ../../../../assests/images/62fe304ae22ef67bca5dcd19_shop-04.jpg";
import img4 from "../ ../../../../assests/images/62fe2f68799f6c8675dbfaa2_shop-01.jpg";
import "./style.scss";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <div className="body-dashboard">
        <section className="first-section">
          <div className="image">
            <img className="img1" src={img4} alt="" />
            <img className="img2" src={img1} alt="" />
            <img className="img3" src={img2} alt="" />
            <img className="img4" src={img3} alt="" />
          </div>
        </section>{" "}
      </div>
    </div>
  );
};

export default Dashboard;
