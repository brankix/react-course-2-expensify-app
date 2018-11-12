const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('This is my resolved data');
    resolve({
      name: 'Andrew',
      age: 26
    });
    //reject('Something went wrong');
  }, 1500);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('This is my other promise');
    }, 5000);
  });
  //return 'some data';
}).then((str) => {
  console.log('does this run?', str);
}).catch((error) => {
  console.log('error: ', error);
});

// promise.then((data) => {
//   console.log('2', data);
// });

console.log('after');