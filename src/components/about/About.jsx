import { useEffect } from 'react';
import './About.sass';
import AOS from 'aos';
import laptopImg from '../../images/coffee-laptop.jpeg';
import 'aos/dist/aos.css';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="section__container section__container--odd">
      <h2 data-aos="fade-down">{`<${t('About me')} />`}</h2>
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
          {t("Hello, my name is João Felipe Zini Hespanhol, and I'm passionate about technology. I've always had an affinity for the field, but, previously, I got a master degree in Law. After that, I decided to change my career and started my path in the techworld. I'm currently a full-stack developer at Sem Processo S/A and have developed full-stack applications using React, Node.js, and MongoDB. I also was a part of the team that developed a solution using AI to the Brazilian Supreme Court.")}
          </p>
        </div>
      </article>
    </section>
  );
}