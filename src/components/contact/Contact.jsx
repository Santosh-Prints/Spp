import React from 'react';
import './contact.css';

function ContactUs() {
  const phoneNumber = '+917042531365'; 
  const phoneNumber1 = '+918802416754';  // Change to your phone number
  
  const email = 'santoshprintpack20@gmail.com';  // Change to your email
  const address = 'Shop No. 9 Kanti devi marke, Near nirala Green Shire, Greater Noida West';  // Change to your address
  const googleMapsLink = 'https://maps.app.goo.gl/R3M5ozzMUpYqBdDt9?g_st=iwb';  // Replace with your Google Maps link

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      
      <div className="contact-info">
        <div className="contact-item">
          <h3>Phone:</h3>
          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a> <br />
          <a href={`tel:${phoneNumber1}`}>{phoneNumber1}</a>
        </div>

        <div className="contact-item">
          <h3>Email:</h3>
          <a href={`mailto:${email}`}>{email}</a>
        </div>

        <div className="contact-item">
          <h3>WhatsApp:</h3>
          <a 
            href={`https://wa.me/${phoneNumber.replace(/[^\d]/g, '')}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="whatsapp-button"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-item">
          <h3>Address:</h3>
          <p>{address}</p>
          <a 
            href={googleMapsLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="google-maps-link"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
