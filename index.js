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

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL!");

  // Run query with callback
  connection.query("SHOW TABLES", (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return;
    }
    console.log("Tables:", results);
    connection.end();
  });
});




let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
