import { useState } from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import styles from "./UserData.module.css";


const UserData = () =>{

    const [ isLoginForm, setIsLoginForm ] = useState(true)

    const toggleFormVisibility = () =>{
        setIsLoginForm(!isLoginForm)
    };

    return(
        <div className={styles.container}>
            {
                isLoginForm ?(
                    <Login toggleFormVisibility = {toggleFormVisibility} />
                ):(
                    <Register toggleFormVisibility = {toggleFormVisibility} />
                )
                    
                    
                
            }

        </div>
    )
}

export default UserData;