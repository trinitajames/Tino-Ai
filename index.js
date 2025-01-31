const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static('public'));

// Middleware for parsing JSON requests
app.use(express.json());

const OPENAI_API_KEY = 'your-openai-api-key-here';

app.post('/chat', async (req, res) => {
    try {
        const userMessage = req.body.message;
        const response = await axios.post(
            'https://api.openai.com/v1/completions',
            {
                model: 'text-davinci-003',
                prompt: userMessage,
                max_tokens: 150,
                temperature: 0.7,
            },
            {
                headers: {
                    Authorization: `Bearer ${OPENAI_API_KEY}`,
                },
            }
        );
        const aiResponse = response.data.choices[0].text.trim();
        res.json({ message: aiResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'API request failed' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
