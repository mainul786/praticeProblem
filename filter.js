const numbers = [33, 50, 79, 78, 90, 101, 30];

const divisibleByTen = numbers.filter(number => number % 10 === 0);
console.log(divisibleByTen);

// find explaine
const findDefarence = divisibleByTen.find(num => num % 10 === 0);
console.log(findDefarence);