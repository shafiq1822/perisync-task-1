import React from 'react'
import { CgFacebook } from "react-icons/cg"
import { FaTwitter } from "react-icons/fa"
import { TfiLinkedin } from "react-icons/tfi"
import { BsYoutube } from "react-icons/bs"
import { BsInstagram } from "react-icons/bs"
import "./footer.css"


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className="left-footer">
                <h1>PENCIL</h1>
                <div className="footer-socials">
                    <p>Follow Us:</p>
                    <div className='footer-socials-container'>
                        <span className="footer-socials-box">
                            <CgFacebook className='footer-icons'/>
                        </span>
                        <span className="footer-socials-box">
                            <FaTwitter className='footer-icons'/>
                        </span>
                        <span className="footer-socials-box">
                            <TfiLinkedin className='footer-icons'/>
                        </span>
                        <span className="footer-socials-box">
                            <BsYoutube className='footer-icons'/>
                        </span>
                        <span className="footer-socials-box">
                            <BsInstagram className='footer-icons'/>
                        </span>
                    </div>
                </div>
            </div>
            <div className="right-footer">
                <table className="footerTable">
                    <tbody>
                        <tr>
                            <td>Careers</td>
                            <td>About Us</td>
                            <td>Tech On Pencil</td>
                        </tr>
                        <tr>
                            <td>Blog</td>
                            <td>Contact us</td>
                            <td>Help and Support</td>
                        </tr>
                        <tr>
                            <td>Investors</td>
                            <td>Terms</td>
                            <td>Privacy policy</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Footer