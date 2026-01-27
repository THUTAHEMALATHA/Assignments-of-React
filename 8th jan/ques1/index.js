const express = require("express");

const app = express();


app.get("/home",(req,res)=>{
    res.json({message:"This is a home page"});
})

app.get("/contactus",(req,res)=>{
    res.json({message:"contact us at a contact@contact.com"})
})
app.get("/about",(req,res)=>{
    res.json({message:"welcome to about page!"})
});

app.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
})