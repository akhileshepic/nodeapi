const express=require("express");
const app=express();
const router = express.Router();
const mysql=require("../connection").con;  
//const lib = require("../model/userallget");
router.get('/list',async (req,res)=>{
   
      const results = lib.getall();
     console.log(results);
    // let qry="select * from test";
//     mysql.query(qry,  (err,results)=>{
//         if(err){
//             return  "Error"
//         }
//         else{
//             res.send(results);
//         }
//   })
});
 module.exports=router;