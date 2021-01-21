const express= require('express');
const mongoose= require('mongoose');
const app=express();

app.use(express.urlencoded())
app.use(express.json())


app.get('/',(req,res)=>{
    console.log("you visted my website")
    console.log(req.query)
    var statement ="YOUR GMAIL IS "+req.query.gmail;
    res.send(statement)
})
app.post('/',(req,res)=>{
    console.log(" YOU VISITED  HOMEPAGE ")
    console.log(req.body)
    res.send("YOUR DATA HAS BEEN SENT")
})


app.listen(4444,"127.0.0.1",()=>{
    console.log("server started successfully")
})