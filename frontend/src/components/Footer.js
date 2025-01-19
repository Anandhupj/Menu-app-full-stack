import React from 'react'
import "./Footer.css";

const Footer = () => {
  return (
    <div  className="footer-container">
        <div className="footer-section contact">
            <h3>CONNECT WITH US</h3>
            <p> +91 9567843340</p>
            <p> info@deepnetsoft.com</p>
        </div>
        <div className="footer-section logo">
            <h2>DEEP NET SOFT</h2>
        </div>
        <div className="footer-section find-us">
            <h3>FIND US</h3>
            <p>First floor, Geo infopark</p>
            <p>infopark EXPY,Kakkanad</p>
        </div>
        <div className="footer-bottom">
        <hr />
        <p className="copyright">Copyright 2025 @Deepnetsoft Solutions.All rights reserved</p><p className="terms"> Terms&conditions | Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer