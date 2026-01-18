const express =require('express');
const router = express.Router();
const fs = require('fs');


router.post('/',(req,res)=>{
    const db = ()=>JSON.parse(fs.readFileSync('./db.json'));
    db.products.push(req.body);
    fs.writeFileSync('./db.json',JSON.stringify(db,null,2));
    res.status(201).send("product added");
})





// const getDB = ()=>JSON.parse(fs.readFileSync('./db.json'));

// router.get('/',(req,res)=>{
//     const db =getDB();
//     res.json(db.products);
// });

module.exports = router;