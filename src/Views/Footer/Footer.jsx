import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";
import logo from "../../assets/shellas.jpeg"
import styles from "./Footer.module.css";


const Footer = () =>{

return(
  <div className={ styles.footer } >
    <div className={styles.container}>
      <div className={styles.col}>
        <div>
          <Link to= "/" ><img src={logo} className={styles.logo} alt='logo' /></Link>
        </div>
        <p className={styles.description}>
        Shellas Aesthetics specialists in skin care
        </p>
        <button className={styles.btn}>Book Now</button>
      </div>
      <div className={styles.col}>
        <h4 className={styles.title}>Quick Link</h4>
        <ul className={styles.link}>
          <li><Link to="/" className={styles.lista}> Home </Link></li>
          <li><Link to="/about" className={styles.lista}> About </Link></li>
          <li><Link to="/service" className={styles.lista}> Service </Link></li>
          <li><Link to="/contact" className={styles.lista}> Contact </Link></li>
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.title}>Our Service</h4>
        <ul className={styles.link}>
          <li><Link to="/" className={styles.lista}> Home </Link></li>
          <li><Link to="/about" className={styles.lista}> About </Link></li>
          <li><Link to="/service" className={styles.lista}> Service </Link></li>
          <li><Link to="/contact" className={styles.lista}> Contact </Link></li>
        </ul>
      </div>

      <div className={styles.col}>
        <h4 className={styles.title}>Contact Us</h4>
        <ul className={styles.link}>
          <li><Link to="#" className={styles.lista}>
          <i className="bi bi-envelope-arrow-up me-2"></i>shellasaesthetics@gmail.com 
          </Link></li>
          <li><Link to="#" className={styles.lista}> 
          <i className="bi bi-telephone me-2"></i>+1 774-415-0836
          </Link></li>
        </ul>

        <div className={styles.social}>
          <Link to="https://www.facebook.com/shellasaesthetics/">
            <i className={`bi bi-facebook ${styles.icon} ${styles.fb}`}></i>
          </Link>
          <Link to="https://www.tiktok.com/@shellasaesthetics">
            <i className={`bi bi-tiktok ${styles.icon} ${styles.tiktok}`}></i>
          </Link>
          <Link to="https://www.instagram.com/shellasaesthetics/">
            <i className={`bi bi-instagram ${styles.icon} ${styles.insta}`}></i>
          </Link>
        </div>
      </div>

    </div>
    <div className={styles.bar}>
    copyright 2024 Company, Inc. All rights reserved.
    </div>
   
  </div>
)
}

export default Footer;





// return(
// <div className="container">
//   <footer className="py-5">
//     <div className="row">
//       <div className="col-6 col-md-2 mb-3">
//         <h5>Section</h5>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//               <Link to="/" className="nav-link p-0 text-body-secondary me-2">Home</Link>
//           </li>
//           <li className="nav-item mb-2">
//               <Link to="/catalogue" className="nav-link p-0 text-body-secondary">Catalogue</Link>
//           </li>
          
//         </ul>
//       </div>

//       <div className="col-6 col-md-5 mb-3">
//         <h5>Contact us</h5>
//         <ul className="nav flex-column">
//           <li className="nav-item mb-2">
//               <Link  to="#" className="nav-link p-0 text-body-secondary">
//               <i className="bi bi-telephone me-2"></i>+1 774-415-0836</Link>
//           </li>
//           <li className="nav-item mb-2">
//               <Link  to="#" className="nav-link p-0 text-body-secondary">
//               <i className="bi bi-envelope-arrow-up me-2"></i>shellasaesthetics@gmail.com</Link>
//             </li>
          
//         </ul>
//       </div>

    

//       <div className="col-md-4 offset-md-1 mb-3">
//         <form>
//           <h5>Subscribe to our newsletter</h5>
//           <p>Monthly digest of what's new and exciting from us.</p>
//           <div className="d-flex flex-column flex-sm-row w-100 gap-2">
//             <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
//             <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
//             <button className="btn btn-primary" type="button">Subscribe</button>
//           </div>
//         </form>
//       </div>
//     </div>

//     <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
//       <p>&copy; 2024 Company, Inc. All rights reserved.</p>
//       <ul className="nav d-flex">
//       <li className="nav-item ms-3">
//         <Link  to="https://www.instagram.com/shellasaesthetics/" className="nav-link link-body-emphasis">
//         <i className="bi bi-instagram"></i></Link>
//       </li>
//       <li className="nav-item ms-3">
//         <Link  to="https://www.tiktok.com/@shellasaesthetics"  className="nav-link link-body-emphasis">
//         <i className="bi bi-tiktok"></i></Link >
//       </li>
//       <li className="nav-item ms-3">
//         <Link  to="https://www.facebook.com/shellasaesthetics/" className="nav-link link-body-emphasis">
//         <i className="bi bi-facebook"></i></Link >
//       </li>
//       </ul>
//     </div>
//   </footer>
// </div>


//     )