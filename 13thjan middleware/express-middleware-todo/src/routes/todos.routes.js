const express = require('express');
const fs = require('fs');
const path = require('path');

const validateTodoMiddleware = require('../middleware/validateTodo.middleware');
const rateLimiterMiddleware = require('../middleware/rateLimiter.middleware');

const router = express.Router();
const dbPath = path.join(__dirname, '../db.json');

// GET all todos (rate-limited)
router.get('/', rateLimiterMiddleware, (req, res) => {
    const todos = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    res.json(todos);
});

// GET single todo
router.get('/:todoId', (req, res) => {
    const todos = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const todo = todos.find(t => t.id == req.params.todoId);
    if (!todo) return res.status(404).json({ error: "Todo not found" });
    res.json(todo);
});

// POST /add (with validation)
router.post('/add', validateTodoMiddleware, (req, res) => {
    const todos = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const newTodo = {
        id: Date.now(), // simple unique ID
        title: req.body.title
    };
    todos.push(newTodo);
    fs.writeFileSync(dbPath, JSON.stringify(todos, null, 2));
    res.status(201).json(newTodo);
});

// PUT /update/:todoId
router.put('/update/:todoId', (req, res) => {
    const todos = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const todoIndex = todos.findIndex(t => t.id == req.params.todoId);
    if (todoIndex === -1) return res.status(404).json({ error: "Todo not found" });

    todos[todoIndex].title = req.body.title || todos[todoIndex].title;
    fs.writeFileSync(dbPath, JSON.stringify(todos, null, 2));
    res.json(todos[todoIndex]);
});

// DELETE /delete/:todoId
router.delete('/delete/:todoId', (req, res) => {
    let todos = JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
    const todo = todos.find(t => t.id == req.params.todoId);
    if (!todo) return res.status(404).json({ error: "Todo not found" });

    todos = todos.filter(t => t.id != req.params.todoId);
    fs.writeFileSync(dbPath, JSON.stringify(todos, null, 2));
    res.json({ message: "Todo deleted successfully" });
});

module.exports = router;
