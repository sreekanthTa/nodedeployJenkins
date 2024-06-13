const express = require("express");

const app = express();



app.get("/", async (req,res)=>{
    
    console.log("checking details ",req,res)
    res.send("Welcome to my API");
})


app.get("/crash", async (req,res)=>{
    
    console.log("chrashing details ",req,res);

    if(true){
        throw new Error("it is going to crash")
    }
    res.send("Welcome to my API");
})


app.listen(3000, ()=>{
    console.log("app listening on port 3000")
})