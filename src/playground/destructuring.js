//
// Object destructuring
//

// const person = {
//   name: 'Peter',
//   age: 33,
//   location: {
//     city: 'Portugal',
//     //temp: 30
//   }
// };

// // console.log(`${person.name} has ${person.age}.`);

// // const name = person.name;
// // const age = person.age;
// // console.log(`${name} has ${age}.`);

// const { name = 'Anonymous', age } = person;
// console.log(`${name} has ${age}.`);

// // if (person.location.city && person.location.temp) {
// //   console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// // }

// // const {city, temp} = person.location;
// // if (city && temp) {
// //   console.log(`It's ${temp} in ${city}.`);
// // }

// const {city, temp: temperature = 12} = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     //name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(publisherName); // Penguin, Self-Published

//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

console.log(`You are in ${address[1]} ${address[2]}`);

//const [street, city, state, zip] = address;
const [, city, state = 'New York'] = address;

console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, ,mediumPrice ] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);