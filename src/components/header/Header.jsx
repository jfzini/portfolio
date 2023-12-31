import { useState, useEffect } from 'react';
import './Header.sass';
import BasicMenu from './Menu';
import { useTranslation } from 'react-i18next';
import LangSwitcher from './LangSwitcher';

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
      <LangSwitcher />
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
              <a href="#hero">{t('Home')}</a>
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
