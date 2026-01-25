import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

import customerRoutes from './routes/customers7.routes.js';
import orderRoutes from './routes/orders71.routes.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app =express();
app.use(express.json());

app.use('/customers7',customerRoutes);
app.use('orders71',orderRoutes);
app.use(errorMiddleware)

app.get('/',(req,res)=>{
    res.send('customer-order API running');
});

app.listen(process.env.PORT,()=>{
    console.log(`server running on port ${process.env.PORT}`)
});