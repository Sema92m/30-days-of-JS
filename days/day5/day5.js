

  

//   Declare an empty array;
// let arr = [];

// // Declare an array with more than 5 number of elements
// let arrOfNums = [1,2,3,4,5]
// // Find the length of your array
// console.log(arrOfNums.length)
// // Get the first item, the middle item and the last item of the array
// console.log(arrOfNums[0],arrOfNums[2], arrOfNums[4])
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1,2,3,'4', '5', [1,2,3], ['1','2','3']]
// console.log(mixedDataTypes.length)
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle','Amazon']
// Print the array using console.log()
// console.log(itCompanies)
// Print the number of companies in the array
// console.log(itCompanies.length)
// Print the first company, middle and last company
// console.log(itCompanies[0],itCompanies[3], itCompanies[6])
// Print out each company
// Change each company name to uppercase one by one and print them out
itCompanies[0] = itCompanies[0].toUpperCase();
// console.log(itCompanies[0])
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
// console.log(itCompanies.toString())
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// if(itCompanies.includes('IBMw')) {
// 	 console.log('IBM')
// } else {
// 	console.log('Company not found')
// }
// Filter out companies which have more than one 'o' without the filter method

// Sort the array using sort() method
// console.log(itCompanies.sort())
// Reverse the array using reverse() method
// console.log(itCompanies.reverse())
// Slice out the first 3 companies from the array
// console.log(itCompanies.slice(0,3))
// Slice out the last 3 companies from the array
// console.log(itCompanies.slice(itCompanies.length-3,itCompanies.length))
// Slice out the middle IT company or companies from the array

// Remove the first IT company from the array
// itCompanies.shift();
// console.log(itCompanies)


// Remove the middle IT company or companies from the array
// itCompanies.splice(1,3)
// console.log(itCompanies)
// Remove the last IT company from the array
// itCompanies.pop()
// console.log(itCompanies)
// Remove all IT companies
// console.log(itCompanies.splice())


// First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// let words = text.replace(/[.,]/g,'').split(' ')
// console.log(words)
// console.log(words.length)


// n the following shopping cart add, remove, edit items

// let shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift('Meat');

// add 'Meat' in the beginning of your shopping cart if it has not been already added

// add Sugar at the end of you shopping cart if it has not been already added
// shoppingCart.push('Sugar');
// remove 'Honey' if you are allergic to honey
// console.log(shoppingCart.indexOf('Honey'));
// shoppingCart.splice(4,1);
// modify Tea to 'Green Tea'
// console.log(shoppingCart.indexOf('Tea'));
// shoppingCart[3] = 'Greeen Tea'
// console.log(shoppingCart) ;


// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list
// const countries = [
// 	'Albania',
// 	'Bolivia',
// 	'Canada',
// 	'Denmark',
// 	'Finland',
// 	'Germany',
// 	'Hungary',
// 	'Ireland',
// 	'Japan',
// 	'Kenya'
//   ]
// countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('ETHIOPIA')
// console.log(countries)


// In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

// const webTechs = [
// 	'HTML',
// 	'CSS',
// 	'JavaScript',
// 	'React',
// 	'Redux',
// 	'Node',
// 	'MongoDB'
//   ]

//   webTechs.includes('Sass') ? console.log('Sass is a CSS preprocess') : webTechs.push('Sass')
//   console.log(webTechs)


// Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// let fullStack = []
// // console.log(fullStack.concat(frontEnd,backEnd))
// console.log(fullStack = [...frontEnd,...backEnd])


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]


// Sort the array and find the min and max age
ages.sort()
let minAge = ages[0]
let maxAge = ages[ages.length -1]
// console.log(minAge,maxAge)
// Find the median age(one middle item or two middle items divided by two)
// console.log(ages.length)
// console.log(ages[5])
// Find the average age(all items divided by number of items)
let sum = (ages[0]+ages[1]+ages[2]+ages[3]+ages[4]+ages[5]+ages[6]+ages[7]+ages[8]+ages[9]) / ages.length;
// console.log(sum)
// Find the range of the ages(max minus min)
let average = ages[ages.length-1] - ages[0]
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// let compareMinAverage =(Math.abs(ages[0]-sum)).toFixed(1);
// let compareMaxAverage =(Math.abs(ages[ages.length -1]-sum)).toFixed(1);
// console.log(sum,compareMinAverage,compareMaxAverage)


const countries = [
	'Albania',
	'Bolivia',
	'Canada',
	'Denmark',
	'Ethiopia',
	'Finland6',
	'Germany',
	'Hungary',
	'Ireland',
	'Japan',
	'Kenya',  
]

// Find the middle country(ies) in the countries array


// console.log(countries.length)
// if(countries.length%2 == 1) {
// 	console.log(countries[(countries.length-1)/2-1],countries[(countries.length-1)/2])
// } if (countries.length%2 == 0) {
// 	console.log(countries[(countries.length)/2-1])
// }


// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
// let country1 =[];
// let country2 =[];
// if (countries.length%2 == 0) {
// 	country2 = countries.slice(countries.length/2, countries.length);
// 	country1 = countries.slice(0, countries.length/2);

// 	// console.log(country1,country2)

// }
// if (countries.length%2 == 1) {
// 	country2 = countries.slice(countries.length/2+1, countries.length);
// 	country1 = countries.slice(0, countries.length/2+1);

// 	console.log(country1,country2)

// }

