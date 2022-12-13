const countries = [
    ["Finland", "Helsinki"],
    ["Sweden", "Stockholm"],
    ["Norway", "Oslo"],
];
const user = {
    name: "Asabeneh",
    title: "Programmer",
    country: "Finland",
    city: "Helsinki",
    age: 250,
};
const users = [
    {
        name: "Asabeneh",
        title: "Programmer",
        country: "Finland",
        city: "Helsinki",
        age: 250,
    },
    {
        name: "Eyob",
        title: "Teacher",
        country: "Sweden",
        city: "London",
        age: 25,
    },
    {
        name: "Asab",
        title: "Instructor",
        country: "Norway",
        city: "Oslo",
        age: 22,
    },
    {
        name: "Matias",
        title: "Developer",
        country: "Denmark",
        city: "Copenhagen",
        age: 28,
    },
];


// // console.assert(10 > 2*10, '10<20')
// console.warn('This is warning messsage')

// console.error('This is error')

// Check the speed difference among the following loops: while, for, for of, forEach


let num1 = 0;
let num2 = 100;


console.time('for loop')
for(let i = 0; i >= num2; i++) {
console.log('');
}
console.timeEnd('for loop')

console.time('for of loop')
for(const i of users) {
	console.log(i);
}
console.timeEnd('for of loop')

console.time('for each loop')
users.forEach((user) => console.log(user))
console.timeEnd('for each loop')