import React, { useState, useEffect } from 'react';
import './Header.sass';
import { Button } from '@mui/material';
import BasicMenu from './Menu';
import { GitHub, LinkedIn } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

export default function HeaderPortfolio() {
  const { t } = useTranslation();

  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const isMobileDevice = () => {
      return window.innerWidth <= 768;
    };
    const handleResize = () => {
      setShowMenu(isMobileDevice());
    };
    setShowMenu(isMobileDevice());
    window.addEventListener('resize', handleResize);

    //cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header>
      <a href="#hero">
        <p className="mark appear">
          {'<'}
          zini
          <span>.</span>
          dev
          {' />'}
        </p>
      </a>
      {showMenu ? (
        <BasicMenu></BasicMenu>
      ) : (
        <nav>
          <ul className={`navbar ${showMenu ? 'show-menu' : ''}`}>
            <li className="appear slide-down">
              <a href="#hero">Home</a>
            </li>
            <li className="appear slide-down">
              <a href="#projects">{t('Projects')}</a>
            </li>
            <li className="appear slide-down">
              <a href="#about">{t('About')}</a>
            </li>
            <li className="appear slide-down">
              <a href="#contact">{t('Contact')}</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
