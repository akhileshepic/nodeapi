const express=require("express");
const mysql=require("./connection").con;

const app=express();

const port=3004
app.use("/api/user", require("./route/route"));
 
app.listen(port,(err)=>{
    if(err)
        throw err
    else
    console.log("server is running at port %d:",port);
})