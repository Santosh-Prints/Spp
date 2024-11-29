import React from "react"
import Heading from "../../common/Heading"
import "./recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
          <Heading title='New Arrivals' subtitle='We provides all trendy and up to date stuff. Customization is also available. You say We do.' />
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent
