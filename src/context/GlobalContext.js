'use client';

import { createContext, useState, useEffect } from 'react';
import portugalJson from '../data/portugal.json';
import productJson from '../data/product.json';
import L from 'leaflet';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileDevice, setMobileDevice] = useState(false);

  const [mobilePanel, setMobilePanel] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('EN');
  const [language, setLanguage] = useState([
    { name: 'English', code: 'EN', icon: 'fi fi-gb' },
    { name: 'Portuguese', code: 'PT', icon: 'fi fi-pt' },
    { name: 'Spanish', code: 'ES', icon: 'fi fi-es' },
  ]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [city, setCity] = useState([
    { label: 'Lisbon', value: 'Lisbon', colorCode: '#0074D9' }, // blue
    { label: 'Porto', value: 'Porto', colorCode: '#FF4136' }, // red
    { label: 'Faro', value: 'Faro', colorCode: '#2ECC40' }, // green
    { label: 'Coimbra', value: 'Coimbra', colorCode: '#FF851B' }, // orange
    { label: 'Braga', value: 'Braga', colorCode: '#B10DC9' }, // purple
    { label: 'Bragança', value: 'Bragança', colorCode: '#39CCCC' }, // teal
    { label: 'Leiria', value: 'Leiria', colorCode: '#F012BE' }, // magenta
    { label: 'Guarda', value: 'Guarda', colorCode: '#85144b' }, // dark red
  ]);
  const [selectedCity, setSelectedCity] = useState([]);

  const [category, setCategory] = useState([
    { label: 'Tops', value: 'Tops' },
    { label: 'Capris', value: 'Capris' },
    { label: 'Dresses', value: 'Dresses' },
    { label: 'Shorts', value: 'Shorts' },
    { label: 'Tshirts', value: 'Tshirts' },
    { label: 'Skirts', value: 'Skirts' },
    { label: 'Jeans', value: 'Jeans' },
    { label: 'Leggings', value: 'Leggings' },
    { label: 'Innerwear Vests', value: 'Innerwear Vests' },
    { label: 'Rompers', value: 'Rompers' },
    { label: 'Lehenga Choli', value: 'Lehenga Choli' },
    { label: 'Salwar', value: 'Salwar' },
    { label: 'Booties', value: 'Booties' },
    { label: 'Clothing Set', value: 'Clothing Set' },
    { label: 'Trousers', value: 'Trousers' },
    { label: 'Shirts', value: 'Shirts' },
    { label: 'Jackets', value: 'Jackets' },
    { label: 'Kurtas', value: 'Kurtas' },
    { label: 'Sweatshirts', value: 'Sweatshirts' },
    { label: 'Kurta Sets', value: 'Kurta Sets' },
    { label: 'Churidar', value: 'Churidar' },
    { label: 'Waistcoat', value: 'Waistcoat' },
    { label: 'Blazers', value: 'Blazers' },
  ]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  const [color, setColor] = useState([
    { label: 'White', value: 'White', colorCode: '#FFFFFF' },
    { label: 'Black', value: 'Black', colorCode: '#000000' },
    { label: 'Blue', value: 'Blue', colorCode: '#007BFF' },
    { label: 'Pink', value: 'Pink', colorCode: '#FF69B4' },
    { label: 'Red', value: 'Red', colorCode: '#FF0000' },
    { label: 'Olive', value: 'Olive', colorCode: '#808000' },
    { label: 'Yellow', value: 'Yellow', colorCode: '#FFFF00' },
    { label: 'Navy Blue', value: 'Navy Blue', colorCode: '#000080' },
    { label: 'Magenta', value: 'Magenta', colorCode: '#FF00FF' },
    { label: 'Grey', value: 'Grey', colorCode: '#808080' },
    { label: 'Green', value: 'Green', colorCode: '#008000' },
    { label: 'Orange', value: 'Orange', colorCode: '#FFA500' },
    { label: 'Purple', value: 'Purple', colorCode: '#800080' },
    { label: 'Turquoise Blue', value: 'Turquoise Blue', colorCode: '#40E0D0' },
    { label: 'Peach', value: 'Peach', colorCode: '#FFDAB9' },
    { label: 'Off White', value: 'Off White', colorCode: '#F8F8F0' },
    { label: 'Teal', value: 'Teal', colorCode: '#008080' },
    { label: 'Sea Green', value: 'Sea Green', colorCode: '#2E8B57' },
    { label: 'Lime Green', value: 'Lime Green', colorCode: '#32CD32' },
    { label: 'Brown', value: 'Brown', colorCode: '#A52A2A' },
    { label: 'Lavender', value: 'Lavender', colorCode: '#E6E6FA' },
    { label: 'Beige', value: 'Beige', colorCode: '#F5F5DC' },
    { label: 'Khaki', value: 'Khaki', colorCode: '#F0E68C' },
    { label: 'Multi', value: 'Multi', colorCode: '#CCCCCC' },
    { label: 'Maroon', value: 'Maroon', colorCode: '#800000' },
    { label: 'Cream', value: 'Cream', colorCode: '#FFFDD0' },
    { label: 'Rust', value: 'Rust', colorCode: '#B7410E' },
    { label: 'Grey Melange', value: 'Grey Melange', colorCode: '#BEBEBE' },
  ]);
  const [selectedColor, setSelectedColor] = useState([]);

  const [gender, setGender] = useState([
    { label: 'Boys', value: 'Boys', colorCode: '#0074D9' }, // blue
    { label: 'Girls', value: 'Girls', colorCode: '#B10DC9' }, // red
  ]);
  const [selectedGender, setSelectedGender] = useState([]);

  const [geoLocation, setGeoLocation] = useState({
    All: L.latLngBounds([
      [36.9, -9.5], // southwestern Portugal
      [42.1, -6.2], // northeastern Portugal
    ]),
    Lisbon: L.latLngBounds([
      [38.69, -9.25],
      [38.82, -9.05],
    ]),
    Porto: L.latLngBounds([
      [41.11, -8.74],
      [41.19, -8.53],
    ]),
    Faro: L.latLngBounds([
      [37.0, -8.1],
      [37.2, -7.8],
    ]),
    Coimbra: L.latLngBounds([
      [40.18, -8.48],
      [40.23, -8.4],
    ]),
    Braga: L.latLngBounds([
      [41.53, -8.47],
      [41.57, -8.42],
    ]),
    Bragança: L.latLngBounds([
      [41.79, -6.75],
      [41.83, -6.7],
    ]),
    Leiria: L.latLngBounds([
      [39.74, -8.87],
      [39.76, -8.8],
    ]),
    Guarda: L.latLngBounds([
      [40.53, -7.48],
      [40.56, -7.42],
    ]),
  });

  const [geoZoomView, setGeoZoomView] = useState(7);
  const [geoInitialView, setGeoInitialView] = useState([39.3999, -8.2245]);
  const [geoPortugal, setGeoPortugal] = useState(portugalJson);

  const [geoCityBounds, setGeoCityBounds] = useState({
    Lisbon: { latMin: 38.69, latMax: 38.82, lngMin: -9.25, lngMax: -9.05 },
    Porto: { latMin: 41.11, latMax: 41.19, lngMin: -8.74, lngMax: -8.53 },
    Faro: { latMin: 37.0, latMax: 37.2, lngMin: -8.1, lngMax: -7.8 },
    Coimbra: { latMin: 40.18, latMax: 40.23, lngMin: -8.48, lngMax: -8.4 },
    Braga: { latMin: 41.53, latMax: 41.57, lngMin: -8.47, lngMax: -8.42 },
    Bragança: { latMin: 41.79, latMax: 41.83, lngMin: -6.75, lngMax: -6.7 },
    Leiria: { latMin: 39.74, latMax: 39.76, lngMin: -8.87, lngMax: -8.8 },
    Guarda: { latMin: 40.53, latMax: 40.56, lngMin: -7.48, lngMax: -7.42 },
  });

  const [dataProduct, setDataProduct] = useState([]);
  const [dataProductName, setDataProductName] = useState([]);
  const [dataSellerName, setDataSellerName] = useState([]);
  const [dataBroker, setDataBroker] = useState([]);
  const [dataProductJson, setDataProductJson] = useState(productJson);



  return (
    <GlobalContext.Provider
      value={{
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
        geoLocation,
        setGeoLocation,
        geoZoomView,
        setGeoZoomView,
        geoInitialView,
        setGeoInitialView,
        geoPortugal, setGeoPortugal,
        geoCityBounds, setGeoCityBounds,
        dataProduct, setDataProduct,
        dataProductName, setDataProductName,
        dataSellerName, setDataSellerName,
        dataBroker, setDataBroker,
        dataProductJson, setDataProductJson,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
