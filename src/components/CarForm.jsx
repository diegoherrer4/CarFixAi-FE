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
const makeApiRequest = async () => {
  const data = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Your message here' }],
    temperature: 0.7,
  };

  try {
    const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log('Assistant Response:', result.assistantResponse);
  } catch (error) {
    console.error('Error:', error);
  }
};


function CarForm() {
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [toggle, setToggle] = useState("symptoms");

    let selectedCar = `${selectedYear} ${selectedMake} ${selectedModel}`
    console.log(selectedCar)

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

  return (
    <>
    <div>
      <Dropdowns>
        <YearDropdown onChange={handleYearChange} selectedYear={selectedYear} />
        <MakeDropdown onChange={handleMakeChange} selectedMake={selectedMake} />
        <ModelDropdown onChange={handleModelChange} selectedModel={selectedModel} selectedMake={selectedMake} selectedYear={selectedYear} />

      </Dropdowns>
      <p>
        Selected: {selectedYear} {selectedMake} {selectedModel}
      </p>

    </div>
    <div>
    <ToggleBtn selectedToggle={toggle} onToggleChange={handleToggleChange} />
    {toggle === 'symptoms' && <Symptoms />}
    {toggle === 'custom-prompt' && <CustomPrompt />}
    </div>
    <div>
    <FindIssuesButton />
    </div>
    </>
  );
}

export default CarForm;
