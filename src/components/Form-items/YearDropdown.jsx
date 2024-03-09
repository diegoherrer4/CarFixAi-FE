import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { InputLabel } from '@mui/material';

function YearDropdown({ onChange, selectedYear }) {
  const [years, setYears] = useState([]);

  const labelStyle = {
    fontSize: '16px', 
  };

  const formControlStyle = {
    margin: '10px', 
  };

  useEffect(() => {
    const yearsData = Array.from({ length: 2023 - 1996 + 1 }, (_, index) => 1996 + index);

    setYears(yearsData);
  }, []);

  return (
    <FormControl fullWidth style={formControlStyle}>
      <InputLabel style={labelStyle} id="select-label">Year</InputLabel>
      <Select
        labelId="select-label"
        label="Year"
        value={selectedYear}
        onChange={(e) => onChange(e.target.value)}
        style={labelStyle}
        required
      >

        {years.map((year) => (
          <MenuItem key={year} value={year} style={labelStyle}>
            {year}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default YearDropdown;
