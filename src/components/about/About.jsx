import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={"https://plus.unsplash.com/premium_photo-1674986941202-8b2f8d204cd3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFycmlhZ2UlMjBjYXJkc3xlbnwwfHwwfHx8MA%3D%3D"} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Santosh Print and Pack' subtitle='Check out about us' />

            <p>At Santosh Print & Pack, we specialize in creating beautifully designed,custom laser-cut wedding cards, birthday cards, and a wide range of event invitations. With a keen eye for detail, we provide everything from fancy traa sweet boxes to stylish gift boxes, <br />all designed to make your special occasion even more memorable.</p>
            <h3>Our services include:</h3>
              <ol>
                <li>Elegant wedding cards, including unique laser-cut designs</li>
                <li>Birthday and kitty party invitations</li>
                <li>Custom mundan and greh parvesh cards</li>
                <li>Fancy sweet boxes for weddings and parties</li>
                <li>Stylish gift boxes and laser-cut stickers</li>
              </ol>


          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt=''/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
