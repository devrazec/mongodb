'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Content = () => {
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
      <h1>Content Component</h1>
    </div>
  );
};

export default React.memo(Content);
