import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

const Input = styled.input`
  width: 300px;
  height: 40px;
  margin: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  margin: 10px 0;
`;

function CustomPrompt({ onChange, customPrompt }) {
  return (
    <div className="custom-prompt">
      <form>
        <Label htmlFor="custom-prompt">
          Custom prompt:
          <Input
            type="text"
            id="custom-prompt"
            value={customPrompt}
            placeholder="Write your specific issue here..."
            onChange={(e) => onChange(e.target.value)}
          />
        </Label>
      </form>
    </div>
  );
}

export default CustomPrompt;
