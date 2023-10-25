import React from 'react'

import img_thumbsUp from '../assets/images/thumbs-up.svg'
import img_diamond from '../assets/images/diamond.svg'
import img_scale from '../assets/images/scale.svg'
import img_cogwheel from '../assets/images/cogwheel-brain.svg'
import img_womanWithTablet from '../assets/images/women-with-tablet.png'

function WhyChooseUsSection() {
  return (
    <section className="why-choose-us">

    <div className="grey-box"></div>

    <div className="container">

        <div className="text-content">

            <div className="section-title">

                <p> Why Choose Us </p>
                <h2> Why We Are The Best Business Consulting Agency </h2>
            </div>

            <a href="#">
                <div className="examples">

                    <img src={img_thumbsUp} alt="thumbs up image" />
                    <div>
                        <h3>Process Excellence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="examples">
                    <img src={img_diamond} alt="diamond image" />
                    <div>
                        <h3>Strategic Planning</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="examples">
                    <img src={img_scale} alt="image scale" />
                    <div>
                        <h3>Experience Design</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>
            <a href="#">
                <div className="examples">
                    <img src={img_cogwheel} alt="a head with a cogwheel in the center" />
                    <div>
                        <h3>Artificial Inteligence</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                </div>
            </a>



        </div>
        <div className="image-content">

            <img src={img_womanWithTablet} alt="Two women with a tablet" />

        </div>




    </div>

</section>
  )
}

export default WhyChooseUsSection