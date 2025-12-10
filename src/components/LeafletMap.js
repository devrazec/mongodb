'use client';

import React, { useEffect, useState, useContext } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';

import ResetView from './ResetView';
import ShowMyLocation from './ShowMyLocation';
import PortugalLayer from './PortugalLayer';
import LocationLayer from './LocationLayer';
import ProductMarker from './ProductMarker';

import { GlobalContext } from '../context/GlobalContext';

const LeafletMap = () => {
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
    selectedProductId,
    setSelectedProductId,
    hoverProductId,
    setHoverProductId,
  } = useContext(GlobalContext);

  return (
    <MapContainer
      center={geoInitialView}
      zoom={geoZoomView}
      scrollWheelZoom={true}
      zoomControl={true}
      style={{
        height: '100%',
        width: '100%',
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      <ResetView />
      <ShowMyLocation />
      <PortugalLayer />
      <LocationLayer />
      <ProductMarker />
    </MapContainer>
  );
};

export default React.memo(LeafletMap);
