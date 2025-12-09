'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { AutoComplete } from 'primereact/autocomplete';

const SearchField = () => {
  const {
    darkMode,
    setDarkMode,
    mobileDevice,
    setMobileDevice,
    mobilePanel,
    setMobilePanel,
    selectedLanguage,
    setSelectedLanguage,
    language,
    setLanguage,
    selectedProduct,
    setSelectedProduct,
    product,
    setProduct,
  } = useContext(GlobalContext);

  return (
    <AutoComplete
      value={selectedProduct}
      field="product"
      placeholder="Search Products"
      className="w-full"
      inputClassName="w-full p-inputtext-lg py-2 text-lg border-round-md pl-2"
    />
  );
};

export default React.memo(SearchField);
