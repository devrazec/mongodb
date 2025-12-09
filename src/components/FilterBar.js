'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Box, MenuItem, Select, Typography, Menu } from '@mui/material';
import SelectCity from '../components/SelectCity';
import SelectCategory from '../components/SelectCategory';
import SelectColor from '../components/SelectColor';
import SelectGender from '../components/SelectGender';



const FilterBar = () => {
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
    } = useContext(GlobalContext);

    return (
        <Box
            sx={{
                width: '100%',
                borderBottom: '1px solid #014034',
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                paddingLeft: 2,
                paddingTop: 1,
                paddingBottom: 1,
                bgcolor: '#00473C',
                overflowX: { xs: 'auto', sm: 'auto' },
                scrollbarWidth: 'thin',
                '&::-webkit-scrollbar': {
                    // Chrome/Safari
                    height: 6,
                },
            }}
        >
            <SelectGender />
            <SelectCategory />
            <SelectColor />
            <SelectCity />
        </Box>
    );
};

export default React.memo(FilterBar);
