import About from"../About/About";
import Contact from "../Contact/Contact";
import styles from "./Landing.module.css";
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";


const Landing = () =>{

    const scrollRevealOption={
        distance: "50px",
        origin: "bottom",
        duration: 1000,

    };
    useEffect(() => {
        ScrollReveal().reveal(`.${styles.title}`,{
            ...scrollRevealOption,
        delay: 500
        });
       
        ScrollReveal().reveal(`.${styles.subtitle}`, {
            ...scrollRevealOption,
            delay: 1000,
        });
        ScrollReveal().reveal(`.${styles.description}`, {
            ...scrollRevealOption,
            delay: 1500,
        });
       
       
    
    }, []);

    return(
        <div className={styles.container} >
            
           
            <h2 className={styles.title}> Shellas Aesthetics!</h2>
            <h4 className={styles.subtitle}>Welcome to Shellas Aesthetics</h4>
               <p className={styles.description}> Skin care is more than a passion, its also a lifestyle. 
               Striving to help people achieve their skin goals. Different Facial treatments available to achieve your personal skin goals. 
               Love the skin your in.</p>
             <About />
             <Contact />

        
        
        </div>
    )
}

export default Landing;