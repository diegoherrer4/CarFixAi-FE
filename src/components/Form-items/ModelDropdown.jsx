import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import { InputLabel } from '@mui/material';


function ModelDropdown({ onChange, selectedMake, selectedYear}) {
  const [models, setModels] = useState([]); 
  const [selectedModel, setSelectedModel] = useState(null);
 

  const labelStyle = {
    fontSize: '16px',
  };


  const formControlStyle = {
    margin: '10px',
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        
          
          const response = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeYear/make/${selectedMake.toLowerCase()}/modelyear/${selectedYear}?format=json`);
          const data = await response.json();
  
          if (data) {
            const modelNames = data.Results.slice(0, 350).map(item => item.Model_Name)
            setModels(modelNames);
          } else {
            setModels([]);
          }
        
      } catch (error) {
        console.error('Failed to fetch models data:', error);
        setModels([]);
      }
    };
  
    fetchData();
  }, [selectedMake, selectedYear]);
  

 const handleModelChange = (model) => {
  setSelectedModel(model);
  if (onChange) {
    onChange(model);
  }
};


  return (
    <FormControl fullWidth style={formControlStyle}>
      <InputLabel style={labelStyle} id="select-label">
        Model
      </InputLabel>
      <Select
        labelId="select-label"
        label="Model"
        value={selectedModel}
        onChange={(e) => handleModelChange(e.target.value)}
        style={labelStyle}
        required
>
        {models && models.length > 0 ? (
          models.map((model) => (
            <MenuItem key={model} value={model} style={labelStyle}>
              {model}
            </MenuItem>
          ))
        ) : (
          <MenuItem disabled>Fetching Models...</MenuItem>
        )}
      </Select>
    </FormControl>
  );
}

export default ModelDropdown;


