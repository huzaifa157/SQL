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
  
let q = "INSERT INTO user (id , username , email, password) VALUES (?,?,?,?)";
let user= ["586", "shayan_cheema" , "cheema@yayhoo.com" ,"pass123" ]

try{
    connection.query(q, user, (err,result)=>{
        if(err) throw err;
        console.log(result);
    });    
}catch(err){
    console.log(err);
}

connection.end();


let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};
