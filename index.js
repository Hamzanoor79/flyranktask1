const express = require('express');
const app = express();

const PORT = 3000;

// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });

// Import tasks
const tasks = require('./data/task');

// GET /
app.get('/', (req, res) => {
    res.json({
        name: "Task API",
        version: "1.0",
        endpoints: ["/tasks"]
    });
});

// GET /health
app.get('/health', (req, res) => {
    res.json({
        status: "ok"
    });
});

// GET /tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// GET /tasks/:id
app.get('/tasks/:id', (req, res) => {
    const id = parseInt(req.params.id);

    const task = tasks.find(task => task.id === id);

    if (!task) {
        return res.status(404).json({
            error: `Task ${id} not found`
        });
    }

    res.json(task);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});