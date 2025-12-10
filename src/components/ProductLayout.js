'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';

const ProductLayout = () => {
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
    sortField,
    setSortField,
    sortOrder,
    setSortOrder,
    productLayout,
    setProductLayout,
  } = useContext(GlobalContext);

  return (
    <div className="card flex flex-wrap justify-content-center gap-3">
      <Button
        type="button"
        label=""
        style={{
          borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: productLayout === 'list' ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid white',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon="pi pi-list"
        onClick={() => setProductLayout('list')}
      />
      <Button
        type="button"
        label=""
        style={{
          borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: productLayout === 'grid' ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid white',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon="pi pi-th-large"
        onClick={() => setProductLayout('grid')}
      />
    </div>
  );
};

export default React.memo(ProductLayout);
