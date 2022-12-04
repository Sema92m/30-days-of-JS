// let i = 0;
// do{
// 	console.log(i)
// 	i++
// }
// while(i<=5){
	
// }

// const numbers = [1, 2, 3, 4, 5]

// for (const num of numbers) {
//   console.log(num+2)
// }

// const webTechs = [
// 	'HTML',
// 	'CSS',
// 	'JavaScript',
// 	'React',
// 	'Redux',
// 	'Node',
// 	'MongoDB'
//   ]
//   for(const tech of webTechs) {
// 	console.log(tech.toUpperCase());
//   }
//   for(const tech of webTechs) {
// 	console.log(tech[1]);
//   }


//   for(let i = 0; i <= 5; i++){
// 	if(i == 3){
// 	  continue
// 	}
// 	console.log(i)
//   }


// Iterate 0 to 10 using for loop, do the same using while and do while loop
// let num = 0;
// for(let i = 0; i <=10;i++){
// 	console.log(i);
// }
// while(num<=10){
// 	console.log(num);
// 	num++
// }
// do{
// 	console.log(num);
// 	num++;
// } while(num<=10) {
	
// }

// Iterate 10 to 0 using for loop, do the same using while and do while loop
// for(let i = 10; i >= 0; i--){
// 	console.log(i);
// }

// let num = 10;
// while(num >=0){
// 	console.log(num);
// 	num--;
// }

// do{
// 	console.log(num);
// 	num--;
// } 
// while (num>=0)

// Iterate 0 to n using for loop

// let num = 12;
// for(let i = 0; i<=num;i++){
// 	console.log(i);
// }

// Write a loop that makes the following pattern using console.log():

// let str = '*';
// let num = 0;
// for(let i=6; i>=num;i--){
// 	console.log(str.repeat(i));
// }
// for(let i = 0; i<=num; i++){
// 	console.log('*'.repeat(i));
// }



// for(let i = 0; i<=10;i++){
// 	console.log(`${i} x ${i} = ${i*i}`);
// }

// for(let i = 0; i<=10; i++){
// 	console.log(`${i}  ${i}  ${i**3}`);
// }


// Use for loop to iterate from 0 to 100 and print only even numbers

// for(let i=0; i<=100; i++){
// 	if(i%2 == 0) {
// 		console.log(i);
// 	}

// }

// Use for loop to iterate from 0 to 100 and print only odd numbers

// for(let i=0; i<=100; i++){
// 	if(i%2 == 1) {
// 		console.log(i);
// 	}

// }
// Use for loop to iterate from 0 to 100 and print only prime numbers

// Use for loop to iterate from 0 to 100 and print the sum of all numbers.
// let sum = 0;
// for(let i = 0; i<=100; i++){
// 	sum = sum + i
// }
// console.log(sum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let sumOdd=0;
// let sumEven=0;

// for(let i=0;i<=100;i++){
// 	if(i%2 !== 0){
// 		sumOdd=sumOdd+i;
// 	}
// 	if(i%2 == 0){
// 		sumEven=sumEven+i;
// 	}
// }
// console.log(sumEven,sumOdd);

// Develop a small script which generate array of 5 random numbers

// for(let i =0.5; i<5; i++) {
// 	console.log(`${Math.round((Math.random()*i)+(Math.random()*i))}`);
// }

// Develop a small script which generate array of 5 random numbers and the numbers must be unique

// for(let i =0.5; i<5; i++) {
// 	console.log(`${Math.round((Math.random()*i)+(Math.random()*i))}`);
// }

// Develop a small script which generate a six characters random id:
//random key password generator
// let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let str = '';
// for(let i = 0; i<5; i++){
// 	str+=arr.charAt(Math.round(Math.random() * arr.length))
// }
// console.log(str);

// Develop a small script which generate any number of characters random id:

// let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// let str = '';
// let randomNum = Math.round(Math.random() * 10 + 5);
// for(let i = 0; i<randomNum; i++){
// 	str+=arr.charAt(Math.round(Math.random() * arr.length))
// }
// console.log(str);

// Write a script which generates a random hexadecimal number.

// let arr = '0123456789ABCDEF';
// let num = 5;
// let result= '';
// for(let i = 0; i <= num; i++){
// 	result += arr.charAt(Math.round(Math.random() * arr.length))
// }
// console.log(`#${result}`);

// Write a script which generates a random rgb color number.
// let numRandom = Math.round(Math.random() * 255);
// let result = '';
// for(let i = 0; i <=1; i++) {
// 	result =`rgb(${numRandom},${numRandom},${numRandom})`;

