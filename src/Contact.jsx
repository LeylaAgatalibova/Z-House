import React from 'react'
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="contact-item">
        <h3>Phone</h3>
        <p>+10 939 444-99-86</p>
      </div>
      <div className="contact-item">
        <h3>Email</h3>
        <p>zairvs@fastmaster.com</p>
      </div>
      <div className="contact-item">
        <h3>Location</h3>
        <p>St. Petersburg<br />Marbella</p>
      </div>
    </div>
  )
}

export default Contact
