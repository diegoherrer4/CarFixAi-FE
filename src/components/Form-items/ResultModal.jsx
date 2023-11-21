// ResultModal.jsx
import React, { useState, useEffect } from 'react';
import { Modal, Paper, Typography, LinearProgress, Button, Divider } from '@mui/material';

function ResultModal({ open, onClose, results, selectedYear, selectedMake, selectedModel }) {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [issueList, setIssueList] = useState([]);

  const listItemStyle = {
    fontFamily: 'Raleway',
    fontSize: '1.5em',
    padding: '20px', // Added padding for better spacing
  };

  const buttonStyle = {
    marginLeft: '10px',
    fontSize: '1em',
    padding: '8px 16px', // Slightly smaller button size
    backgroundColor: '#4CAF50', // Green color
  };

  const dividerStyle = {
    margin: '20px 0', // Added margin for better separation
  };

  // Simulate loading progress with a timer
  useEffect(() => {
    let timer;

    if (loading) {
      timer = setInterval(() => {
        setLoadingProgress((prevProgress) =>
          prevProgress >= 100 ? 0 : prevProgress + 10
        );
      }, 500);
    }

    return () => {
      clearInterval(timer);
    };
  }, [loading]);

  // Reset loading state when modal is opened
  useEffect(() => {
    if (open) {
      setLoading(true);
      setLoadingProgress(0);
      setIssueList([]); // Clear the issue list when the modal is opened
    }
  }, [open]);

  // Handle results and loading state changes
  useEffect(() => {
    if (results !== null) {
      // Results have been received, stop loading
      setLoading(false);
      setLoadingProgress(100);

      // Parse the response and create a list of issues
      const issues = results.split('\n').filter((line) => line.trim().length > 0);
      setIssueList(issues);
    }
  }, [results]);

  const handlePossibleFixesClick = (issue) => {
    // Check if car details are defined before creating the search term
    if (selectedYear && selectedMake && selectedModel) {
      // Use a regex pattern to capture issue details
      const pattern = /(\d+)\.\s([^:]+):\s([^]+?)\s-\s([\s\S]+)/;
      const match = issue.match(pattern);
  
      if (match && match.length === 5) {
        const issueNumber = match[1];
        const issueTitle = match[2];
        const issueDescription = match[3];
        const searchTerm = `${selectedYear}+${selectedMake}+${selectedModel}+${issueNumber}+${issueTitle}+${issueDescription}+fix`;
        const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
          searchTerm
        )}`;
        window.open(searchUrl, '_blank');
      } else {
        console.error('Failed to extract issue details from the issue string.');
      }
    } else {
      console.error('Car details are undefined.');
    }
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '66%', // Set width to 2/3 of the screen
          maxHeight: '66vh', // Set maxHeight to 2/3 of the viewport height
          overflowY: 'auto', // Enable vertical scrolling if the content exceeds maxHeight
          ...listItemStyle, // Apply the styling to the entire paper
        }}
      >
        {loading ? (
          // Loading progress bar
          <>
            <Typography variant="h5" sx={{ fontFamily: 'Raleway', marginBottom: '10px' }}>
              Loading...
            </Typography>
            <LinearProgress variant="determinate" value={loadingProgress} />
            <Typography variant="caption">{`${loadingProgress}% complete`}</Typography>
          </>
        ) : (
          // Actual content
          <>
            {issueList.map((issue, index) => (
              <div key={index}>
                <Typography sx={{ fontFamily: 'Raleway', fontSize: '1.5em' }}>{issue}</Typography>
                <Button
                  variant="contained"
                  onClick={() => handlePossibleFixesClick(issue)}
                  sx={buttonStyle}
                >
                  Possible Fixes
                </Button>
                <Divider sx={dividerStyle} />
              </div>
            ))}
          </>
        )}
      </Paper>
    </Modal>
  );
}

export default ResultModal;
