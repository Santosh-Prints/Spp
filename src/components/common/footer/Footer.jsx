import React from "react"
import "./footer.css"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const Footer = () => {
  return (
    <>
      <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
            </div>
            <Link className='btn5' to="/contact" >Contact Us Today</Link>
          </div>
        </div>
      </section>

      <div className='legal'>
        <span>© 2024 Santosh Print & Pack. Designd By KunalKumar023.</span>
      </div>
    </>
  )
}

export default Footer
