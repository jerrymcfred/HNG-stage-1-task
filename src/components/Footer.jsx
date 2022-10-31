import React from 'react'
import zuri from "../assets/images/zuri_logo.png";
import i4g from "../assets/images/I4G.png";

import "../styles/Footer.css"

const Footer = () => {
  return (
    <div className='footer' >
        <div className="footer_content">
            <img src={zuri} alt="zuri_logo" />
            <p>HNG Internship 9 Frontend Task</p>
            <img src={i4g} alt="i4G" />
        </div>
    </div>
  )
}

export default Footer