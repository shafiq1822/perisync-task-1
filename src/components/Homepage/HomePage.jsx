import React from 'react'
import Navbar from "../navbar/Navbar"
import "../Homepage/homepage.css"
import Footer from "../footer/Footer"
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const HomePage = (props) => {
    const { info, setInfo } = props;
    const history = useHistory();

    return (
        <div className='homepage-container'>
            <Navbar />
            <div className="homepage-body">
                <span className="homepage-box">
                    <p><b>Name:</b> {localStorage.getItem("Name")}</p>
                    <img src={localStorage.getItem("dp")} alt="" />
                    <p><b>User:</b> {localStorage.getItem("role")}</p>
                    <button onClick={() => { history.push("/"); localStorage.clear() }} className='login-button'>Log out</button >
                </span>
            </div>
            <Footer />
        </div>
    )
}

export default HomePage