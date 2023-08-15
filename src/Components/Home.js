import React from 'react'
import handwave from '../Images/handwave.png'
const Home = () => {
    return (
        <section className='home' id='home'>
            <div className='container py-5'>
                <div className='home-content'>
                    <div className='col-md-6 left'>
                        <div className="title">
                            <h2 className="fw-bold lh-1 mb-3" style={{fontSize:'4rem'}}>Full-Stack Web Developer
                                <span><img src={handwave} alt='hi'/></span></h2>
                        </div>
                        <div className='title-about'>
                            <h5 style={{paddingTop:'2rem',paddingBottom:'2rem',lineHeight:'2', textAlign:"justify"}}>
                                Hi, I'm Manivannan SK. A passionate Full Stack Web<br/>
                                Developer based in Bangalore, Karnataka. 📍</h5>
                        </div>
                        <div>
                            <ul className="socialIcons">
                                <li>
                                    <i className="bi bi-github" style={{ fontSize: '2rem' }}></i>
                                </li>
                                <li>
                                    <i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i>
                                </li>
                            </ul>
                        </div>
                        <div className='home-button'>
                        <button className='btn btn-light btn-lg' type='button'>Resume <i className="bi bi-download"></i></button>
                        </div>
                    </div>
                    <div className='col-md-6 right'>
                        <div className='home-img'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Home