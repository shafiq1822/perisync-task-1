import React, { useRef } from 'react'
import { RiFacebookCircleLine } from "react-icons/ri"
import { AiFillGoogleCircle } from "react-icons/ai"
// import { Navigate } from "react-router-dom"
import axios from "axios"
import "./loginPage.css"
import "../../App.css"
import HomePage from '../Homepage/HomePage'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const LoginPage = (props) => {
    const { setInfo, info } = props;
    const email = useRef();
    const password = useRef();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            username: "pharmaadmin@perisync.com",
            password: "Pass@1234"
        }
        if (email.current.value === "pharmaadmin@perisync.com" && password.current.value === "Pass@1234") {
            localStorage.setItem("email", "pharmaadmin@perisync.com");
            localStorage.setItem("password", "Pass@1234");
            const url = "https://api-mq.dev2prod.tech/v1/pharma/login";
            axios.post(url, data).then((res) => {
                console.log("result", res)
                setInfo(res)
                localStorage.setItem("Name", res.data.data.fullName)
                localStorage.setItem("dp", res.data.data.dp)
                localStorage.setItem("role", res.data.data.role)
                if (res.status === 200) {
                    history.push("/home")
                    alert("successfully logged in");
                }
            })
            // <Navigate to="/HomePage"/>
        } else {
            alert("Incorrect credentials")
        }

    }

    return (
        <div className='body-main-container'>
            <div className="form-wrapper">
                <section className='left-form'>
                    <h1>Welcome to <span>Pencil</span></h1>
                    <p>Please enter your information</p> <br />

                    <form action="" onSubmit={handleSubmit}>
                        <label htmlFor="">Enter your email</label> <br />
                        <input type="text" placeholder='email' ref={email} />
                        <br />
                        <label htmlFor="">Enter your password</label>
                        <br />
                        <input type="password" placeholder='password' ref={password} />
                        <p className='forgot-pass'>Forgot password? </p>
                        <div className="form-buttons">
                            <button className='form-login-button' type='submit'>Login</button>
                            <button className='form-signup-button'>Signup</button>
                        </div>
                    </form>

                    <p className='signin-with'>Signin with</p>
                    <div className='social-logo-container'>
                        <span className='g-logo-container'>
                            <RiFacebookCircleLine className='social-logo' />
                        </span>
                        <span className='f-logo-container'>
                            <AiFillGoogleCircle className='social-logo' />
                        </span>
                    </div>
                </section>
                <section className='img-section'>
                    <img src="https://img.freepik.com/free-photo/african-american-guy-sitting-table-cafe-working-laptop-wears-yellow-shirt-drinks-aromatic-coffee-chatting-with-his-girlfriend-enjoys-day_295783-1881.jpg?w=2000" alt="" />
                </section>
            </div>
        </div>
    )
}

export default LoginPage;