import React from 'react'

import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand navs-highlight" data-aos="fade-right">quicklinks</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link navs-highlight active" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/filter">Filter</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/workers">Workers</NavLink>
              </li>

            </ul>
            <div className="d-flex align-items-center" data-aos="fade-left">
              <NavLink to="/register" > <button className="btn btn-primary mx-2 rounded-start">SingUp</button></NavLink>
              <NavLink to="/login" > <button className="btn btn-primary mx-2 rounded-start">Login</button></NavLink>
            </div>

          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar