import React from 'react'
import pizzeria from '../Images/pizzeria.png'
import dietSuggestion from '../Images/dietSuggestion.png'

const Portfolio = () => {

  return (
    <section className='portfolio' id='portfolio'>
      <div className='container py-3'>
        <h3 style={{ color: "#147efb", fontSize: '1.8rem', textTransform: 'uppercase' }}>Porfolio</h3>
        <h4 className="fw-bold lh-1 mb-3" style={{ paddingTop: '1.5rem', textAlign: 'left' }}>Each project is a unique piece of development 🧩</h4>
        {/*Pizzeria Application*/}
        <div className="container px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={pizzeria} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Pizzeria</h1>
              <p className="lead" style={{ textAlign: 'justify', paddingBottom:'2rem' }}>Indulge in the ultimate pizza experience with our user-friendly pizzeria pizza delivery app. Browse a delectable menu, customize toppings, track orders in real-time, and savor piping hot, freshly baked pizzas delivered right to your doorstep</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-outline-secondary btn-lg px-4"
                onClick={()=>window.open('https://github.com/Manivannan-SenthamaraiKannan/pizzeria-frontend')}>Code</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4"
                onClick={()=>window.open('https://pizzeria-pizza.netlify.app/')}>Live demo</button>
              </div>
            </div>
          </div>
        </div>
      {/*Diet Suggestion*/}
        <div className="container px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-lg-6">
              <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Diet-Hack</h1>
              <p className="lead" style={{ textAlign: 'justify', paddingBottom:'2rem' }}>The Diet-suggestion application is a user-friendly tool designed to assist individuals in making healthier food choices. It offers personalized meal plans, nutritional recommendations, and tracks users' progress. With its intuitive interface and tailored suggestions, it empowers users to achieve their dietary goals and lead a balanced lifestyle.</p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button type="button" className="btn btn-outline-secondary btn-lg px-4"
                        onClick={()=>window.open('https://github.com/Manivannan-SenthamaraiKannan/diet_suggestion-frontend')}>Code</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4"
                        onClick={()=>window.open('https://diet-suggestionapp.netlify.app/')}>Live demo</button>
              </div>
            </div>
            <div className="col-10 col-sm-8 col-lg-6">
              <img src={dietSuggestion} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
            </div>
          </div>
        </div>

      </div>
    </section >
  )
}

export default Portfolio