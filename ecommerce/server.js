const express = require('express');
const app = express();
app.use(express.json());

const productRoutes =require('./routes/products.routes');
const orderRoutes = require('./routes/orders.routes');
const analyticeRoutes = require('./routes/analytics.routes');

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use('/analytics',analyticeRoutes);

app.listen(3000, ()=>{
    console.log("server is running on port 3000");
})