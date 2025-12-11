'use client';

import React, { useContext } from 'react';
import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { Button } from 'primereact/button';
import { Image } from 'primereact/image';
import { GlobalContext } from '../context/GlobalContext';

const createPriceIcon = (item, isHovered) =>
  L.divIcon({
    className: 'price-marker',
    html: `<div style="
     background:${isHovered ? '#000' : '#fff'};
     color:${isHovered ? '#fff' : '#000'};
     border-radius:12px;
     font-weight:bold;
     font-size:14px;
     text-align:center;
     border:1px solid rgba(0,0,0,0.1);
  ">${item.price}</div>`,
    iconSize: [50, 30],
    iconAnchor: [25, 15],
  });

const ProductMarker = () => {
  const {
    dataProduct,
    selectedProductId,
    setSelectedProductId,
    selectedProduct,
    setSelectedProduct,
    hoverProductId,
    setHoverProductId,
    filteredProduct,
    setFilteredProduct,
  } = useContext(GlobalContext);

  return (
    <>
      {filteredProduct.map(item => (
        <Marker
          key={item.id}
          position={[item.lat, item.lng]}
          icon={createPriceIcon(item, hoverProductId === item.id)}
          eventHandlers={{
            click: () => setSelectedProduct(item),
            mouseover: () => setHoverProductId(item.id),
            mouseout: () => setHoverProductId(null),
          }}
        >
          <Popup maxWidth={200} maxHeight={350}>
            <Card
              className="p-card product-popup-card"
              style={{ padding: 0, border: 'none' }}
            >
              <div className="flex flex-column align-items-center gap-2">
                <Image
                  className="w-9 shadow-2 border-round"
                  src={item.image}
                  alt={item.name}
                  width="100%"
                  preview={true}
                />
                <div
                  className="text-1xl font-bold text-gray-900"
                  style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2, // Limit to 2 lines
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    fontSize: '1rem',
                    lineHeight: '1.2rem',
                    height: '2.4rem', // 2 lines × line-height
                    fontWeight: 300,
                  }}
                >
                  {item.name}
                </div>
                <div className="flex align-items-start justify-content-between w-full">
                  <span className="font-semibold">
                    Location: {item.location}
                  </span>
                </div>
              </div>
              <div className="flex align-items-center justify-content-between">
                <span className="font-semibold">€ {item.price}</span>
                <Button
                  icon="pi pi-shopping-cart"
                  className="p-button-rounded"
                  disabled={item.status === 'Rejected'}
                ></Button>
              </div>
            </Card>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default ProductMarker;
