import React from 'react'
import CV from '../../assests/Resume_Suresh_Kumar.pdf'
const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Lets's talk</a>
    </div>
  )
}

export default CTA