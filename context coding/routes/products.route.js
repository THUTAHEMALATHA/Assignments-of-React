import express from "express";
import { readDB, writeDB} from "../utils.js";

const router = express.Router;

router.get("/",(req,res)=>{
    const db =readDB();
    res.json(db.products);
});

router.post("/",(req,res)=>{
    const db =readDB();
    const newProduct = {id:db.products.length +1 ,...req.body};
    db.products.push(newProduct);
    writeDB(db);
    res.status(201).json(newProduct);
});

export default router;