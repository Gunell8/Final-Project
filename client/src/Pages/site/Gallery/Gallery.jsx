import React from 'react'
import "./style.scss"
import photo1 from "../../../assests/images/62fcce9193bd3f489688133e_gallery-01.jpg"
import photo2 from "../../../assests/images/62fccea6322bf9e8e0a58b1e_gallery-02.jpg"
import photo3 from "../../../assests/images/6300618d510a18e08bae536d_about-4 (1).jpg"
import photo4 from "../../../assests/images/62fccec2430801684fd31cf6_gallery-04.jpg"
import photo5 from "../../../assests/images/630de818082485854e90d710_shop-02.jpg"
import photo6 from "../../../assests/images/62fe2f68799f6c8675dbfaa2_shop-01.jpg"
export const Gallery = () => {
  return (
    <div>
      <section id='gallery'>
        <div className="container">
          <div className="gallery">
            <h2>Gallery</h2>
            <div className="galery-photo">
              <div className="img1">
                <img className='imgg1' src={photo1} alt="" />
                <img className='imgg2' src={photo2} alt="" />
                <img className='imgg3' src={photo3} alt="" />
              </div>
              <div className="img2">
                <img className='imgg4' src={photo4} alt="" />
                <img className='imgg5' src={photo5} alt="" />
                <img className='imgg6' src={photo6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
