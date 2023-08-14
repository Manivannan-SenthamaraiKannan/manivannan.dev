import React from 'react'
import html from '../Images/html.png'
import css from '../Images/css.png'
import javascript from '../Images/javascript.png'
import react from '../Images/react.png'
import tailwind from '../Images/tailwind.png'
import nuxt from '../Images/nuxt.png'
import mongodb from '../Images/mongodb.png'
import expressjs from '../Images/expressjs.png'

const Skills = () => {
  return (
    <section className="section" id="section">
      <div className="container">
        <h3 style={{ color: "#147efb", fontSize: '1.7rem', textAlign: 'center', textTransform: 'uppercase' }}>Skills</h3>
        <div style={{ paddingTop: '3rem', paddingBottom: '3rem' }}>
          <ul className='d-flex justify-content-evenly align-items-center' style={{ listStyle: 'none', flexWrap: 'wrap' }}>
            <li><img src={html} title="HTML5" alt="skill-icon" /></li>
            <li><img src={css} title="CSS3" alt="skill-icon" /></li>
            <li><img src={javascript} title="Java Script" alt="skill-icon" /></li>
            <li><img src={react} title="React" alt="skill-icon" /></li>
            <li><img src={nuxt} title="SCSS" alt="skill-icon" /></li>
            <li><img src={tailwind} title="Tailwind CSS" alt="skill-icon" /></li>
            <li><img src={mongodb} title="SCSS" alt="skill-icon" /></li>
            <li><img src={expressjs} title="SCSS" alt="skill-icon" /></li>
          </ul>
        </div >
      </div>
    </section >
  )
}

export default Skills