import React from 'react'

import img_handshakeIcon from '../assets/images/handshake-icon.svg'
import img_lightbulbIcon from '../assets/images/lightbulb-icon.svg'
import img_chartIcon from '../assets/images/chart-icon.svg'
import img_boxIcon from '../assets/images/box-icon.svg'

function FeaturesSection() {
  return (
    <section className="features">



    <div className="container">
        <div className="section-title">
            <p>Features</p>
            <h2>Our Accounting is trusted by thousand of companies</h2>
            <button className="btn-yellow">Learn More<i className="fa-regular fa-arrow-up-right"></i></button>
        </div>


        <div className="our-products">
            <img src={img_handshakeIcon} alt="handshake icon"/>
            <h3>Business Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="our-products">
            <img src={img_lightbulbIcon} alt="lightbulb icon"/>
            <h3>Startup Business</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="our-products">
            <img src={img_chartIcon} alt="charts icon"/>
            <h3>Financial Advice</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="our-products">
            <img src={img_boxIcon} alt="box with cogwheel icon"/>
            <h3>Risk Management</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>

</section>
  )
}

export default FeaturesSection