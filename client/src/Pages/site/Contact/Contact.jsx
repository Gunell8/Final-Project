import React from "react";
import "./style.scss";
export const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="container">
          <div className="contact">
            <h2>Contact</h2>
            <div className="down">
              <div className="left">
                <div className="frst">
                  <p>For questions or correspondance, please contact</p>
                  <p>
                    Email: <a href="">info@example.com</a>
                  </p>
                </div>
                <div className="sec">
                  <h5>Gallery representation</h5>
                  <p>Artgram Gallery</p>
                  <p className="p">HS B26, Horton Ford Rd, Eidson, TN, 37731</p>
                  <a href="https://artgram-wbs.webflow.io/">
                    https://artgram-wbs.webflow.io
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="one">
                  <label htmlFor="">Name</label>
                  <input type="text" />
                </div>
                <div className="two">
                  <label htmlFor="">Email</label>
                  <input type="text" />
                </div>
                <div className="three">
                  <label htmlFor="">Message</label>
                  <input type="text" />
                </div>
                <button>Submit</button>
              </div>
            </div>
          </div>
            <div id="map">
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              width="1080"
              height="450"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{ width: "100%" }}
            ></iframe>
            <a href="https://123movies-i.net"></a>
          </div>
        </div>
      </div>
        </div>
      </section>
    </div>
  );
};
