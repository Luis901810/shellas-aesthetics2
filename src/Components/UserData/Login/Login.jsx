import styles from "./Login.module.css"

const Login = ({toggleFormVisibility}) =>{

    return(
        <div className={`${styles.information} login`}>
            <div className={styles.infor}>
                <div className={styles.childs}>
                    <h2>Welcome again</h2>
                    <p>If you don't have an account yet, please register here</p>
                    <input type="button" value="Register" onClick={toggleFormVisibility} id="sign-up" />
                </div>
            </div>

            <div className={styles.formInf}>
                <div className={styles.formChilds}>
                    <h2>Login</h2>
                    <div className={styles.icon}>
                        <i className='bx bxl-google'></i>
                        <i className='bx bxl-facebook-circle'></i>
                    </div>

                    <p>Or sign in with an account</p>
                    <form className={styles.form}>
                    <label>
                            <i className='bx bx-envelope'></i>
                            <input type="email" placeholder="Email" />
                        </label>
                        <label htmlFor="">
                            <i className='bx bx-lock-alt'></i>
                            <input type="password" placeholder="***********" />
                        </label>
                        <input className={styles.boton} type="submit" value="Login" />
                    </form>
                </div>
            </div>

        </div>
    )

}

export default Login;