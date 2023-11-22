import React, { useState } from 'react';
import YearDropdown from './Form-items/YearDropdown';
import MakeDropdown from './Form-items/MakeDropdown';
import ModelDropdown from './Form-items/ModelDropdown';
import ToggleBtn from './Form-items/ToggleBtn';
import styled from 'styled-components';
import CustomPrompt from './Form-items/CustomPrompt';
import Symptoms from './Form-items/Symptoms';
import FindIssuesButton from './Form-items/FindIssuesButton';





const Dropdowns = styled.div`
  // display: flex;
  // flex-direction: row;
  // justify-content: space-evenly;
  // margin: 50px; /* Add margin to separate the dropdowns */
`;



function CarForm() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [customPrompt, setCustomPrompt] = useState(null);
  const [toggle, setToggle] = useState("symptoms");
  

  let selectedCar = `${selectedYear} ${selectedMake} ${selectedModel}`;
  

  const handleYearChange = (year) => {
    setSelectedYear(year);
    setSelectedMake(null);
    setSelectedModel(null);
  };

  const handleMakeChange = (make) => {
    setSelectedMake(make);
    setSelectedModel(null);
  };

  const handleModelChange = (model) => {
    setSelectedModel(model);
  };

  const handleToggleChange = (newToggle) => {
    setToggle(newToggle);
  };

  
  const handleSymptomsChange = (symptoms) => {
    setSelectedSymptoms(symptoms);
    console.log(symptoms)
  };


  const handleCustomPromptChange = (prompt) => {
    setCustomPrompt(prompt);
    console.log(prompt)
  };

  return (
    <>
      <div>
        <Dropdowns>
          <YearDropdown onChange={handleYearChange} selectedYear={selectedYear} />
          <MakeDropdown onChange={handleMakeChange} selectedMake={selectedMake} />
          <ModelDropdown
            onChange={handleModelChange}
            selectedModel={selectedModel}
            selectedMake={selectedMake}
            selectedYear={selectedYear}
          />
        </Dropdowns>
        <p>Selected: {selectedYear} {selectedMake} {selectedModel}</p>
      </div>
      <div>
        <ToggleBtn selectedToggle={toggle} onToggleChange={handleToggleChange} />
        {toggle === 'symptoms' && <Symptoms onSymptomsChange={handleSymptomsChange} />}
        {toggle === 'custom-prompt' && <CustomPrompt onChange = {handleCustomPromptChange}/>}
      </div>
      <div>
        
        <FindIssuesButton
          selectedMake={selectedMake}
          selectedYear={selectedYear}
          selectedModel={selectedModel}
          selectedSymptoms={selectedSymptoms}
          customPrompt={customPrompt}
          toggle={toggle}
        />
      </div>
    </>
  );
}

export default CarForm;