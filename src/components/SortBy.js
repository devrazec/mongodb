'use client';

import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Button } from 'primereact/button';

const SortBy = () => {
  const { sortField, setSortField, sortOrder, setSortOrder } =
    useContext(GlobalContext);

  const handleClick = field => {
    if (sortField === field) {
      setSortField(field);
      setSortOrder(sortOrder === 1 ? -1 : 1);
    } else {
      setSortField(field);
      setSortOrder(1);
    }
  };

  return (
    <div className="card flex flex-wrap justify-content-center gap-3">
      <Button
        type="button"
        label="Name"
        style={{
          borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: sortField === 'name' ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid white',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon={
          sortOrder === 1 && sortField === 'name'
            ? 'pi pi-sort-alpha-down'
            : 'pi pi-sort-alpha-up'
        }
        onClick={() => handleClick('name')}
      />
      <Button
        type="button"
        label="Price"
        style={{
          borderRadius: '999px',
          //padding: "0.1rem",
          backgroundColor: sortField === 'price' ? '#057642' : '#00473C',
          borderColor: '#ccc',
          border: '1px solid white',
          color: 'white',
          height: '40px',
          minWidth: '50px',
        }}
        icon={
          sortOrder === 1 && sortField === 'price'
            ? 'pi pi-sort-amount-down'
            : 'pi pi-sort-amount-up'
        }
        onClick={() => handleClick('price')}
      />
    </div>
  );
};

export default React.memo(SortBy);
