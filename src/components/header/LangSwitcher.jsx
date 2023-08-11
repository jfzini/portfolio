import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import flagBR from '../../images/lang/br.png';
import flagUSA from '../../images/lang/usa.png';

export default function LangSwitcher() {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(navigator.language);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLanguage(code);
  };

  const languages = [
    {
      code: 'en-US',
      name: 'English',
      flag: flagUSA,
    },
    {
      code: 'pt-BR',
      name: 'Português',
      flag: flagBR,
    },
  ];

  return (
    <div>
      {languages.map(({ code, name, flag }) => (
        <button
          onClick={() => changeLanguage(code)}
          className={
            language === code
              ? 'language-switcher active-switcher'
              : 'language-switcher inactive-switcher'
          }
        >
          <img src={flag} alt={name} />
        </button>
      ))}
    </div>
  );
}
