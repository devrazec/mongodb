'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import MobilePanel from '../components/MobilePanel';
import LanguageSelector from '../components/LanguageSelector';
import SearchField from '../components/SearchField';
import FilterBar from '../components/FilterBar';
const Header = () => {
  const {
    darkMode,
    setDarkMode,
    selectedLanguage,
    setSelectedLanguage,
    language,
    setLanguage,
    mobileDevice,
    setMobileDevice,
    mobilePanel,
    setMobilePanel,
  } = useContext(GlobalContext);

  return (
    <div className="surface-ground">
      {/* TOP BAR */}
      <div
        className="w-full px-3 py-1 flex align-items-center justify-content-between"
        style={{ background: '#003C32', color: 'white' }}
      >
        {/* LEFT: Logo + Hamburger on Mobile */}
        <div className="flex align-items-center gap-3">
          <i
            className="pi pi-bars text-2xl cursor-pointer block lg:hidden"
            onClick={() => setMobilePanel(!mobilePanel)}
          ></i>

          <img
            src={
              mobileDevice ? '/mongodb/img/logo4.png' : '/mongodb/img/logo3.png'
            }
            alt="logo"
            style={{ height: '40px' }}
          />
        </div>

        {/* LEFT OF SEARCH — Deliver To */}
        <div className="hidden lg:flex text-sm flex-column ml-3 cursor-pointer">
          <div>Deliver to</div>
          <div className="font-bold">Portugal</div>
        </div>

        {/* SEARCH WITH AUTOCOMPLETE */}
        <div className="flex-1 mx-3">
          <div className="flex">
            <SearchField />
          </div>
        </div>

        <div className="hidden lg:flex align-items-center gap-5">
          <LanguageSelector />

          <div className="text-sm text-left cursor-pointer">
            <div>Hello, sign in</div>
            <div className="font-bold">Account & Lists</div>
          </div>

          <div className="text-sm text-left cursor-pointer">
            <div>Returns</div>
            <div className="font-bold">& Orders</div>
          </div>

          <i className="pi pi-shopping-cart text-2xl cursor-pointer"></i>
        </div>

        {/* MOBILE CART ICON */}
        <i className="pi pi-shopping-cart text-2xl cursor-pointer lg:hidden"></i>
      </div>

      <FilterBar />

      <MobilePanel />
    </div>
  );
};

export default React.memo(Header);
