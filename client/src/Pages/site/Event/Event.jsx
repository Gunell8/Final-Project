import React from "react";
import workshop from "../../../assests/images/62fdfeece0d4c0a37a48c26b_event-03.jpg";
import humanistic from "../../../assests/images/62fdfec08b35ff76ca7577ee_event-02.jpg";
import sculpture from "../../../assests/images/62fdeb1ae767646f6c18e26d_event-01.jpg";
import "./style.scss";
export const Event = () => {
  return (
    <div>
      <section id="event">
        <div className="container">
          <div className="event">
            <h2>Event</h2>
            <div className="galery-photo">
              <div className="img1">
                <div className="frst">
                  <img className="imgg1" src={workshop} alt="" />
                  <h6>Artgram Art Workshop</h6>
                  <div className="date">Sep 21, 2022 to Sep 24, 2022</div>
                  <div className="location">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>Art
                    Institute of Paris, France
                  </div>
                </div>
                <div className="second">
                  <img className="imgg2" src={humanistic} alt="" />
                  <h6>Arts and Humanities</h6>
                  <div className="date">Sep 14, 2022 to Sep 16, 2022</div>
                  <div className="location">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    Super Modern, London, UK
                  </div>
                </div>
                <div className="third">
                  <img className="imgg3" src={sculpture} alt="" />
                  <h6>Sculpture Painting Workshop</h6>
                  <div className="date">Aug 15, 2022 to Aug 17, 2022</div>
                  <div className="location">
                    <i class="fa-sharp fa-solid fa-location-dot"></i>
                    The Fifth Avenue Road, Mumbai
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
