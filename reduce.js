const numbers = [1, 9, 17, 22];

// using for loop add array element
let sum = 0;
for (let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    sum = sum + number;
}
// console.log(sum);

// using reduce method add array element
const result = numbers.reduce((previous, current) =>{
    return previous + current;
}, 0);
console.log(result);