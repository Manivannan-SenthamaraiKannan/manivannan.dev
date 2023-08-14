import React from 'react'
// import '../Styles/About.css'
import aboutImg from '../Images/aboutImg.png'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                        <img src={aboutImg} style={{ borderRadius: '1.7rem' }} className="d-block mx-lg-auto img-fluid" alt="mee" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                        <h3 style={{ color: "#147efb", fontSize: '1.7rem' }}>About me</h3>
                        <h4 className="fw-bold lh-1 mb-3" style={{ textTransform: 'uppercase', textAlign: 'justify' }}>A dedicated Full Stack Developer <br /> based in Bangalore, Karnataka 📍</h4>
                        <p className="lead" style={{ textAlign: 'justify' }}>As a Full Stack Developer, I possess an impressive arsenal of skills in HTML,
                            CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining
                            responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic,
                            engaging interfaces through writing clean and optimized code and utilizing cutting-edge
                            development tools and techniques. I am also a team player who thrives in collaborating with
                            cross-functional teams to produce outstanding web applications.
                        </p>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default About

