// const numbers = [1, 2, 3];
// let [numOne, numTwo, numThree] = numbers;

// console.log(numOne, numTwo, numThree);

// const names = ["Asabeneh", "Brook", "David", "John"];
// let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;
// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

// const fullStack = [
//     ["HTML", "CSS", "JS", "React"],
//     ["Node", "Express", "MongoDB"],
// ];
// const [frontEnd, backEnd] = fullStack;
// console.log(frontEnd);
// console.log(backEnd);

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)

// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country, city] of countries) {
// console.log(country,city)
// }

// const fullStack = [
// 	['HTML', 'CSS', 'JS', 'React'],
// 	['Node', 'Express', 'MongoDB']
//   ]

//   for(const [first, second, third] of fullStack) {
//   console.log(first, second, third)
//   }

//   Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width, height, area, perimeter } = rectangle
// console.log(width, height, area, perimeter)

// Renaming during structuring
// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// // let {width: w, height: h, area : a,perimetr: p} = rectangle
// let {width: w, height: h, area : a, perimeter= 60} = rectangle

// console.log(w, h, a, perimeter)

// const rect = {
// 	width: 20,
// 	height: 10
//   }
//   const calculatePerimeter = rectangle => {
// 	return 2 * (rectangle.width + rectangle.height)
//   }
//   console.log(calculatePerimeter(rect)) // 60
//with destructuring

// Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
// const constants = [2.72, 3.14, 9.81, 37, 100]
// let [e,pi,gravity, bodyTemp, waterBoilingTemp] = constants;

// console.log(pi);

// Destructure and assign the elements of countries array to fin, est, sw, den, nor
//   const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway'];

//   let [fin, est, sw, den, nor] = countries;
// console.log(countries);

// Destructure the rectangle object by its properties or keys.

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }

// let {width,height,area,perimeter} = rectangle;

// console.log(rectangle);

// Exercises: Level 2
// Iterate through the users array and get all the keys of the object using destructuring

const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        age: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        age: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        age: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        age: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        age: 20,
    },
];

// for(let {name,scores, skills, age} of users) {
//   console.log(name,scores, skills, age);
// }
// Find the persons who have less than two skills

// for (let i of users) {
//     let name = i.name;
//     let skills = i.skills
//     if(skills.length > 2) {
//       console.log(name);
//     }
// }


