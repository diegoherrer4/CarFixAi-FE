import React, { useState, useEffect } from 'react';

function ModelDropdown({ onChange, selectedModel }) {
  const [models, setModels] = useState([]);

  useEffect(() => {
    // Fetch a list of car models from your data source
    // For simplicity, we're using a static array here
    const modelsData = ['Camry', 'Civic', 'F-150', 'Silverado'];
    setModels(modelsData);
  }, []);

  return (
    <select onChange={(e) => onChange(e.target.value)} value={selectedModel}>
      <option value="">Select Model</option>
      {models.map((model) => (
        <option key={model} value={model}>
          {model}
        </option>
      ))}
    </select>
  );
}

export default ModelDropdown;
