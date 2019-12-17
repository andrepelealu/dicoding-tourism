import React from 'react'
import './style.css'
function Slider(){
    return(
        <div className="slider">
        <ul className="slides">
          <li>
            <img className="sld" alt="slider_img" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/homepage-banner-december/global-december/Komodo-Banner.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg"/>
            <div className="caption center-align">
              <h3 className="white-text"><b>Wisata Makin Mudah Bersama Kami</b></h3>
              <h5 className="light grey-text text-lighten-3">Tentukan Paket Wisata Sesuai Budget Kamu</h5>
            </div>
          </li>
          <li>
            <img alt="slider_img" src="https://www.indonesia.travel//content/dam/indtravelrevamp/en/main-banner/homepage-banner-december/global-december/tobabanner.jpg"/> 
            <div className="caption left-align">
              <h3><b>Booking Dengan Mudah</b></h3>
              <h5 className="light grey-text text-lighten-3">Tentukan keinginan mu.</h5>
            </div>
          </li>
          <li>
            <img alt="slider_img" src="https://www.indonesia.travel/content/dam/indtravelrevamp/en/main-banner/homepage-banner-december/global-december/likupangbanner.jpg"/> 
            <div className="caption right-align">
              <h3>Banyak Pilihan</h3>
              <h5 className="light grey-text text-lighten-3"><b>Pilih sesuka mu</b></h5>
            </div>
          </li>
        </ul>
      </div>

    )
}
export default Slider