import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { InputLabel } from '@mui/material';

function MakeDropdown({ onChange, selectedMake }) {
  const [makes, setMakes] = useState([]);

  const labelStyle = {
    fontSize: '16px', 
  };

  const formControlStyle = {
    margin: '10px', // Add margin for separation
  };


  useEffect(() => {
    
    const makesData = [
      'Acura',
      'Alfa Romeo',
      'Audi',
      'BMW',
      'Buick',
      'Cadillac',
      'Chevrolet',
      'Chrysler',
      'Dodge',
      'Fiat',
      'Ford',
      'Genesis',
      'GMC',
      'Honda',
      'Hyundai',
      'Infiniti',
      'Jaguar',
      'Jeep',
      'Kia',
      'Land Rover',
      'Lexus',
      'Lincoln',
      'Mazda',
      'Mercedes-Benz',
      'Mini',
      'Mitsubishi',
      'Nissan',
      'Porsche',
      'Ram',
      'Subaru',
      'Toyota',
      'Volkswagen',
      'Volvo',
      'Tesla',
    ];
    
    setMakes(makesData);
  }, []);

  return (
    <FormControl fullWidth style={formControlStyle}>
      <InputLabel style={labelStyle} id="select-label">Make</InputLabel>
    <Select label="Make" value={selectedMake} onChange={(e) => onChange(e.target.value)} style={labelStyle} required>
      {makes.map((make) => (
        <MenuItem key={make} value={make} style={labelStyle}>
          {make}
        </MenuItem>
      ))}
    </Select>
    </FormControl>
  );
}

export default MakeDropdown;
