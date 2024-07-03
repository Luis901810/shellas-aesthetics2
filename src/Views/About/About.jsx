import { useEffect } from "react";
import ScrollReveal from 'scrollreveal';
import cliente from "../../assets/cliente.png";
import styles from "./About.module.css";

const About = () =>{

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
        ScrollReveal().reveal(`.${styles.description}`, {
            ...scrollRevealOption,
            delay: 1500,
        });
        ScrollReveal().reveal(`.${styles.img}`, {
            ...scrollRevealOption,
            origin: "left",
        });
        ScrollReveal().reveal(`.${styles.btn}`, {
            ...scrollRevealOption,
            delay: 2000,
        });
    
    }, []);

   
    

    return(
        <div className={styles.container}>
            <div className={styles.img} >
                <img src={cliente} className={styles.img} alt="about" />
            </div>
            <div className={styles.content}>
            <p className={styles.subtitle}> About Us</p>
            <h2 className={styles.title}>Shellas is a Licensed Aesthetician with a background in Psychology, Sociology</h2>
            
           
            
            <p className={styles.description}>
                General Health & Wellness, Hollistic Wellness. Personal Training, Reflexology, Accupressure, and Gua Sha. 
                Accredited with many credentials, certifications and license to help others achieve their body, and skincare goals. 
                Specializing In Skin, and Body Treatments. 
                Shellas has become known not only as a skin guru but as a healer for her healing abilities & de stressing and helping others by healing their skin, and bodies through Luxurorious Body Wraps and High End Facial Treatments, helping others achieve their Body Goals and Weight, & healing clients inner well- being with her Hollistic Services.
            </p>
            <div className={styles.btn}>
                <button className={styles.btn}>Read More</button>
            </div>
            </div>
        </div>
    )

}

export default About;