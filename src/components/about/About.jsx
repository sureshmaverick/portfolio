import React from 'react'
import './about.css'
import ME from '../../assests/sureshPic.png'
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt=''/>
          </div>

        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2+ Years Working</small>

            </article>
            <article className="about_card">
              <FaUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>Worked with 10+ Clients Worldwide</small>

            </article>
            <article className="about_card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>

            </article>
          </div>
          <p>
           Working as a FullStack developer.Working on Tech like - Frontend--HTML, CSS, Bootstrap, Antd, ReactJs. Backend--NodeJs, MySql.
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About
