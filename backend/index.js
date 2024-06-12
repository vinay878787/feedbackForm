const express = require("express");
const app = express();

app.get("/",(req,res)=>{
    res.status(200).json({message:"HOME"});
})

app.post()

app.listen(3000,(req,res)=>{
    console.log("server up and running successfully");
})