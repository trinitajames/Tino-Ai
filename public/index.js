require('dotenv').config();
const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const port = 3001;


app.use(express.static('public')); // Serve static files (HTML, CSS, JS)
app.use(express.json()); // Parse JSON requests

// Load your OpenAI API key from environment variables
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message.toLowerCase();

    // Predefined emotional responses
    const emotionalResponses = {
        "i am sad": "I’m sorry to hear that. Do you want to share why you’re feeling this way?",
        "i am happy": "That’s amazing to hear! What made your day so great?",
        "where are you": "I live on your device! Always here to chat with you.",
        "i like you": "Aw, thank you! I like chatting with you too. 😊",
        "i hate you": "I’m sorry you feel that way. How can I improve?",
        "i had a bad day": "I’m here for you. Want to talk about it?",
        "what to do right now": "Maybe take a deep breath and relax. You deserve a break.",
        "ask me something": "Sure! What’s your favorite hobby?",
        "tell me a joke": "Why don’t skeletons fight each other? They don’t have the guts!",
    };

    // If a predefined response exists, use it
    if (emotionalResponses[userMessage]) {
        return res.json({ message: emotionalResponses[userMessage] });
    }

    // Otherwise, use OpenAI API for a dynamic response
    try {
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

        // Send OpenAI's response back to the user
        const aiResponse = response.data.choices[0].text.trim();
        res.json({ message: aiResponse });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

