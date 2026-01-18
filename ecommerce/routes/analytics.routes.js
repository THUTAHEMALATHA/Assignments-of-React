const { count } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");

const getDB = () => JSON.parse(fs.readFileSync("./db.json"));

const {orders} =getDB();
const list = orders.map(o=>o);
res.json({count: list.length,data:list});

router.get('/cancelled',(req,res)=>{
    const {orders} =getDB;
    const cancelled= orders.filter(o=>o.status === "cancelled");
    res.json({count:cancelled.length,data:cancelled})
})

router.get('/revenue',(req,res)=>{
    const {orders} =getDB();
    const totalRevenue = orders.filter(o=>o.status!== "cancelled").reduce((acc,curr)=>acc+curr.totalAmount,0);
    res.json({totalRevenue});
    
})
module.exports=router;