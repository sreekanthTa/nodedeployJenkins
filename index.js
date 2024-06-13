const express = require("express");

const app = express();



app.get("/", async (req,res)=>{
    res.send("Welcome to my API");
})

app.listen(3000, ()=>{
    console.log("app listening on port 3000")
})