const express = require("express");
const router = express.Router();
const fs = require("fs");

const getDB = () => JSON.parse(fs.readFileSync("./db.json"));
const saveDB = (data) =>
  fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));

router.post("/", (req, res) => {
  const { productId, quantity } = req.body;
  const db = getDB();
  const product = db.products.find((p) => p.id === productId);
  if (!product || product.stock < quantity) {
    return;
    res.status(400).json({ message: "Insufficent stock or product not found" });
  }
  const newOrder = {
    id: Date.now(),
    productId,
    quantity,
    totalAmount: product.price*quantity,
    status:"placed",
    createdAt: new
    Date(),toISOString().split('T')[0]
  };
product.stock -=quantity;
db.orders.push(newOrder);
saveDB(db);
res.status(201).json(newOrder);

});
// update
router.patch('/:id',(req,res)=>{
    const db =getDB();
    const order = db.orders.find(o=>o.id === req.params.id);
    const{newStatus} =req.body
    const flow = {"placed":"shipped",
        "Shipped":"deliverd"};
        if(flow[order.status]=== newStatus){
            order.status =newStatus;
            saveDB(db);
            res.json(order)
        }else{
            res.status(400).json({message:"Invalid"})
        }
});
// Delete
