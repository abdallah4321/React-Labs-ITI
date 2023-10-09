import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparnet navbar-dark mt-3 ms-4">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-around align-items-center" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to={"home"}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4" to={"about"}>About party</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4" to={"artist"}>Artist</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4" to={"gallery"}>Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4" to={"testimonial"}>Testimonial</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-4" to={"contact"}>Contact</Link>
              </li>
            </ul>
            <button className="btn border rounded-pill px-3 py-2" style={{ background: '#f7ea66' }}>Get a Ticket</button>
          </div>
        </div>
      </nav>

    </>
  );
}

export default Navbar;
