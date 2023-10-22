import React, { useState } from 'react';
import YearDropdown from './YearDropdown';
import MakeDropdown from './MakeDropdown';
import ModelDropdown from './ModelDropdown';
import styled from 'styled-components';


const Input = styled.input`
  width: 300px;
  height: 100px;
  /* Other CSS properties here */
`;

function CarForm() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [prompt, setPrompt] = useState("");

  const handleYearChange = (year) => {
    setSelectedYear(year);
  };

  const handleMakeChange = (make) => {
    setSelectedMake(make);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  return (
    <div>
      <YearDropdown onChange={handleYearChange} selectedYear={selectedYear} />
      <MakeDropdown onChange={handleMakeChange} selectedMake={selectedMake} />
      <ModelDropdown onChange={handleModelChange} selectedModel={selectedModel} />
      <p>
        Selected: {selectedYear} {selectedMake} {selectedModel}
      </p>
      <div className='custom-prompt'>
      <form>
      <label htmlFor="custom-prompt"> 
        Custom prompt:
        <Input
          type="text"
          id="custom-prompt"
          placeholder="Write your specific issue here..."
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
  </form>
      </div>
      
    </div>
  );
}

export default CarForm;
