import React, { useState, useEffect } from 'react';

function YearDropdown({ onChange, selectedYear }) {
  const [years, setYears] = useState([]);

  useEffect(() => {
    // Fetch a list of years from your data source
    // For simplicity, we're using a static array here
    const yearsData = [2023, 2022, 2021, 2020];
    setYears(yearsData);
  }, []);

  return (
    <select onChange={(e) => onChange(e.target.value)} value={selectedYear}>
      <option value="">Select Year</option>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
}

export default YearDropdown;
