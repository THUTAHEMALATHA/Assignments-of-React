const express =require('express');
const router = express.Router();
const fs = require('fs');

const getDB = ()=>JSON.parse(fs.readFileSync('./db.json'));

router.get('/',(req,res)=>{
    const db =getDB();
    res.json(db.products);
});

module.exports = router;