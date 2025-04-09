import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-item">
        <h3>Phone</h3>
        <p>+10 578 60 90</p>
      </div>
      <div className="contact-item">
        <h3>Email</h3>
        <p>hasanovs@fastmaster.com</p>
      </div>
      <div className="contact-item">
        <h3>Location</h3>
        <p>St. Petersburg<br />Marbella</p>
      </div>
    </div>
  )
}

export default Contact
