import React from "react";
import ten from "../../../assests/images/630452ba525dad7edc1d7bda_blog-06.jpg";
import dirty from "../../../assests/images/6304528bf8f0dbac26fbb736_blog-05.jpg";
import five from "../../../assests/images/63045264aa2052dc9576e983_blog-04.jpg";
import paint from "../../../assests/images/63007045f4c91449cb5c8f4f_blog-03.jpg";
import human from "../../../assests/images/63007015226cea33e540a53f_blog-02.jpg";
import hand from "../../../assests/images/63006fe53b1b4d1cd9b26b00_blog-01.jpg";
import "./style.scss";
export const Blog = () => {
  return (
    <div>
      <section id="latest">
        <div className="container">
          <div className="latest">
            <h3>Blog</h3>
            <div className="latest-card">
              <div className="latest-img">
                <img src={ten} alt="" />
                <h5>August 23, 2022</h5>
                <h4>Ten questions you should answer truthfully</h4>
                <p>
                  When our power of choice is untrammelled and when nothing
                  prevents.
                </p>
              </div>
              <div className="latest-img">
                <img src={dirty} alt="" />
                <h5>August 23, 2022</h5>
                <h4>Dirty little secrets about the business industry</h4>
                <p>
                  These cases are perfectly simple and easy to distinguish In a
                  free hour.
                </p>
              </div>
              <div className="latest-img">
                <img src={five} alt="" />
                <h5>August 23, 2022</h5>
                <h4>Five intermediate guide to business</h4>
                <p>
                  Which is the same as saying through shrinking from toil and
                  pain.
                </p>
              </div>
            </div>
            <div className="latest-card">
              <div className="latest-img">
                <img src={paint} alt="" />
                <h5>August 20, 2022</h5>
                <h4>Dirty little secrets about the business</h4>
                <p>
                  Delivered dejection necessary objection do Mr prevailed mr
                  feeling.
                </p>
              </div>
              <div className="latest-img">
                <img src={human} alt="" />
                <h5>August 20, 2022</h5>
                <h4>12 worst types of business accounts</h4>
                <p>
                  Bed one supposing breakfast day fulfilled off depending
                  questions.
                </p>
              </div>
              <div className="latest-img">
                <img src={hand} alt="" />
                <h5>August 20, 2022</h5>
                <h4>10 tell-tale signs you need to get</h4>
                <p>Demesne far hearted suppose venture excited see had has.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
