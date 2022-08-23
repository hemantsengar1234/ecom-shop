import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container2'>
          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>Kanpur, U.P, India </li>
              <li>Email: hemantsengar1234@gmail.com</li>
              <li>Phone: +91 7007277169</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
