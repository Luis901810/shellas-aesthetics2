
import styles from "./Register.module.css";

const Register = ({toggleFormVisibility}) =>{

    return(
        <div className={`${styles.information} register`}>
                <div className={styles.infor}>
                <div className={styles.childs}>
                <h2> Welcome</h2>
                    <p>To join shellas Aesthetics we invite you to log in with your data</p>
                    <input type="button" value="Login" onClick={toggleFormVisibility} id="sign-in"/>
                </div>
            </div>

            <div className={styles.formInf}>
                <div className={styles.formChilds}>
                    <h2>Create Account</h2>
                        <div className={styles.icon}>
                            <i className='bx bxl-google'></i>
                            <i className='bx bxl-facebook-circle'></i>
                        </div>
                    <p>Or use an Email to Register</p>

                    <form className={styles.form}>
                        <label>
                            <input type="text" placeholder="name" />
                        </label>
                        <label>
                            <input type="text" placeholder="last name"/>
                        </label>
                        <label>
                            <i className='bx bx-user'></i>
                            <input type="text" placeholder="Email" />
                        </label>
                        <label>
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" placeholder="************"/>
                        </label>
                        
                        <input className={styles.boton} type="submit" value="Register" />
                    </form>
                </div>
            </div>

        </div>
    )

    
}

export default Register;