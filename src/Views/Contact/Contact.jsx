import { Link } from "react-router-dom";
import contact from "../../assets/contact.jpg"
import styles from "./Contact.module.css"
import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';

const Contact = () =>{

    const scrollRevealOption={
        distance: "50px",
        origin: "bottom",
        duration: 1000,

    };

    useEffect(() => {
        ScrollReveal().reveal(`.${styles.subtitle}`,{
            ...scrollRevealOption,
        delay: 500
        });
       
        ScrollReveal().reveal(`.${styles.title}`, {
            ...scrollRevealOption,
            delay: 1000,
        });
        ScrollReveal().reveal(`.${styles.link}`, {
            ...scrollRevealOption,
            delay: 1500,
        });
        ScrollReveal().reveal(`.${styles.img}`, {
            ...scrollRevealOption,
            origin: "left",
        });
      
    
    }, []);

    return(
        <div className={styles.container}>
            <div className={styles.img}>
                <img  src={contact} className={styles.img} alt="conctact"/>
            </div>
                <div className={styles.contect}>
                    <h2 className={styles.title}>Contact Us</h2>
                    <ul className={styles.link}>
                    <li>
                        <Link to="#" className={styles.lista}> 
                        <i className={`bi bi-envelope-arrow-up me-2 ${styles.email}`}></i>shellasaesthetics@gmail.com 
                        </Link>
                    </li>

                    <li>
                        <Link to="#" className={styles.lista}> 
                        <i className={`bi bi-telephone me-2  ${styles.cel}`}></i>+1 774-415-0836
                        </Link>
                    </li>

                    </ul>


                </div>

            
            
        </div>
    )
}

export default Contact;