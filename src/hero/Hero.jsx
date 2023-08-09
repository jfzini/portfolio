import React from 'react';
import './Hero.sass';
import heroImg from '../images/logo-zini.png';
import cssImg from '../images/stacks/css.png';
import htmlImg from '../images/stacks/html.png';
import javascriptImg from '../images/stacks/javascript.png';
import jestImg from '../images/stacks/jest.png';
import reactImg from '../images/stacks/react.png';
import gitImg from '../images/stacks/git.png';
import RTLImg from '../images/stacks/rtl.png';
import { stacks } from './stacks';
import StackImg from './StackImg';

export default function Hero() {
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
            Hi, I&apos;m Zini! Software developer ready to work with:
          </p>
          <div className="stacks">
            {stacks.map(({name, icon}) => (
              <StackImg src={icon} alt={name} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
