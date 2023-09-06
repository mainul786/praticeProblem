const oddNumber = [1, 3, 5, 7, 9];

// using for loop
let even = [];
for(let i = 0; i<oddNumber.length; i++){
    const odd = oddNumber[i];
    const convertEvenNumber = odd + 1;
    even.push(convertEvenNumber);
 }

console.log(even);

// using map
const convertEven = oddNumber.map( num => num + 1);
console.log(convertEven);