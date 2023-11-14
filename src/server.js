const express = require('express');
const axios = require('axios');
const app = express();

const OPENAI_API_KEY = 'your-api-key'; // Replace with your actual API key

app.use(express.json());

app.post('/api/openai', async (req, res) => {
  const data = req.body;

  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', data, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
    });

    const assistantResponse = response.data.choices[0].message.content;
    res.json({ assistantResponse });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
