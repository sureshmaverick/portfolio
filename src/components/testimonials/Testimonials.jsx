import React from 'react'
import './testimonials.css'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import Avt1 from '../../assests/school.jpg'
import Avt2 from '../../assests/college.png'
// import Avt3 from '../../assests/mynewimage.png'
// import Avt4 from '../../assests/mynewimage.png'

const data=[
  {
    avatar:Avt1,
    name:'Intermediate',
    review:'Intermediate from Rashtriya Military School, CBSE, Bangalore, Karnataka with 9.2 (CGPA) Apr’ 13',
    },
    {
      avatar:Avt1,
      name:'High School',
      review:'High School, Science from Rashtriya Military School, CBSE, Bangalore, Karnataka with 72% marks; Apr’ 15',
      },
  {
        avatar:Avt2,
        name:'College',
        review:'Bachelor of Engineering/Bachelor of Technology, Computer Science from Chandigarh University, Mohali, Punjab with 76.5 % marks, May’ 20',
    },
 

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      {/* <h5>Review from Client</h5> */}
      <h2>Education</h2>
      <Swiper className='container testimonials_container'
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar,name,review}, index)=>{
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
              <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='clent_review'>{review}</small>
    
            </SwiperSlide>
    
            )

          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
