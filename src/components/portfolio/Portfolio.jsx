import React from "react";
import "./portfolio.css";
import IMG1 from "../../assests/training.png";
import IMG2 from "../../assests/myportfolio.png";
import IMG3 from "../../assests/XPlay.png";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Tech Trainings in Tech Companies",
    github: "https://github.com",
    //demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Create Portfolio for Software developer",
    github: "https://github.com",
    //demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 3,
    image: IMG3,
    title: "XPlay- Interactive Online Video Player",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
 
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github}) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a 
                href={github} 
                className="btn">
                  GitHub
                </a>
                {/* <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
