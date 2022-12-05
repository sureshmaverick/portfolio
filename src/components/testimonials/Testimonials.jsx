import React from 'react'
import './testimonials.css'
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import Avt1 from '../../assests/mynewimage.png'
import Avt2 from '../../assests/mynewimage.png'
import Avt3 from '../../assests/mynewimage.png'
import Avt4 from '../../assests/mynewimage.png'

const data=[
  {
    avatar:Avt1,
    name:'Sunita',
    review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis repellat ducimus eius asperiores veritatis! Inventore iusto ex aspernatur fuga nisi fugiat veritatis corporis aut cupiditateprovident consectetur molestiae illo, eos adipisci. Doloremque perspiciatis dolores a saepe nulla animi maiores tempore aspernatur quisquam, minima nesciunt ex sapiente illum corporis laborum. Ullam',
    },
    {
      avatar:Avt2,
      name:'Suresh',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis repellat ducimus eius asperiores veritatis! Inventore iusto ex aspernatur fuga nisi fugiat veritatis corporis aut cupiditateprovident consectetur molestiae illo, eos adipisci. Doloremque perspiciatis dolores a saepe nulla animi maiores tempore aspernatur quisquam, minima nesciunt ex sapiente illum corporis laborum. Ullam',
      },
  {
        avatar:Avt3,
        name:'Anita',
        review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis repellat ducimus eius asperiores veritatis! Inventore iusto ex aspernatur fuga nisi fugiat veritatis corporis aut cupiditateprovident consectetur molestiae illo, eos adipisci. Doloremque perspiciatis dolores a saepe nulla animi maiores tempore aspernatur quisquam, minima nesciunt ex sapiente illum corporis laborum. Ullam',
    },
  {
          avatar:Avt4,
          name:'Sunil',
          review:'Lorem ipsum dolor sit amet consectetur adipisicing elit Blanditiis repellat ducimus eius asperiores veritatis! Inventore iusto ex aspernatur fuga nisi fugiat veritatis corporis aut cupiditateprovident consectetur molestiae illo, eos adipisci. Doloremque perspiciatis dolores a saepe nulla animi maiores tempore aspernatur quisquam, minima nesciunt ex sapiente illum corporis laborum. Ullam',
    },

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Client</h5>
      <h2>Testimonials</h2>
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
