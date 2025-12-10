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
    selectedCity,
    setSelectedCity,
    city,
    setCity,
    selectedCategory,
    setSelectedCategory,
    category,
    setCategory,
    selectedColor,
    setSelectedColor,
    color,
    setColor,
    selectedGender,
    setSelectedGender,
    gender,
    setGender,
    geoZoomView,
    setGeoZoomView,
    geoInitialView,
    setGeoInitialView,
    geoPortugal,
    setGeoPortugal,
    geoLisbon,
    setGeoLisbon,
    geoPorto,
    setGeoPorto,
    geoFaro,
    setGeoFaro,
    geoCoimbra,
    setGeoCoimbra,
    geoBraga,
    setGeoBraga,
    geoBraganca,
    setGeoBraganca,
    geoLeiria,
    setGeoLeiria,
    geoGuarda,
    setGeoGuarda,
    geoBeja,
    setGeoBeja,
    geoViana,
    setGeoViana,
    geoVilaReal,
    setGeoVilaReal,
    geoSetubal,
    setGeoSetubal,
    geoCityBounds,
    setGeoCityBounds,
    storeProduct,
    setStoreProduct,
    dataProduct,
    setDataProduct,
    dataProductName,
    setDataProductName,
    dataSellerName,
    setDataSellerName,
    dataBroker,
    setDataBroker,
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