// }
// console.log(result);

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
// 	'Kenya'
//   ]
// for(const country of countries) {
// 	console.log(country.toUpperCase());
// }
// Using the above countries array, create an array for countries length'.
// let arr =[]
// for(const country of countries){
// 	arr.push(country.length);
// }
// console.log(arr);

// Use the countries array to create the following array of arrays:
// let arr= []
// let arr2 = []
// for(const country of countries) {
// 	arr.push([country, country.slice(0,3).toUpperCase(),country.length]);
// }
// console.log(arr);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.


// let arr =[];

// for(const country of countries) {
// 	if(country.includes('land')) {
// 		arr.push(country);
// 	} 
// }
// if (arr.length == 0){
// 	console.log('These are countries ends without land');
// }
// console.log(arr);


// let countries = [
// 	'Albania',
// 	'Bolivia',
// 	'Canada',
// 	'Denmark',
// 	'Ethiopia',
// 	'Finland',
// 	'Germanyassas',
// 	'Hungary',
// 	'Ireland',
// 	'Japan',
// 	'Kenya'
//   ]
// Using the above countries array, find the country containing the biggest number of characters.
// let b = 0;
// let longest;
// 	for(let i = 0 ; i < countries.length; i++){
// 		if(countries[i].length >  b) {
// 			b = countries[i].length
// 			longest = countries[i]
// 		}
// 	}
// console.log(longest);
// let arr =[]
// for(let i = 0; i < countries.length; i++){
// 	if(countries[i].length == 5) {
// arr.push(countries[i])
// 	}
// }
// console.log(arr);



// const webTechs = [
// 	'HTML',
// 	'CSS',
// 	'JavaScript',
// 	'React',
// 	'Redux',
// 	'Nodejs',
// 	'MongoDB'
//   ]

// let longest;
// let a = 0;
//   for(let i = 0; i < webTechs.length;i++){
// 	if(webTechs[i].length > a) {
// 		a = webTechs[i].length;
// 		longest = webTechs[i];
// 	}

//   }
//   console.log(longest);

// Use the webTechs array to create the following array of arrays:
// let arr = []
// for(let i =0; i<webTechs.length; i++) {
// 	arr.push([webTechs[i],webTechs[i].length ])
// }
// console.log(arr);


// const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
// let arr = [];
// for(let i=0; i<mernStack.length; i++){
// 	arr.push(mernStack[i][0])
// }
// console.log(arr.join(''));

// const arr = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
// for(let i = 0; i< arr.length;i++){
// 	console.log(arr[i]);
// }
// const fruits = ['banana', 'orange', 'mango', 'lemon'];
// let arr =[];
// for(let i=1;i<=fruits.length;i++){
// 	arr.push(fruits[fruits.length-i])
// }
// console.log(arr);
// const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]
//   for(let i = 0; i<fullStack.length; i++) {
// 	for(let j = 0; j<fullStack[i].length; j++){
// 		console.log(fullStack[i][j]);
// 	}
	
//   }

let countries = [
	'Afghanistan',
	'Albania',
	'Algeria',
	'Andorra',
	'Angola',
	'Antigua and Barbuda',
	'Barbados',
	'Belarus',
	'Belgium',
	'Belize',
	'Benin',
	'Bhutan',
	'Bolivia',
	'Zimbabwe'
]

//   const sortedCountries = countries.slice().sort();


// const arr =[]
//   for(let i = 0; i < sortedCountries.length;i++) {
// 	if(sortedCountries[i].includes('land')) {
// 		arr.push(sortedCountries[i])
// 	}
//   }
//   console.log(arr);

//   let highest = 0;
//   let str;
//   let highestLengthCountry;
//   for(let i=0; i<sortedCountries.length; i++) {
// 	if (sortedCountries[i].length > highest) {
// 		highest = sortedCountries[i].length;
// 		str = sortedCountries[i];
// 	}
//   }
//   console.log(str);

// Extract all the countries containing only four characters from the countries array and print it as array
// let newArr =[];
// for(let i = 0; i < countries.length; i++){ 
// 	if(countries[i].length == 4) {
// 		newArr.push(countries[i])
// 	}
// }
// console.log(newArr);
// let newArr1 =[];
// for(let i = 0; i < countries.length; i++){ 
// 	if(countries[i].includes(' ')) {
// 		newArr1.push(countries[i])
// 	}
// }
// console.log(newArr1);


let newArr2 =[];
let newArr3 =[];
for(let i = 1; i < countries.length; i++){ 
	newArr2.push((countries[countries.length - i]).toUpperCase());
	
}
console.log(newArr2);

