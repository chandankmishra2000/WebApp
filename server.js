const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

let tasks = []; // In-memory task list
let idCounter = 1;

// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST new task
app.post('/tasks', (req, res) => {
  const { title, description, status } = req.body;
  if (!title || !status) {
    return res.status(400).json({ message: 'Title and status are required' });
  }

  const newTask = {
    id: idCounter++,
    title,
    description,
    status,
    created_at: new Date().toISOString()
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update task
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { title, description, status } = req.body;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ message: 'Task not found' });

  if (title) task.title = title;
  if (description) task.description = description;
  if (status) task.status = status;

  res.json(task);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  const deleted = tasks.splice(index, 1);
  res.json({ message: 'Task deleted', task: deleted[0] });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
