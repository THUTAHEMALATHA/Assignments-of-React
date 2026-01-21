import express from "express";
import { readDB, writeDB} from "../utils.js";

const router = express.Router;

router.get("/",(req,res)=>{
    const db =readDB();
    res.json(db.products);
});

router.post("/",)