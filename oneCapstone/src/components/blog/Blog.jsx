import React from "react"
import Back from "../common/Back"
import { team } from "../data/Data"
import img from "../images/about.jpg"
import "../home/team/team.css"
const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Agents' title='Connect With Our Trusted Agents' cover={img} />
        <div className="team ">
        <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Message
                    </button>
                    <button className='btn4'>
                      Call
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
      </section>
    </>
  )
}

export default Blog