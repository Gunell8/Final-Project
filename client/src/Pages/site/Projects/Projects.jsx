import React from "react";
import "./style.scss";
import street from "../../../assests/images/62fb4658944142dd89d0bc91_wrok-1.jpg";
import landscape from "../../../assests/images/62fb4d8cf2f0e8ff10aeaa46_wrok-2.jpg";
import cosmos from "../../../assests/images/62fb5f71e4847ff6fa2c779a_wrok-3.jpg";
import optimum from "../../../assests/images/62fb5fba4f450720f11824f8_wrok-4.jpg";
import handpainted from "../../../assests/images/62fb5fc1a7912a6350781148_wrok-5.jpg";
export const Projects = () => {
  return (
    <div>
      <section id="projects">
        <div className="container">
          <div className="projects">
            <h2>Projects</h2>
            <div className="frst">
              <div className="left">
                <img src={street} alt="" />
                <p>Conceptual Art</p>
                <h5>Street Scene Abstract</h5>
                <p>114cm x 146cm</p>
                <p>Available: Custom order</p>
              </div>
              <div className="right">
                <img src={landscape} alt="" />
                <p>Conceptual Art</p>
                <h5>Landscape with House</h5>
                <p>114cm x 146cm</p>
                <p>Available: Online</p>
              </div>
            </div>
            <div className="second">
              <div className="left">
                <img src={cosmos} alt="" />
                <p>Geometric Art</p>
                <h5>Cosmos and Chaos Canvas</h5>
                <p>114cm x 146cm</p>
                <p>Available:Sold out</p>
              </div>
              <div className="right">
                <img src={optimum} alt="" />
                <p>Abstract Expressionism </p>
                <h5>Optimum Wall Coverage Abstract</h5>
                <p>114cm x 146cm</p>
                <p>Available: Exhibitions</p>
              </div>
            </div>
            <div className="third">
              <div className="left">
                <img src={handpainted} alt="" />
                <p>Aestheticism Art</p>
                <h5>Handpainted art painting</h5>
                <p>114cm x 146cm</p>
                <p>Available: Online</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
