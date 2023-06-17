import React, { useState } from "react";
import "./style.scss";
import about from "../../../assests/images/62fe101bb5137fd00f4a44f6_about-3.jpg";
import about_image from "../../../assests/images/about.jpg";
import star from "../../../assests/images/62fdd808b7ce5c9e4a158177_star.svg";
import slider1 from "../../../assests/images/62fca5ed4544ed549e2aade4_avatar-2.jpg";
import slider2 from "../../../assests/images/62fca5ed4544ed9e272aadd2_avatar.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

export const About = () => {
  const [video, setVideo] = useState(false);

  return (
    <div>
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="down">
              <div className="left">
                <h2>Art Director/ Graphic Designer</h2>
                <p>Overview</p>
                <p className="p">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the
                  master-builder of human happiness. No one rejects, dislikes,
                  or avoids pleasure itself, because it is pleasure but because
                  those who do not know how to pursue pleasure rationally
                  encounter consequences that are extremely painful. Nor again
                  is there anyone who loves or pursues or desires to obtain pain
                  of itself, because it is pain, but because occasionally.
                </p>
                <p className="sec-p">
                  Circumstances occur in which toil and pain can procure him
                  some great pleasure. To take a trivial example, which of us
                  ever undertakes laborious physical exercise, except to obtain
                  some advantage from it? But who has any right to find fault
                  with a man who chooses.
                </p>
              </div>
              <div className="right">
                <img src={about} alt="" />
              </div>
            </div>
          </div>
          <section className="awards">
            <h2>Awards</h2>
            <div className="award-down">
              <h6>Best of Show, Kimball Arts Festival</h6>
              <h6>2022</h6>
            </div>
            <div className="line"></div>
            <div className="award-down">
              <h6>Juror’s Award, Statewide Exhibit, Rio Gallery</h6>
              <h6>2021</h6>
            </div>
            <div className="line"></div>
            <div className="award-down">
              <h6>Award of Merit, Utah Women Artist Exhibit</h6>
              <h6>2020</h6>
            </div>
            <div className="line"></div>
            <div className="award-down">
              <h6>President’s Award, SLCC President’s Art Show</h6>
              <h6>2018</h6>
            </div>
            <div className="line"></div>
            <div className="award-down">
              <h6>People’s Choice Award, Holladay Art Show</h6>
              <h6>2014</h6>
            </div>
            <div className="line"></div>
          </section>

          <section className="about-video">
            <div className="about-with-video">
              <div className="video">
                <div className="img">
                  <div className="image"></div>
                  <div className="play-video">
                    <a onClick={() => setVideo(true)}>
                      <i className="fa-solid fa-play"></i>
                    </a>
                  </div>
                </div>
              </div>
              {video && (
                <div onClick={() => setVideo(false)} className="youtube-video">
                  <div onClick={() => setVideo(false)} className="close">
                    x
                  </div>
                  <iframe
                    width="800"
                    height="500"
                    src="https://www.youtube.com/embed/k9avNU8dNw0"
                  ></iframe>
                </div>
              )}
            </div>
          </section>
          <div className="nothing">
            <img src={star} alt="" />
            <h2>Nothing but love</h2>
          </div>
          <Swiper
            navigation={true}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
            modules={[Navigation, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="sliders">
                <div className="img">
                  <img src={slider1} alt="" />
                </div>
                <h4>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati.
                </h4>
                <p>Joan Wallace, Google </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sliders">
                <div className="img">
                  <img src={slider2} alt="" />
                </div>
                <h4>
                  Which is the same as saying through shrinking from toil and
                  pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice.
                </h4>
                <p>Jack F, Phoenix </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sliders">
                <div className="img">
                  <img src={slider1} alt="" />
                </div>
                <h4>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati.
                </h4>
                <p>Joan Wallace, Google </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sliders">
                <div className="img">
                  <img src={slider2} alt="" />
                </div>
                <h4>
                  Which is the same as saying through shrinking from toil and
                  pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice.
                </h4>
                <p>Jack F, Phoenix </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sliders">
                <div className="img">
                  <img src={slider1} alt="" />
                </div>
                <h4>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium voluptatum deleniti atque corrupti quos
                  dolores et quas molestias excepturi sint occaecati.
                </h4>
                <p>Joan Wallace, Google </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="sliders">
                <div className="img">
                  <img src={slider2} alt="" />
                </div>
                <h4>
                  Which is the same as saying through shrinking from toil and
                  pain. These cases are perfectly simple and easy to
                  distinguish. In a free hour, when our power of choice.
                </h4>
                <p>Jack F, Phoenix </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
