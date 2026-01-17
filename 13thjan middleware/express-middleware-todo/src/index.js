const express = require('express');
const loggerMiddleware = require('./middleware/logger.middleware');
const todosRouter = require('./routes/todos.routes');

const app = express();
app.use(express.json()); // built-in middleware to parse JSON bodies

// App-level middleware
app.use(loggerMiddleware);

// Mount Todo Router at /todos
app.use('/todos', todosRouter);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
