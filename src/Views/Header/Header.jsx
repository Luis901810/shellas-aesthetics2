import { Link } from "react-router-dom";

import styles from "./Header.module.css"

const Header = () =>{

    return(
        <div className={styles.container}>
            <Link to="/">
                <img src="../../assets/shellas.jpeg" alt="logoHear" />
            </Link>
        
        </div>
        
    )
}

export default Header;