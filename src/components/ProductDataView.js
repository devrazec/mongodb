'use client';

import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';
import { DataView, DataViewLayoutOptions } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';
import { Image } from 'primereact/image';

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
        selectedProductId,
        setSelectedProductId,
        selectedProduct,
        setSelectedProduct,
        hoverProductId,
        setHoverProductId,
    } = useContext(GlobalContext);

    const filteredData = () => {
        if (!dataProduct) return [];

        let filtered = [...dataProduct];

        if (selectedCategory.length > 0) {
            filtered = filtered.filter(p => selectedCategory.includes(p.category));
        }
        if (selectedCity.length > 0) {
            filtered = filtered.filter(p => selectedCity.includes(p.location));
        }
        if (selectedColor.length > 0) {
            filtered = filtered.filter(p => selectedColor.includes(p.color));
        }
        if (selectedGender.length > 0) {
            filtered = filtered.filter(p => selectedGender.includes(p.gender));
        }

        // Sorting
        if (sortField) {
            filtered.sort((a, b) => {
                let valA = a[sortField];
                let valB = b[sortField];
                if (typeof valA === 'string') valA = valA.toLowerCase();
                if (typeof valB === 'string') valB = valB.toLowerCase();
                if (valA < valB) return sortOrder === 1 ? -1 : 1;
                if (valA > valB) return sortOrder === 1 ? 1 : -1;
                return 0;
            });
        }

        return filtered;
    };

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

    const listItem = (product) => {

        const isSelected = selectedProduct?.id === product.id;

        return (
            <div className="col-12" key={product.id}>
                <div
                    className={`p-4 shadow-2 border-round-xl surface-card card-item
      ${selectedProduct?.id === product.id ? 'card-item-selected' : ''}
      ${hoverProductId === product.id ? 'card-item-selected' : ''}`
                    }
                    onMouseEnter={() => setHoverProductId(product.id)}
                    onMouseLeave={() => setHoverProductId(null)}
                    onClick={() => setSelectedProduct(product)}
                >
                    <Image
                        className="w-9 sm:w-16rem xl:w-10rem shadow-2 border-round"
                        src={product.image}
                        alt={product.name}
                        width="60%"
                        preview={true}
                    />

                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-gray-900">{product.name}</div>

                            <div className="flex align-items-center gap-3">
                                <Tag value={product.gender} severity={getSeverity(product)}></Tag>
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                            </div>

                            <div className="flex align-items-start justify-content-between w-full">
                                <span className="font-semibold">Location: {product.location}</span>
                            </div>
                        </div>

                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">{product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded"></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };


    const gridItem = (product) => {
        const isSelected = selectedProduct?.id === product.id;

        return (
            <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
                <div
                    className={`p-3 shadow-2 surface-card border-round-xl card-item
      ${selectedProduct?.id === product.id ? 'card-item-selected' : ''}
      ${hoverProductId === product.id ? 'card-item-selected' : ''}`
                    }
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
                        <div
                            style={{
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                fontSize: '1rem',
                                lineHeight: '1.2rem',
                                height: '2.4rem',
                                fontWeight: 600,
                            }}
                        >
                            {product.name}
                        </div>

                        <div className="flex align-items-start justify-content-between w-full">
                            <span className="font-semibold">Location: {product.location}</span>
                        </div>
                    </div>

                    <div className="flex align-items-center justify-content-between">
                        <span className="font-semibold">{product.price}</span>
                        <Button icon="pi pi-shopping-cart" className="p-button-rounded"></Button>
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

    return (
        <div className="card" style={{ height: '100%', overflowY: 'auto' }}>
            <DataView
                value={filteredData()}
                listTemplate={listTemplate}
                layout={productLayout}
                paginator
                rows={6}
            />
        </div>
    );
};

export default ProductDataView;
