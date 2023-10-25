import React from 'react'

import img_dorfus from '../assets/images/dorfus-image.svg'
import img_papers from '../assets/images/paperz-image.svg'
import img_martino from '../assets/images/martino-image.svg'
import img_square from '../assets/images/square-image.svg'
import img_gobona from '../assets/images/gobona-image.svg'

function PartnerSection() {
  return (
    <section className="partners">
    <div className="container ">
        <img src={img_dorfus} alt="dorfus company logo"/>
        <img src={img_papers} alt="paperz company logo"/>
        <img src={img_martino} alt="martino company logo"/>
        <img src={img_square} alt="square company logo"/>
        <img src={img_gobona} alt="gobona company logo"/>
    </div>
</section>
  )
}

export default PartnerSection