import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Story' subtitle='Check out our company story and work process' />

            <p>At NSTian Dalal, we simplify property hunting by offering a powerful search and comparison platform tailored to your unique needs. Whether you're buying, renting, or investing, our tools help you filter listings by location, budget, amenities, and more—making it easy to find the perfect property with confidence and speed.</p>
            <p>Our mission is to bring transparency and convenience to real estate decisions. With intuitive search features, side-by-side comparisons, and real-time data, we empower users to make smarter choices. Backed by expert insights and a user-first approach, [Your Company Name] is the modern way to explore, evaluate, and secure your next space.

</p>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About