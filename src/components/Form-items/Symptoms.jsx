import React from 'react'
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';
import styled from 'styled-components';





const customStyles = {
    dropdownButton: (base, state) => ({
      ...base,
      height: '40px', 
      width: '200px', 
    }),
  };
  

  const customStyle2 = {
    fontSize: '16px',
    margin: '30px 0',
  }


const Label = styled.label`
  font-size: 16px; /* Increase font size for labels */
  margin: 10px 0; /* Add margin to separate labels */
`;


const options = [
    { label: 'Engine Misfire', value: 'Engine Misfire' },
    { label: 'Transmission Slipping', value: 'Transmission Slipping' },
    { label: 'Brake Squeaking', value: 'Brake Squeaking' },
    { label: 'Steering Wheel Vibration', value: 'Steering Wheel Vibration' },
    { label: 'Strange Engine Noises', value: 'Strange Engine Noises' },
    { label: 'Excessive Exhaust Smoke', value: 'Excessive Exhaust Smoke' },
    { label: 'Overheating', value: 'Overheating' },
    { label: 'Dashboard Warning Lights', value: 'Dashboard Warning Lights' },
    { label: 'Stalling at Stops', value: 'Stalling at Stops' },
    { label: 'Soft Brake Pedal', value: 'Soft Brake Pedal' },
    { label: 'Poor Fuel Efficiency', value: 'Poor Fuel Efficiency' },
    { label: 'AC Not Cooling', value: 'AC Not Cooling' },
    { label: 'Rough Gear Shifting', value: 'Rough Gear Shifting' },
    { label: 'Suspension Noise', value: 'Suspension Noise' },
    { label: 'Hard Steering', value: 'Hard Steering' },
    { label: 'Leaking Fluids', value: 'Leaking Fluids' },
    { label: 'Worn Out Tires', value: 'Worn Out Tires' },
    { label: 'Flickering Headlights', value: 'Flickering Headlights' },
    { label: 'Electrical Issues', value: 'Electrical Issues' },
    { label: 'Cabin Odors', value: 'Cabin Odors' },
  ];
  

  
 

  function Symptoms({ onSymptomsChange }) {
    const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  
    const handleSymptomsChange = (selectedOptions) => {
      setSelectedSymptoms(selectedOptions);
      // Pass the selected options to the parent component using the callback function
      onSymptomsChange(selectedOptions);
    };
  
    return (
      <div style={{ ...customStyle2 }}>
        <ReactMultiSelectCheckboxes
          options={options}
          styles={customStyles}
          // Remove the onChange prop, as it's handled by handleSymptomsChange
        />
      </div>
    );
  }
  
  export default Symptoms;
` `  