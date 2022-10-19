const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const iterator = (number) => {
  console.log(number);
}

numbers.forEach(iterator);

let sum = 0;

numbers.forEach((number) => {
  sum += number
});

console.log(`The total is: ${sum}`)