import React from 'react'
import maps from '../Images/maps.png'
import email from '../Images/email.png'
import linkedin from '../Images/linkedin.png'
import github from '../Images/github.png'

const Contact = () => {
    return (
        <section className='contact' id='contact'>
            <div className='container'>
                <h3 style={{ color: "#147efb", fontSize: '1.7rem', textTransform: 'uppercase' }}>Contact</h3>
                <h4 style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>Don't be shy. Just hit me up👋</h4>
                <div className='contactSection'>
                    <div className='col-md-6'>
                        <div style={{ paddingTop: '1rem', paddingBottom: '1rem' }}>
                            <img src={maps} alt='map' />
                            <span style={{ fontSize: '1.3rem' }}> Bangalore, Karnataka.</span>
                        </div>
                        <br />
                        <div style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                            <img src={email} alt='email' />
                            <span style={{ fontSize: '1.3rem' }}> sharvamanivannan@gmail.com</span>
                        </div>
                        <div style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                            <img src={github} alt='email' />
                            <span style={{ fontSize: '1.3rem' }}> github.com/Manivannan-SenthamaraiKannan</span>
                        </div>
                        <div style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
                            <img src={linkedin} alt='email' />
                            <span style={{ fontSize: '1.3rem' }}> linkedin.com/in/manivannan-s-2382a3286/</span>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <form>
                            <div className="form-outline mb-4">
                                <input type="text" id="form4Example1" className="form-control" placeholder='Name' />
                            </div>
                            <div className="form-outline mb-4">
                                <input type="email" id="form4Example2" className="form-control" placeholder='Email' />
                            </div>
                            <div className="form-outline mb-4">
                                <textarea className="form-control" id="form4Example3" rows="4" placeholder='Write your message'></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact