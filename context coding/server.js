import express from "express";
import productsRouter from "./routes/products.route.js";
import orderRouter from "./routes/orders.routes.js";
import analyticsRouter from "./routes/analytics.routes.js";

const app = express;
app.use(express.json());

app.use("/products",productsRouter);
app.use("/orders",orderRouter);
app.use("/analytics",analyticsRouter);

app.listen(3000, ()=>{
    console.log("server is running on localhost:3000");
})