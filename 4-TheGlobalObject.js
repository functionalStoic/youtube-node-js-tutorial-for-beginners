console.log('hey ninjas');

setTimeout(() => {
  console.log('7 seconds have passed');
}, 7000);

let time = 0;
const timer = setInterval(() => {
  time += 2;
  console.log(time + ' seconds have passed');
  if (time > 5) {
    clearInterval(timer);
  }
}, 2000);

console.log(__dirname);
console.log(__filename);

// future global functions
// require, exports

// Logs out
// => hey ninjas
// => /Users/jasonsooter/dev-space/youtube-node-js-tutorial-for-beginners
// => /Users/jasonsooter/dev-space/youtube-node-js-tutorial-for-beginners/4-TheGlobalObject.js
// => 2 seconds have passed
// => 4 seconds have passed
// => 6 seconds have passed
// => 7 seconds have passed
