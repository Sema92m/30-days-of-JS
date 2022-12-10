// const callback = (n) => {
//     return n ** 2;
// };
// function cube(callback, n) {
//     return callback(n) * n;
// }
// console.log(cube(callback, 3));

// const higherOrder = (n) => {
//     const doSomething = (m) => {
//         const doWhatEver = (t) => {
//             return 2 * n + 3 * m + t;
//         };
//         return doWhatEver;
//     };
//     return doSomething;
// };
// console.log(higherOrder(2)(3)(10));

// function callback() {
// 	console.log(1);
//   }
//   setInterval(callback, 1000)

//   function sayHello() {
// 	console.log('Hello')
//   }
//   setTimeout(sayHello, 2000)

// let sum = 0;
// // const numbers = [1, 2, 3, 4, 5];
// // numbers.forEach(num => console.log(num))

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => sum += num)

// console.log(sum)
// forEach
// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. The index and the array optional.
// arr.forEach(function (element, index, arr) {
//     console.log(index, element, arr)
//   }
//   // The above code can be written using arrow function
//   arr.forEach((element, index, arr) => {
//     console.log(index, element, arr)
//   })
//   // The above code can be written using arrow function and explicit return
//   arr.forEach((element, index, arr) => console.log(index, element, arr))
//   let sum = 0;
//   const numbers = [1, 2, 3, 4, 5];
//   numbers.forEach(num => console.log(num))
//   console.log(sum)

// map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

// const modifiedArray = arr.map(function (element, index, arr) {
//   return element
// })

// const numbers = [1, 2, 3, 4, 5]
// const numbersSquare = numbers.map((num) => num * num)
// console.log(numbersSquare)

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const namesToUpperCase = names.map((name) => name.toUpperCase())
// console.log(namesToUpperCase)

// const countries = [
// 	'Albania',
// 	'Bolivia',
// 	'Canada',
// 	'Denmark',
// 	'Ethiopia',
// 	'Finland',
// 	'Germany',
// 	'Hungary',
// 	'Ireland',
// 	'Japan',
// 	'Kenya',
//   ]
//   const countriesToUpperCase = countries.map((country) => country.toUpperCase())
//   console.log(countriesToUpperCase)

// // Arrow function
// const countriesToUpperCase = countries.map((country) => {
// 	return country.toUpperCase();
//   })
//   //Explicit return arrow function
//   const countriesToUpperCase = countries.map(country => country.toUpperCase());
//

// const countriesFirstThreeLetters = countries.map((country) =>
//   country.toUpperCase().slice(0, 3)
// // )

// filter
// Filter: Filter out items which full fill filtering conditions and return a new array.
//Filter countries containing land
// const countriesContainingLand = countries.filter((country) =>
//   country.includes('land')
// )
// console.log(countriesContainingLand)
// ['Finland', 'Ireland']
// const countriesEndsByia = countries.filter((country) => country.endsWith('ia'))
// console.log(countriesEndsByia)
// ['Albania', 'Bolivia','Ethiopia']
// const countriesHaveFiveLetters = countries.filter(
//   (country) => country.length === 5
// )
// console.log(countriesHaveFiveLetters)
// ['Japan', 'Kenya']

// const scores = [
// 	{ name: 'Asabeneh', score: 95 },
// 	 { name: 'Lidiya', score: 98 },
// 	{ name: 'Mathias', score: 80 },
// 	{ name: 'Elias', score: 50 },
// 	{ name: 'Martha', score: 85 },
// 	{ name: 'John', score: 100 },
//   ]

//   const scoresGreaterEighty = scores.filter((score) => score.score > 80)
//   console.log(scoresGreaterEighty)

// reduce
// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// arr.reduce((acc, cur) => {
// 	// some operations goes here before returning a value
//    return
//   }, initialValue)
//   const numbers = [1, 2, 3, 4, 5]
//   const sum = numbers.reduce((acc, cur) => acc + cur, 0)
//   console.log(sum)

// every
// every: Check if all the elements are similar in one aspect. It returns boolean
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?
// console.log(areAllStr)
// const bools = [true, true, true, true]
// const areAllTrue = bools.every((b) => b === true) // Are all true?
// console.log(areAllTrue) // true

// find
// find: Return the first element which satisfies the condition
// const scores = [
// 	{ name: 'Asabeneh', score: 95 },
// 	{ name: 'Mathias', score: 80 },
// 	{ name: 'Elias', score: 50 },
// 	{ name: 'Martha', score: 85 },
// 	{ name: 'John', score: 100 },
//   ]

//   const score = scores.find((user) => user.score > 80)
//   console.log(score)

// findIndex
// findIndex: Return the position of the first element which satisfies the condition

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const ages = [24, 22, 25, 32, 35, 18]

// const result = names.findIndex((name) => name.length > 7)
// console.log(result) // 0

