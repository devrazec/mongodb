'use client';

import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import {
  Box,
  MenuItem,
  Select,
  Typography,
  Menu,
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Divider,
} from '@mui/material';

const LanguageSelector = () => {
  const {
    darkMode,
    setDarkMode,
    selectedLanguage,
    setSelectedLanguage,
    language,
    setLanguage,
  } = useContext(GlobalContext);

  return (
    <div className="flex align-items-center gap-1">
      <Select
        value={selectedLanguage}
        onChange={e => {
          const value = e.target.value;
          setSelectedLanguage(value);
        }}
        displayEmpty
        renderValue={() => {
          const selected = language.find(l => l.code === selectedLanguage);
          return (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {selected && (
                <span className={selected.icon} style={{ fontSize: 18 }} />
              )}
              <Typography
                sx={{
                  fontWeight: 600,
                  paddingLeft: '5px',
                  color: 'white',
                }}
              >
                {selected.code}
              </Typography>
            </Box>
          );
        }}
        sx={{
          width: 90,
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
          },
          '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
          '&:hover .MuiOutlinedInput-notchedOutline': { border: 'none' },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 'none',
          },
          '& .MuiSelect-icon': { color: 'white' },
        }}
      >
        {language.map(l => (
          <MenuItem key={l.code} value={l.code}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <span
                className={l.icon}
                style={{ fontSize: 24, marginRight: 8 }}
              />
              <Typography>{l.name}</Typography>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default React.memo(LanguageSelector);
