import React from 'react';
import { Modal, Paper, Typography } from '@mui/material';

function ResultModal({ open, onClose }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Paper style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)', 
        width: '66%', // Set width to 2/3 of the screen
        height: '66%', // Set height to 2/3 of the screen
        maxHeight: '66vh', // Set maxHeight to 2/3 of the viewport height
        overflowY: 'auto', // Enable vertical scrolling if the content exceeds maxHeight
        padding: '20px' 
      }}>
        <Typography variant="h5">Result Modal</Typography>
        <p>Your result content goes here...</p>
        {/* Add your result content here */}
        {/* Add more content to see the scrollbar in action */}
        {/* Add more content to see the scrollbar in action */}
        {/* Add more content to see the scrollbar in action */}
        {/* Add more content to see the scrollbar in action */}
        {/* Add more content to see the scrollbar in action */}
      </Paper>
    </Modal>
  );
}

export default ResultModal;
