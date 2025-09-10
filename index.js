// index.js
import { faker } from '@faker-js/faker';
import mysql from 'mysql2';
import express from "express";
const app = express();

// Create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta',
    password: 'google6464'
});
  

let getRandomUser = () => {
    return [
         faker.string.uuid(),
         faker.internet.username(),
         faker.internet.email(),
         faker.internet.password(),
    ];
};



 app.get("/" , (req,res)=>{
    res.send("welcome to home page");
 })

 app.listen("8080" , ()=>{
    console.log("server is working at 8080")
 })
























































// try{
//     connection.query(q, [data], (err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });    
// }catch(err){
//     console.log(err);
// }

// connection.end();
