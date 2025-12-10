'use client';

import React, { useState, useContext, useEffect, useMemo } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { useDemoData } from "@mui/x-data-grid-generator";
import { v4 as uuidv4 } from "uuid";

export default function DataGenerator() {
    const {
        selectedCity,
        setSelectedCity,
        city,
        geoInitialView,
        setGeoInitialView,
        geoPortugal, setGeoPortugal,
        geoCityBounds, setGeoCityBounds,
        dataProduct, setDataProduct,
        dataProductName, setDataProductName,
        dataSellerName, setDataSellerName,
        dataBroker, setDataBroker,
        dataProductJson, setDataProductJson,
    } = useContext(GlobalContext);

    const getRandomId = () => {
        const id = uuidv4();
        return id;
    };

    const { data: CommodityData } = useDemoData({
        dataSet: "Commodity",
        rowLength: 1000,
    });

    function getRandomLatLng(city) {
        const bounds = geoCityBounds[city];
        if (!bounds) return { lat: 0, lng: 0 };

        const lat = Math.random() * (bounds.latMax - bounds.latMin) + bounds.latMin;
        const lng = Math.random() * (bounds.lngMax - bounds.lngMin) + bounds.lngMin;

        return { lat, lng };
    }

    const products = useMemo(() => {
        if (
            !CommodityData?.rows ||
            !dataProductJson?.length ||
            !city?.length
        ) return [];

        return CommodityData.rows.map((row) => {
            const location = city[Math.floor(Math.random() * city.length)].label;
            const { lat, lng } = getRandomLatLng(location);
            const randomProduct = dataProductJson[Math.floor(Math.random() * dataProductJson.length)];

            return {
                id: row.id || getRandomId(),
                product: randomProduct.name,
                seller: row.traderName,
                broker: row.brokerName,
                stock: row.quantity,
                price: `€ ${Number(row.unitPrice).toFixed(2)}`,
                tax: `${Number(row.feeRate).toFixed(2)} %`,
                total: `€ ${Number(row.totalPrice).toFixed(2)}`,
                location,
                lat,
                lng,
                status: row.status,
                gender: randomProduct.gender,
                category: randomProduct.type,
                color: randomProduct.color,
                filled: row.isFilled,
                contract: row.contractType,
                email: row.traderEmail,
                address: row.counterPartyAddress,
                city: row.counterPartyCity,
                rate: row.rateType,
                country: row.counterPartyCountry,
                taxcode: row.taxCode,
                traded: row.tradeDate,
                created: row.dateCreated,
                updated: row.lastUpdated,
                image: `/shop/img/product/${randomProduct.image}`,
            };
        });
    }, [CommodityData, city, dataProductJson]);


    const productListName = useMemo(() => {
        if (!products) return [];

        // get product names, filter empty ones
        const names = products
            .map((p) => p.product)
            .filter(Boolean);

        // dedupe using Set
        return Array.from(new Set(names));
    }, [products]);

    const sellerList = useMemo(() => {
        const cleaned = products
            .map((p) => p.seller?.trim())
            .filter(Boolean);

        const unique = Array.from(
            new Map(cleaned.map(name => [name.toLowerCase(), name]))
                .values()
        );

        return unique;
    }, [products]);

    const brokerList = useMemo(() => {
        if (!products) return [];

        // Extract only required fields
        const brokers = products.map((p) => ({
            broker: p.broker,
            address: p.address,
            city: p.city,
            country: p.country,
            email: p.email,
        }));

        // Filter out invalid broker names
        const cleaned = brokers.filter(
            (b) => b.broker && b.broker.length > 0
        );

        // Dedupe by broker name (case-insensitive)
        const unique = Array.from(
            new Map(
                cleaned.map((b) => [b.broker.toLowerCase(), b]) // key: lowercase name
            ).values()
        );

        return unique;
    }, [products]);

    useEffect(() => {
        if (
            !products.length ||
            !productListName.length ||
            !sellerList.length ||
            !brokerList.length
        ) return;

        setDataProduct(products);
        setDataProductName(productListName);
        setDataSellerName(sellerList);
        setDataBroker(brokerList);

    }, [products, productListName, sellerList, brokerList]);


    console.log("city:", city);
    console.log("geoCityBounds:", geoCityBounds);
    console.log("dataProductJson:", dataProductJson);
    console.log("CommodityData:", CommodityData);

    console.log("dataProduct:", dataProduct);
    console.log("dataProductName:", dataProductName);
    console.log("dataSellerName:", dataSellerName);
    console.log("dataBroker:", dataBroker);

    return null; // This component does not render anything 
};
