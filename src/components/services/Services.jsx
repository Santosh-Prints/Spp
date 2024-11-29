import React from "react"
import Back from "../common/Back"
import "../home/featured/Featured.css"
import Product from "../Product/Product"
const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Cards' title='What We Offer' cover={"https://plus.unsplash.com/premium_photo-1698117059857-afdb96271acc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y292ZXIlMjBwaG90byUyMGNhcmRzfGVufDB8fDB8fHww"} />
        
      </section>
      <div >
          <Product />
        </div>
    </>
  )
}

export default Services
