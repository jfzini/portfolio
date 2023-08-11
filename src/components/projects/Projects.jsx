import React, { useEffect } from 'react';
import AOS from 'aos';
import ProjectsCarousel from './ProjectsCarousel';

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="section__container section__container--even">
      <h2 data-aos="fade-down">{'<Projects />'}</h2>
      <article className="article__container">
        <div className="article__content" data-aos="fade-right">
          <p>Here you can find some of the projects that I&apos;ve developed so far.</p>
          <p>Keep in touch to see newer ones as I develop more!</p>
        </div>
      </article>
      <ProjectsCarousel />
    </section>
  );
}
