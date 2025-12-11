'use client';

import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Tag } from 'primereact/tag';
import { Image } from 'primereact/image';

const ProductDataView = () => {
  const {
    dataProduct,
    productLayout,
    selectedProduct,
    setSelectedProduct,
    hoverProductId,
    setHoverProductId,
    filteredProduct,
    mapPanel,
  } = useContext(GlobalContext);

  const [firstRecord, setFirstRecord] = useState(0);
  const [numberRecords, setNumberRecords] = useState(20);
  const [totalRecords, setTotalRecords] = useState(filteredProduct.length);

  const [data, setData] = useState(filteredProduct.slice(0, numberRecords));

  useEffect(() => {
    setFirstRecord(0); // reset to first page
    setNumberRecords(20); // default rows per page
    setTotalRecords(filteredProduct.length);
    setData(filteredProduct.slice(0, 20)); // first page
  }, [filteredProduct]);

  const gridClass = mapPanel
    ? 'col-12 sm:col-6 md:col-4 lg:col-3 xl:col-4' // Map visible: 3–4 columns max
    : 'col-12 sm:col-6 md:col-4 lg:col-3 xl:col-2';

  const listClass = mapPanel
    ? 'flex flex-column xl:flex-row xl:align-items-start m-2 p-4 gap-4 shadow-2 border-round-xl surface-card card-item w-full'
    : 'flex flex-column sm:flex-row flex-wrap m-2 p-4 gap-4 shadow-2 border-round-xl surface-card card-item';

  const itemStyle = mapPanel ? {} : { width: 'calc(50% - 1rem)' };

  const getSeverity = product => {
    switch (product.status) {
      case 'Open':
        return 'success';
      case 'Filled':
        return 'info';
      case 'Rejected':
        return 'danger';
      case 'Partially Filled':
        return 'warning';
      default:
        return null;
    }
  };

  const listItem = product => {
    return (
      <div
        key={product.id}
        className={`${listClass} 
    ${selectedProduct?.id === product.id ? 'card-item-selected' : ''}
    ${hoverProductId === product.id ? 'card-item-hover' : ''}`}
        style={itemStyle}
        onMouseEnter={() => setHoverProductId(product.id)}
        onMouseLeave={() => setHoverProductId(null)}
        onClick={() => setSelectedProduct(product)}
      >
        <Image
          className="w-9 sm:w-16rem xl:w-10rem shadow-2 border-round"
          src={product.image}
          alt={product.name}
          width="100%"
          preview={true}
        />

        <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column align-items-center sm:align-items-start gap-3">
            <div className="text-2xl font-bold text-gray-900"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                //fontSize: '1rem',
                //lineHeight: '1.2rem',
                //height: '2.4rem',
                //fontWeight: 600,
              }}
            >
              {product.name}
            </div>

            <div className="flex align-items-center gap-3">
              <Tag value={product.gender} severity={getSeverity(product)} />
              <span className="flex align-items-center gap-2">
                <i className="pi pi-tag"></i>
                <span className="font-semibold">{product.category}</span>
              </span>
            </div>

            <div className="flex align-items-start justify-content-between w-full">
              <span className="font-semibold">
                Location: {product.location}
              </span>
            </div>
            <div className="flex align-items-start justify-content-between w-full">
              <span className="font-semibold">
                Seller: {product.seller}
              </span>
            </div>
          </div>

          <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2 w-full">
            <span className="text-2xl font-semibold">€ {product.price}</span>
            <Button icon="pi pi-shopping-cart" className="p-button-rounded" />
          </div>
        </div>
      </div>
    );
  };

  const gridItem = product => {
    return (
      <div className={`${gridClass} p-2`} key={product.id}>
        <div
          className={`p-3 shadow-2 surface-card border-round-xl card-item
      ${selectedProduct?.id === product.id ? 'card-item-selected' : ''}
      ${hoverProductId === product.id ? 'card-item-selected' : ''}`}
          onMouseEnter={() => setHoverProductId(product.id)}
          onMouseLeave={() => setHoverProductId(null)}
          onClick={() => setSelectedProduct(product)}
        >
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              <i className="pi pi-tag"></i>
              <span className="font-semibold">{product.category}</span>
            </div>
            <Tag value={product.gender} severity={getSeverity(product)}></Tag>
          </div>

          <div className="flex flex-column align-items-center gap-3 py-5">
            <Image
              className="w-9 shadow-2 border-round"
              src={product.image}
              alt={product.name}
              width="100%"
              preview={true}
            />
            <div className="text-2xl font-bold text-gray-900"
              style={{
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                //fontSize: '1rem',
                //lineHeight: '1.2rem',
                //height: '2.4rem',
                //fontWeight: 600,
              }}
            >
              {product.name}
            </div>

            <div className="flex align-items-start justify-content-between w-full">
              <span className="font-semibold">
                Location: {product.location}
              </span>
            </div>
          </div>

          <div className="flex align-items-center justify-content-between">
            <span className="font-semibold">€ {product.price}</span>
            <Button
              icon="pi pi-shopping-cart"
              className="p-button-rounded"
            ></Button>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate = (product, layout, index) => {
    if (!product) return null;

    switch (layout) {
      case 'list':
        return listItem(product, index);
      case 'grid':
        return gridItem(product);
      default:
        return null;
    }
  };

  const listTemplate = (products, layout) => {
    return (
      <div className="grid grid-nogutter">
        {products.map((product, index) => itemTemplate(product, layout, index))}
      </div>
    );
  };

  const onPage = (event) => {
    setFirstRecord(event.first);
    setNumberRecords(event.rows);
    setData(filteredProduct.slice(event.first, event.first + event.rows));

  };

  return (
    <div className="card" style={{ height: '100%', overflowY: 'auto' }}>
      <DataView
        value={data}
        listTemplate={listTemplate}
        layout={productLayout}
        lazy
        paginator
        alwaysShowPaginator
        paginatorPosition="top"
        rows={numberRecords}
        first={firstRecord}
        totalRecords={totalRecords}
        rowsPerPageOptions={[10, 20, 30]}
        onPage={onPage}

      />
    </div>
  );
};

export default ProductDataView;
