import express from "express";
import dotenv from "dotenv";

import { supabase } from "./config/supabase.js";
import customerRoutes from "./routes/customers7.routes.js";
import orderRoutes from "./routes/orders71.routes.js";
import errorMiddleware from "./middlewares/error.middleware.js";
dotenv.config();
const app = express();
app.use(express.json());
// db connection

supabase
  .from("customers7")
  .select("id")
  .limit(1)
  .then(({ error }) => {
    if (error) console.log("DB CONNECTED:", error.message);
    else console.log("DB CONNECTED");
  });

app.get("/", (req, res) => {
  res.send("Customer-Order API running");
});

app.use("/customers7", customerRoutes);
app.use("/orders71", orderRoutes);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
