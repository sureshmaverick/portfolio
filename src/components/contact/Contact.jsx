import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import {useRef} from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form=useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_v9hsylc', 'template_5pnp7tj', form.current, '8GbmeSeN2hwD783tE')
      e.target.reset();
    };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          
          <article className="contact_option">
          <MdOutlineEmail className="contact_option-icon"/>
            <h4>Email</h4>
            <h5>dummy@gmail.com</h5>
            <a href="mailto:suresh418511@gmail.com" target="_blank">
              Send a message
            </a>
          </article>

          
          <article className="contact_option">
          <BsWhatsapp className="contact_option-icon"/>
            <h4>WhatsApp</h4>
            <h5>+123456789</h5>
            <a href='https://api.whatsapp.com/send?phone=+917023932333 target="_blank"'>
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
