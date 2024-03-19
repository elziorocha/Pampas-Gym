import React from "react";
import Github from '../../assets/github.png'
import LinkedIn from '../../assets/linkedin.png'
import Instagram from '../../assets/instagram.png'
import Logo from '../../assets/logo.png'
import './Footer.css';

const Footer = () => {
    return(
        <div className="Footer-container">
            <hr/>
            <div className="footer">
                <div className="social-links">
                    <img src={Github} alt="Github icon"/>
                    <img src={Instagram} alt="Instagram icon"/>
                    <img src={LinkedIn} alt="LinkedIn icon"/>
                </div>
                <div className="logo-f">
                    <img src={Logo} alt="Logo Icon"/>
                </div>
            </div>
        </div>
    )
}

export default Footer