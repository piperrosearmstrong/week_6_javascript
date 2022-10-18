// let counter = () => {
//   for (let num = 1 ; num <= 20 ; num++) { 
//     console.log(num);
//   }
// }

// setInterval(counter, 1000);

// let counter = (finish) => {
//   for (let num = 1 ; num <= finish ; num++) {
//     setInterval( () => {
//       console.log(num)
//     }, num * 1000)
//   }
// }

// counter(20);

let counter = 0;

const increment = () => {
  console.log(counter += 1);
}

setInterval(increment, 1000);