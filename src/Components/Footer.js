import React from 'react'
import { LiaReact } from 'react-icons/lia'

const Footer = () => {
  return (
    <div className="container">
      <footer className="py-3 my-4">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><a href="https://github.com/Manivannan-SenthamaraiKannan" className="nav-link px-2 text-muted"><i className="bi bi-github" style={{ fontSize: '2rem' }}></i></a></li>
          <li className="nav-item"><a href="https://in.linkedin.com/" className="nav-link px-2 text-muted"><i className="bi bi-linkedin" style={{ fontSize: '2rem' }}></i></a></li>
          <li className="nav-item"><a href="https://www.behance.net/" className="nav-link px-2 text-muted"><i className="bi bi-behance" style={{ fontSize: '2rem' }}></i></a></li>
          <li className="nav-item"><a href="https://stackoverflow.com/" className="nav-link px-2 text-muted"><i className="bi bi-stack-overflow" style={{ fontSize: '2rem' }}></i></a></li>
          <li className="nav-item"><a href="https://medium.com/" className="nav-link px-2 text-muted"><i className="bi bi-medium" style={{ fontSize: '2rem' }}></i></a></li>
        </ul>
        <p className="text-center text-muted">Copyright © 2023. Made with <LiaReact /></p>
      </footer>
    </div>
  )
}

export default Footer