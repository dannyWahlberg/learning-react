import React from 'react'


import img_articleImageOne from '../assets/images/article-image-1.png'
import img_articleImageTwo from '../assets/images/article-image-2.png'
import img_articleImageThree from '../assets/images/article-image-3.png'
import img_articleImageFour from '../assets/images/article-image-4.png'

function ProjectAndCaseSection() {
  return (
    <section className="project-and-case">
    <div className="container">
        <div className="section-title">
            <p>Project & Case Studies</p>
            <h2>Let’s Looks Our Global Projects</h2>
        </div>
        <div className="project-and-cases">

            <a className="project" href="#">
                <img src={img_articleImageOne} alt="Mans hands reading a buisness paper" />
                <h3>Grow your buisness</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={img_articleImageTwo} alt="Tablet with a watch, pen and glasses on" />
                <h3>Why your client needs a responsive website</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={img_articleImageThree} alt="Coffecup a notepa and the edge of a laptop" />
                <h3>Educate your employees to get better results</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
            <a className="project" href="#">
                <img src={img_articleImageFour} alt="Open laptop with a chart on the screen" />
                <h3>Business Insights is a important piece of your business</h3>
                <div className="readmore">Read More <i className="fa-regular fa-arrow-up-right"></i></div>
            </a>
        </div>
        <div className="center-content projects-btn">
            <a className="btn-black" href="consulting.html">All Recent Projects<i
                    className="fa-regular fa-arrow-up-right"></i></a>
        </div>
    </div>
</section>  )
}

export default ProjectAndCaseSection