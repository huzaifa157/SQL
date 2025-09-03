// index.js
import { faker } from '@faker-js/faker';

let getRandomUser = () => {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    password: faker.internet.password(),
   
  };
};

console.log(getRandomUser());
