import * as firebase from 'firebase';
console.log("process: ", process.env);
try {
  var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
} catch (e) {
  console.log("var:" , e);
}


firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };







// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     console.log(snapshot.val());
// //   });

// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// //   });

// const expenses = [
//   {
//     description: 'Expense 1',
//     note: 'Note 1',
//     amount: '12.34',
//     createdAt: '05/07/2018'
//   },
//   {
//     description: 'Expense 2',
//     note: 'Note 2',
//     amount: '3.9',
//     createdAt: '06/07/2018'
//   },
//   {
//     description: 'Expense 3',
//     note: 'Note 3',
//     amount: '10.7',
//     createdAt: '07/11/2018'
//   }
// ];

// // database.ref('expenses').push(expenses[0]);
// // database.ref('expenses').push(expenses[1]);
// // database.ref('expenses').push(expenses[2]);

// // database.ref('expenses').on('value', (snapshot) => {
// //   const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val()
// //       });
// //     });
// //     console.log(expenses);
// // });

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // database.ref('notes/-LQkQ6zLLIgH147xT5M9').update({
// //   body: 'Buy food'
// // });

// // database.ref('notes/-LQkQ6zLLIgH147xT5M9').remove();

// // database.ref('notes').push({
// //   title: 'Course Topics',
// //   body: 'React Native, Angular, Python'
// // });
// // const firebaseNotes = {
// //   notes: {
// //     apoijasdf: {
// //       title: 'First note!',
// //       body: 'This is my note'
// //     },
// //     apoijasdfsadsa: {
// //       title: 'Another note!',
// //       body: 'This is my note'
// //     }
// //   }
// // };

// // const notes = [
// //   {
// //     id: '12',
// //     title: 'First note!',
// //     body: 'This is my note'
// //   },
// //   {
// //     id: '761ase',
// //     title: 'Another note!',
// //     body: 'This is my note'
// //   }
// // ];

// // database.ref('notes').set(notes);
// // database.ref('notes/12')


// // // database.ref().on('value', (snapshot) => {
// // //   const val = snapshot.val();
// // //   console.log(`${val.name} is a ${val.job.title} at ${val.location.city}`)
// // // });
// // // const onValueChange = database.ref().on('value', (snapshot) => {
// // //   console.log(snapshot.val());
// // // }, (e) => {
// // //   console.log('Error with data fetching', e);
// // // });

// // // setTimeout(() => {
// // //   database.ref('age').set(29);
// // // }, 3500);

// // // setTimeout(() => {
// // //   database.ref().off(onValueChange);
// // // }, 7000);

// // // setTimeout(() => {
// // //   database.ref('age').set(31);
// // // }, 10500);
// // // database.ref('location/city')
// // //   .once('value')
// // //   .then((snapshot) => {
// // //     const val = snapshot.val();
// // //     console.log(val);
// // //   })
// // //   .catch((e) => {
// // //     console.log('Error fetching data', e);
// // //   });



// // database.ref().set({
// //   name: 'Peter White',
// //   age: 26,
// //   location: {
// //     city: 'Philadelphia',
// //     country: 'United States'
// //   },
// //   isSingle: false
// // });

// // // database.ref().set("this is my string");

// // // database.ref().set({
// // //   age: 27
// // // });

// // database.ref('age').set(27);
// // database.ref('location/city').set('New York');
// // database.ref('attributes').set({
// //   height: 10,
// //   weight: 23
// // });