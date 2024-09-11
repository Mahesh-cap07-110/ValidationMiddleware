function validateTodoData(req, res, next) {
    const { ID, Name, Rating, Description, Genre, Cast } = req.body;

    // Check if the fields are present and of the correct type
    if (typeof ID !== 'number') {
        return res.status(400).json({ error: 'ID must be a number' });
    }
    if (typeof Name !== 'string') {
        return res.status(400).json({ error: 'Name must be a string' });
    }
    if (typeof Rating !== 'number') {
        return res.status(400).json({ error: 'Rating must be a number' });
    }
    if (typeof Description !== 'string') {
        return res.status(400).json({ error: 'Description must be a string' });
    }
    if (typeof Genre !== 'string') {
        return res.status(400).json({ error: 'Genre must be a string' });
    }
    if (!Array.isArray(Cast) || !Cast.every(c => typeof c === 'string')) {
        return res.status(400).json({ error: 'Cast must be an array of strings' });
    }

    // If all validations pass, continue to the next middleware/route
    next();
}

module.exports = validateTodoData;
