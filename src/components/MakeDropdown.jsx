import React, { useState, useEffect } from 'react';

function MakeDropdown({ onChange, selectedMake }) {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    // Fetch a list of car makes from your data source
    // For simplicity, we're using a static array here
    const makesData = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];
    setMakes(makesData);
  }, []);

  return (
    <select onChange={(e) => onChange(e.target.value)} value={selectedMake}>
      <option value="">Select Make</option>
      {makes.map((make) => (
        <option key={make} value={make}>
          {make}
        </option>
      ))}
    </select>
  );
}

export default MakeDropdown;
