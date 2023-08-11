import React from 'react';
import './Hero.sass';
import heroImg from '../../images/logo-zini.png';
import { stacks } from './stacks';
import Stack from './Stack';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <img
          src={ heroImg }
          alt="ai generated version of my face"
          className="hero__img"
        />
        <div>
          <h1>
            <span className="animated__span">{'<'}</span>
            Zini
            <span className="animated__span">{' />'}</span>
          </h1>
          <p
            className="hero__salute"
          >
            {t('Hi, I\'m Zini! Software developer ready to work with:')}
          </p>
          <div className="stacks">
            {stacks.map(({name, icon}) => (
              <Stack src={icon} alt={name} key={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
