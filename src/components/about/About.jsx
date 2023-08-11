import React, { useEffect } from 'react';
import './About.sass';
import AOS from 'aos';
import laptopImg from '../../images/coffee-laptop.jpeg';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="section__container section__container--odd">
      <h2 data-aos="fade-down">{'<About me />'}</h2>
      <article className="article__container">
        <div data-aos="fade-right" className="image__container">
          <img
            src={ laptopImg }
            alt="laptop next to a notepad with brown cover and a cup of coffee"
            className="section__image"
          />
        </div>
        <div className="article__content" data-aos="fade-left">
          <p>
          Hello, my name is João Felipe Zini Hespanhol, and I'm passionate about technology.
          I've always had an affinity for the field, but I grew up in a conservative environment
          that limited my career options. As a result, I was directed to study Law,
          just like my father.
          </p>
          <p>
          My academic journey in law was marked by excellence, allowing me to solve unexplored
          problems and explore new areas. However, even though I achieved financial stability,
          Law didn't provide me with a sense of professional fulfillment.
          </p>
          <p>
          To change this, I planned a transition to my true passion: software development.
          I acquired technical skills in various technologies, both in Front-end and Back-end,
          and I'm eager to embark on this new journey with enthusiasm and dedication.
          </p>
        </div>
      </article>
    </section>
  );
}