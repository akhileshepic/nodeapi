const express=require("express");
const app=express();
const mysql=require("../connection").con;   

const getall=()=>{
    let qry="select * from test";
        mysql.query(qry,  (err,results)=>{
            if(err){
                return  "Error"
            }
            else{
                res.send(results);
            }
      })
}

module.exports={getall};