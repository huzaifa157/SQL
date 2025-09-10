// index.js
import { faker } from '@faker-js/faker';
import mysql from 'mysql2';

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

let data = [];

for(let i=1; i<=100; i++){
    data.push(getRandomUser());
}


let q = "INSERT INTO user (id , username , email, password) VALUES ?";
// let user= ["586", "shayan_cheema" , "cheema@yayhoo.com" ,"pass123" ]

try{
    connection.query(q, [data], (err,result)=>{
        if(err) throw err;
        console.log(result);
    });    
}catch(err){
    console.log(err);
}

connection.end();
