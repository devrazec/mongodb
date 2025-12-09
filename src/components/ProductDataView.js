'use client';

import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const ProductDataView = () => {
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
        geoLocation,
        setGeoLocation,
        geoZoomView,
        setGeoZoomView,
        geoInitialView,
        setGeoInitialView,
        geoPortugal, setGeoPortugal,
        geoCityBounds, setGeoCityBounds,
    } = useContext(GlobalContext);

    return (
        <div>
            <h1>ProductDataView Component</h1>
        </div>
    );
};

export default React.memo(ProductDataView);