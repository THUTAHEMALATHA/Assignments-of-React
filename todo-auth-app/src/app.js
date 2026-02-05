import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth.routes.js';
import todoRoutes from './routes/todo.routes.js';
import healthRoutes from './routes/health.routes.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/', authRoutes);
app.use('/todos', todoRoutes);
app.use('/', healthRoutes);

export default app;
