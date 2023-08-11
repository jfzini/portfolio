import React, { useEffect } from 'react';
import AOS from 'aos';
import ProjectsCarousel from './ProjectsCarousel';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="projects" className="section__container section__container--even">
      <h2 data-aos="fade-down">{`<${t('Projects')} />`}</h2>
      <article className="article__container">
        <div className="article__content" data-aos="fade-right">
          <p>{t('Here you can find some of the projects that I\'ve developed so far.')}</p>
          <p>{t('Keep in touch to see newer ones as I develop more!')}</p>
        </div>
      </article>
      <ProjectsCarousel />
    </section>
  );
}
