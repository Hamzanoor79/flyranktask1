const express = require('express');
const app = express();

app.use(express.json());

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

// POST /tasks
app.post('/tasks', (req, res) => {
    const { title } = req.body;

    // Validate input
    if (!title || title.trim() === '') {
        return res.status(400).json({
            error: "Title is required"
        });
    }

    // Generate next ID
    const nextId =
        tasks.length > 0
            ? Math.max(...tasks.map(task => task.id)) + 1
            : 1;

    // Create new task
    const newTask = {
        id: nextId,
        title: title.trim(),
        done: false
    };

    // Save in memory
    tasks.push(newTask);

    // Return created task
    res.status(201).json(newTask);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});