// const age = ages.findIndex((age) => age < 20)
// console.log(age) // 5

// some
// some: Check if some of the elements are similar in one aspect. It returns boolean
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const bools = [true, true, true, true]
// const areSomeTrue = bools.some((b) =>  b === true)
// console.log(areSomeTrue) //true
// const areAllStr = names.some((name) => typeof name === 'number') // Are all strings ?
// console.log(areAllStr) // false

// sort
// sort: The sort methods arranges the array elements either ascending or descending order. By default, the sort() method sorts values as strings.This works well for string array items but not for numbers. If number values are sorted as strings and it give us wrong result. Sort method modify the original array. It is recommended to copy the original data before you start using sort method.

// Sorting string values
// const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
// console.log(products.sort()) // ['Apple', 'Carrot', 'Coffee', 'Honey', 'Milk', 'Sugar']
// //Now the original products array  is also sorted
// const numbers = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers.sort()) //[100, 3.14, 37, 9.81]
// numbers.sort(function (a, b) {
//   return a - b
// })
// console.log(numbers) // [3.14, 9.81, 37, 100]
// numbers.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers) //[100, 37, 9.81, 3.14]

// const users = [
// 	{ name: 'Asabeneh', age: 150 },
// 	{ name: 'Brook', age: 50 },
// 	{ name: 'Eyob', age: 100 },
// 	{ name: 'Elias', age: 22 },
//   ]
//   users.sort((a, b) => {
// 	if (a.age < b.age) return -1
// 	if (a.age > b.age) return 1
// 	return 0
//   })
//   console.log(users)

let countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { product: "banana", price: 3 },
    { product: "mango", price: 6 },
    { product: "potato", price: 0 },
    { product: "avocado", price: 8 },
    { product: "coffee", price: 10 },
    { product: "tea", price: 0 },
];
const countriesAll = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];
// const callback = (elem) => {
//     console.log(elem);
// }
// countries.forEach((elem) => {
//     console.log(elem);
// })
// names.forEach((elem) => {
//     console.log(elem);
// })
// numbers.forEach((num) => {
//     console.log(num);
// })

// countries.map((elem) => {
//     console.log(elem.toUpperCase());
//     })
// countries.map((elem) => {
//     console.log(elem.length);

// })

// numbers.map((num) => {
//     console.log(num ** 2);
// })

// names.map((elem) => {
//     console.log(elem.toUpperCase());
// })

// products.map((elem) => {
//     console.log(`${elem.product} coast ${elem.price}.`);
// })

// const newArr = countries.filter((country) =>
//     country.endsWith('land'))
// console.log(newArr);

// const sixCharactersCountries = countries.filter((country) => country.length >6)
// console.log(sixCharactersCountries);

// countries = countries.filter((country) => country.length > 6)
// console.log(countries);

// const countryStartsE = countries.filter((country) => country[0] === 'F')
// console.log(countryStartsE);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// function getStringLists(arr) {
//     arr.filter((elem) => typeof(elem) == 'string');
// }
// console.log(getStringLists(countries));

// Use reduce to sum all the numbers in the numbers array.
// console.log(numbers.reduce((num, cur) => num + cur, 0));

// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

// console.log(names.some((name) => name.length > 7));
// console.log(names.every((name) => name.endsWith('land')));

// console.log(countries.find((country) => country.length > 6));
// console.log(countries.findIndex((country) => country.length > 6));

// console.log(countries.findIndex((country) => country === 'Norway'));
// console.log(countries.findIndex((country) => country === 'Russia'));

// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

// const totalPrice = products.map((country) => country.price).filter((price) => price > 0).reduce((price, cur) => cur + price, 0);
// console.log(totalPrice);
// Find the sum of 7price of products using only reduce reduce(callback))

// const total = +products.reduce((sum,{price})=> sum + price,0)
// console.log(total);

// var arr = [{x:1}, {x:2}, {x:4}];
// var result = arr.reduce(function (acc, obj) { return acc + obj.x; }, 0);
// console.log(result);  // 7

// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

// function categorizeCountries(arr) {
//     return arr.filter((country) => country.endsWith('en'))
// }

// console.log(categorizeCountries(countries) );

// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

// function getFirstTenCountries(arr) {
//     return arr.filter((country) => country.endsWith('land')).slice(0,10)
// }
// console.log(getFirstTenCountries(countriesAll));
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

// function getLastTenCountries (arr) {
//     return arr.slice(-10)
// }
// console.log(getLastTenCountries (countriesAll));
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

// function firstLetter(arr) {
//     let firstLetter = [];
//     let result = {};
//     firstLetter = arr.map((country) => country[0]).forEach((letter) => result[letter] = result[letter] + 1 || 1);
//     console.log(result);
//     for (var key in result) {
//         console.log("число " + key + " == " + result[key] + " раз");
//     }
// }
// firstLetter(countriesAll);


