const numbers = [
  "1763687364",
  "4763687363",
  "7867867862",
  "AAAA#####AAAA#87@768767382672",
  "4763687363",
  "4763687363",
];

const checkLength = (number) => {
  if (number.length <= 10) {
    return true;
  } else {
    return false;
  }
}

const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
}

console.log(numbers)

console.log(filterLongNumbers(numbers))
