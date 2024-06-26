import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"


const Footer = () =>{



    return(
<div className="container">
  <footer className="py-5">
    <div className="row">
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
              <Link to="/" className="nav-link p-0 text-body-secondary me-2">Home</Link>
          </li>
          <li className="nav-item mb-2">
              <Link to="/catalogue" className="nav-link p-0 text-body-secondary">Catalogue</Link>
          </li>
          
        </ul>
      </div>

      <div className="col-6 col-md-5 mb-3">
        <h5>Contact us</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
              <Link  to="#" className="nav-link p-0 text-body-secondary">
              <i className="bi bi-telephone me-2"></i>+1 774-415-0836</Link>
          </li>
          <li className="nav-item mb-2">
              <Link  to="#" className="nav-link p-0 text-body-secondary">
              <i className="bi bi-envelope-arrow-up me-2"></i>shellasaesthetics@gmail.com</Link>
            </li>
          
        </ul>
      </div>

    

      <div className="col-md-4 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
            <button className="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>&copy; 2024 Company, Inc. All rights reserved.</p>
      <ul className="nav d-flex">
      <li className="nav-item ms-3">
        <Link  to="https://www.instagram.com/shellasaesthetics/" className="nav-link link-body-emphasis">
        <i className="bi bi-instagram"></i></Link>
      </li>
      <li className="nav-item ms-3">
        <Link  to="https://www.tiktok.com/@shellasaesthetics"  className="nav-link link-body-emphasis">
        <i className="bi bi-tiktok"></i></Link >
      </li>
      <li className="nav-item ms-3">
        <Link  to="https://www.facebook.com/shellasaesthetics/" className="nav-link link-body-emphasis">
        <i className="bi bi-facebook"></i></Link >
      </li>
      </ul>
    </div>
  </footer>
</div>


    )
}

export default Footer;