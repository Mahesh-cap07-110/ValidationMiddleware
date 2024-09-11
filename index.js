const express = require('express');
const validateTodoData = require('./validationMiddleware'); // Import middleware

const app = express();
const PORT = 3000;

app.use(express.json()); // Parse incoming JSON requests

// POST route with validation middleware
app.post('/', validateTodoData, (req, res) => {
    res.status(200).json({ message: 'data received', data: req.body });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
