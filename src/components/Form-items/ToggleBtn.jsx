import React from 'react';
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

const toggleBtn = {
  fontSize: '12px',
}

function ToggleBtn({ selectedToggle, onToggleChange }) {
  const handleToggleChange = (event, newToggle) => {
    if (newToggle !== null) {
      onToggleChange(newToggle); // Call the callback function to update the state
    }
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={selectedToggle}
      exclusive
      onChange={handleToggleChange}
      aria-label="Platform"
    >
      <ToggleButton style={toggleBtn} value="symptoms">Symptoms</ToggleButton>
      <ToggleButton style={toggleBtn} value="custom-prompt">Custom Prompt</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ToggleBtn;
