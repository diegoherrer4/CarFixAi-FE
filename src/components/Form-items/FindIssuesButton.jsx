// FindIssuesButton.jsx

import React from 'react';
import { Button } from '@mui/material';
import ResultModal from './ResultModal';
import { useState } from 'react';

const buttonStyle = {
  width: '250px',
  height: '50px',
  fontSize: '13px',
  margin: '10px',
};

function FindIssuesButton({ selectedMake, selectedYear, selectedModel, selectedSymptoms, customPrompt, toggle }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalResponse, setModalResponse] = useState(null);
  console.log("Symptoms:" + selectedSymptoms)


  const handleFindIssuesClick = async () => {
    // Customize the content based on the toggle state
    const content =
      `Based on this car: ${selectedYear} ${selectedMake} ${selectedModel}` +
      `${
        toggle === 'symptoms' && selectedSymptoms
          ? ` and these symptoms: ${selectedSymptoms}`
          : ''
      }` +
      `${
        toggle === 'custom-prompt' && customPrompt
          ? ` or this custom prompt: ${customPrompt}`
          : ''
      } generate the most common problems with just a brief sentence and explanation, just render the common problems, nothing else `;
  
    const data = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: content,
        },
      ],
      temperature: 0.2,
    };
  
    // Make API request or handle the data as needed
    try {
      // Open the modal
      setOpenModal(true);
      const response = await makeApiRequest(data);
  
      
  
      // Log the response
      console.log('Assistant Response:', response);
  
      // Set the modal response
      setModalResponse(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const makeApiRequest = async (data) => {
    try {
      const response = await fetch('http://localhost:5000/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const result = await response.json();
      return result.assistantResponse;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  };
  
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Button style={buttonStyle} variant="contained" onClick={handleFindIssuesClick}>
        Find possible issues
      </Button>
      <ResultModal open={openModal} onClose={handleCloseModal} results={modalResponse} selectedMake={selectedMake} selectedYear={selectedYear} selectedModel={selectedModel}/>
      
    </>
  );
}

export default FindIssuesButton;
