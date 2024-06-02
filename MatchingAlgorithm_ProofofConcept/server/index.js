require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const { matchUsers } = require('../matchingAlgorithm');
const app = express();

// Define ports from environment variables or default values
const BACKEND_PORT = process.env.BACKEND_PORT || 3000;
const FRONTEND_PORT = process.env.FRONTEND_PORT || 8080;

app.use(express.json());
app.use(helmet());
app.use(cors());

app.post('/match', async (req, res) => {
    console.log('Received POST request to /match:', req.body); // Log the incoming request body

    const { destination, interests, threshold } = req.body;
    try {
        const matches = await matchUsers(destination, interests, threshold);
        res.json({ matches });
    } catch (error) {
        console.error('Error matching users:', error);
        res.status(500).json({ error: 'Error matching users' });
    }
});

// Start the backend server
app.listen(BACKEND_PORT, () => {
    console.log(`Backend server is running on port ${BACKEND_PORT}`);
});

// Route to serve frontend
app.get('/', (req, res) => {
    res.send('Welcome to the frontend!');
});

// Start the frontend server
app.listen(FRONTEND_PORT, () => {
    console.log(`Frontend server is running on port ${FRONTEND_PORT}`);
});
