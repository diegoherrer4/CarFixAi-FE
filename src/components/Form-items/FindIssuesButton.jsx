import React from 'react'
import { Button } from '@mui/material'

const buttonStyle = {
    width: '250px',
    height: '50px',
    fontSize: '13px',
    margin: '10px',
  }

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
  
  makeApiRequest();

function FindIssuesButton() {

    const handleFindIssuesClick = () => {
        makeApiRequest();
        // Add any additional logic if needed
      };


  return (

    <Button style={buttonStyle} variant="contained" onClick={handleFindIssuesClick}>Find possible issues</Button>
  )
}

export default FindIssuesButton