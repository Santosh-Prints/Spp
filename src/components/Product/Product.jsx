import React from "react";
import { Cards } from "../data/Data";
import "./Product.css"; // Import the CSS file for styling

const Product = () => {
  const whatsappNumber = "+917042531365"; // The WhatsApp number
  
  // Function to handle WhatsApp navigation
  const handleWhatsApp = (id, name) => {
    const message = `Want to know more about ${name} with id: ${id}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <>
      <div className="content grid3 mtop">
        {Cards.map((val, index) => {
          const { id, cover, name, type } = val;
          return (
            <div className="box shadow" key={index}>
              <div className="img">
                <img src={cover} alt={name} />
              </div>
              <div className="text">
                <div className="category flex">
                  <i className="fa fa-heart"></i>
                </div>
                <h4>{name}</h4>
              </div>
              <div className="button flex">
                <span>{type}</span>
              </div>
              <button className="contact-btn" onClick={() => handleWhatsApp(id, name)}>
                Contact on WhatsApp
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Product;
