import React from 'react'
import styled from 'styled-components';
import {useState } from 'react'


const Input = styled.input`
  width: 300px;
  height: 40px; /* Adjust the height to make it bigger */
  margin: 20px; /* Add margin to separate the input field */
`;

const Label = styled.label`
  font-size: 16px; /* Increase font size for labels */
  margin: 10px 0; /* Add margin to separate labels */
`;



function CustomPrompt() {

    const [prompt, setPrompt] = useState("");

  return (
    <div className="custom-prompt">
        <form>
          <Label htmlFor="custom-prompt">
            Custom prompt:
            <Input
              type="text"
              id="custom-prompt"
              placeholder="Write your specific issue here..."
              onChange={(e) => setPrompt(e.target.value)}
            />
          </Label>
          
        </form>
        
      </div>
  )
}

export default CustomPrompt