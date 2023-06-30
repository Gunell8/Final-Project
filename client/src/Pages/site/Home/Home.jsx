import React from "react";
import img1 from "../ ../../../../assests/images/630de818082485854e90d710_shop-02.jpg";
import img2 from "../ ../../../../assests/images/630de841b284c65424aa627c_shop-03.jpg";
import img3 from "../ ../../../../assests/images/62fe304ae22ef67bca5dcd19_shop-04.jpg";
import img4 from "../ ../../../../assests/images/62fe2f68799f6c8675dbfaa2_shop-01.jpg";
import car from "../../../assests/images/630064277c69a2bd9453edd0_about-5.jpg";
import statue from "../../../assests/images/6300618d510a18e08bae536d_about-4.jpg";
import slider1 from "../../../assests/images/630067b13b1b4dc3eab22a8e_02.svg";
import slider2 from "../../../assests/images/630067bbc32fa7895cfd9ddb_03.svg";
import slider3 from "../../../assests/images/630067c8439fa6277bd68bde_04.svg";
import slider4 from "../../../assests/images/630067d3510a185dbbae9449_05.svg";
import slider5 from "../../../assests/images/630067db95f7171007da2de0_06.svg";
import slider6 from "../../../assests/images/630067a656c62a498bf4886d_01.svg";
import ten from "../../../assests/images/630452ba525dad7edc1d7bda_blog-06.jpg";
import dirty from "../../../assests/images/6304528bf8f0dbac26fbb736_blog-05.jpg";
import five from "../../../assests/images/63045264aa2052dc9576e983_blog-04.jpg";

import "./style.scss";
import { Card } from "../../../components/site/CardComponents/card";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.scss";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export const Home = () => {
  return (
    <div id="home">
      <div className="home">
        <div className="container">
          <div>
            <section className="first-section">
              <div className="image">
                <div className="image1">
                  <img className="img1" src={img4} alt="" />
                  <img className="img2" src={img1} alt="" />
                </div>
                <div className="image2">
                  <img className="img3" src={img2} alt="" />
                  <img className="img4" src={img3} alt="" />
                </div>
              </div>
            </section>
            <h1>
              Meant balls it if up doubt small purse. Required his you put the
              outlived.
            </h1>
          </div>
        </div>
      </div>
      <Card />
      <section id="artgram">
        <div className="container">
          <div className="artt">
            <div className="artgram">
              <h2>Welcome to the world of Artgram</h2>
              <p>
                But I must explain to you how all this mistaken idea of
                denouncing pleasure and praising pain was born and I will give
                you a complete account of the system, and expound the actual
                teachings of the great explorer of the truth the master.
              </p>
              <a href="">Explore now</a>
              <div className="imgs">
                <img className="car" src={car} alt="" />
              </div>
            </div>
            <div className="imgs2">
              <img className="statue" src={statue} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="slider">
        <div className="container">
          <div className="slider">
            <div className="head">
              <h2>
                Satisfied conveying a dependent contented he gentleman agreeable
                do be.
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Swiper
        slidesPerView={5}
        // centeredSlides={true}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider6} alt="" />
        </SwiperSlide>
      </Swiper>
      <section id="latest">
        <div className="container">
          <div className="latest">
            <h3>Latest blog</h3>
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
          </div>
        </div>
      </section>
    </div>
  );
};
