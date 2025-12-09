'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';
import { Sidebar } from 'primereact/sidebar';

const MobilePanel = () => {
  const {
    darkMode,
    setDarkMode,
    mobileDevice,
    setMobileDevice,
    mobilePanel,
    setMobilePanel,
  } = useContext(GlobalContext);

  return (
    <Sidebar
      visible={mobilePanel}
      onHide={() => setMobilePanel(false)}
      position="left"
      showCloseIcon={false} // We will make a custom close button
      style={{
        width: '80%',
        maxWidth: '250px',
        background: '#00473C',
        color: 'white',
        padding: 0, // Remove default padding
      }}
    >
      {/* HEADER */}
      <div
        style={{
          background: '#003C32',
          color: 'white',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img
            src="/mongodb/img/logo3.png"
            alt="Logo"
            style={{ paddingLeft: 8, height: 30 }}
          />
        </div>

        {/* Close Button */}
        <Button
          icon="pi pi-times"
          rounded
          outlined
          className="h-2rem w-2rem p-sidebar-icon p-link"
          onClick={() => setMobilePanel(false)}
          style={{
            color: 'white',
            marginRight: '0.5rem',
            fontSize: '1.3rem',
            //background: "#00473C",
          }}
        />
      </div>

      {/* CONTENT */}
      <div style={{ padding: '1.5rem' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li className="p-mb-3 py-2">Deliver to</li>
          <li className="p-mb-3 py-2">Language</li>
          <li className="p-mb-3 py-2">Hello, sign in</li>
          <li className="p-mb-3 py-2">Returns</li>
        </ul>
      </div>
    </Sidebar>
  );
};

export default React.memo(MobilePanel);
