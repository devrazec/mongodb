'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Footer = () => {
  const {
    darkMode,
    setDarkMode,
    selectedLanguage,
    setSelectedLanguage,
    language,
    setLanguage,
  } = useContext(GlobalContext);

  return (
    <div>
      <h1>Footer Component</h1>
    </div>
  );
};

export default React.memo(Footer);
