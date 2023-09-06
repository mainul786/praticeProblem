const peoples = [
    {name:'Meena', age:20},
    {name:'Rina', age:15},
    {name:'Suchorita', age:22}
];

// sum of object value using for loop
let sum = 0;
for(let i = 0; i<peoples.length; i++){
    const age = peoples[i].age;
    sum += age;
}
console.log(sum);

// sum of object value using for of method
sum = 0;
for(let people of peoples){
    const age = people.age;
    sum = sum + age;
}
console.log(sum);


// sum of object value;
const result = peoples.reduce((previous, current)=>{
    return previous + current.age;
}, 0);
console.log(result);