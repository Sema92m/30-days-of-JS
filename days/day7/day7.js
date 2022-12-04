// function fullName(firstName, LastName) {

// 	return console.log(firstName, LastName);
// }
// fullName('Szymon', 'Bryczkowski')

// function addNumbers(num1, num2) {

// 	return console.log(num1+num2);
// }
// addNumbers(4,6)

// function areaOfRectangle(length,width) {

// 	return console.log(length * width);
// }
// areaOfRectangle(5,15)

// function perimetrOfRectangle(length, width) {

// 	return console.log((length + width)*2);
// }
// perimetrOfRectangle(4,6)

// function perimetrOfRectangle(length, width,height) {

// 	return console.log((length* width*height))
// }d
// perimetrOfRectangle(4,6,6)

// function areaOfCircle(r) {

// 	return console.log((Math.PI*(r**2)).toFixed(1));
// }
// areaOfCircle(5)

// function circumference(r) {

// 	return console.log((2*Math.PI*r).toFixed(1));
// }
// circumference(5)

// function dencuty(mass, volume) {

// 	return console.log(mass/volume);
// }
// dencuty(100,15)

// function speed(distance, time) {

// 	return console.log(distance/time);
// }
// speed(100,30)

// function convertCelsiusToFahrenheit(celsiusTemperature) {

// 	return console.log(celsiusTemperature*(9/5) + 32);
// }
// convertCelsiusToFahrenheit(30)

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

// function calcBMI(weight,height) {
// 	let BMI = (weight/(height*height)).toFixed(1)
// 	if(BMI < 18.5) {
// 		console.log(`Your BMI is: ${BMI}. Underweight`);
// 	}
// 	if(BMI > 18.5 && BMI < 24.9) {
// 		console.log(`Your BMI is: ${BMI}. Normal Weight`);
// 	}
// 	if(BMI > 25 && BMI < 29.9) {
// 		console.log(`Your BMI is: ${BMI}. Overweight`);
// 	}
// 	if( BMI > 30) {
// 		console.log(`Your BMI is: ${BMI}. Obese`);
// 	}
// }
// calcBMI(78, 1.75)

// function findMax(a,b,c) {

// 	return console.log(Math.max(a,b,c));
// }
// findMax(5,-8,7)

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

// function printArray(arr) {

// 	for(const elem of arr) {
// 		console.log(elem);
// 	}
// }
// printArray([1,2,3,4,5,6,7])

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
// function showDateTime() {
//     let time = new Date();
//     let day = time.getDate();
//     let month = time.getMonth();
//     let hours = time.getHours();
//     let minutes = time.getMinutes();

//     return console.log(
//         `${day}/${month + 1}/${time.getFullYear()} ${hours}:${minutes}`
//     );
// }
// showDateTime();
// 08/01/2020 04:08

// function reverseArr(arr) {
// 	let result = [];
// 	for(let i = 1 ; i<= arr.length; i++){
// 		result.push(arr[arr.length-i]);
// 	}
// 	return console.log(result);
// }
// reverseArr([1,'a','b','c', 2,3])

// function capitalizeArr(arr) {
// 	let newArr = [];
//     for (let i = 0; i < arr.length; i++){
// 		newArr.push(arr[i].toUpperCase())
// 	} return console.log(newArr);
// }
// capitalizeArr(['a', 'b','c'])
// function addingItem(arr,item) {
// 	let arr1 = []
// 	// return console.log(arr1.concat(arr,item));
// 	return console.log(arr1 = [...arr,item]);
// }
// addingItem([1,2,3],4)

// function addingItem(arr) {

// 	return console.log(arr.slice(0,-1));

// }
// addingItem([1,2,3])

// function sumOfNumbers(n) {
// 	let sum = 0;
//     for (let i = 0; i <= n; i++) {
// 	sum += i;
// 	}
//     return console.log(sum);;
// }
// sumOfNumbers(5);

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// function sumOdd(arr) {
//     let result = 0;
//     for (let i = 1; i <= arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             result = result + i;
//         }
//     }
//     return console.log(result);
// }
// sumOdd([1, 2, 3, 4, 5,6]);

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// function countEvensAndOddNumbers(num) {
//     let sumOdd = 0;
//     let sumEven = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 2 !== 0) {
//             sumOdd = sumOdd + 1;
//         }
//         if (i % 2 == 0) {
//             sumEven = sumEven + 1;
//         }
//     }
//     return console.log(sumOdd,sumEven);
// }
// countEvensAndOddNumbers(100);

// function sumOfNums(...args) {
// 	let sum = 0;
// 	for(const arg of args){
// 		sum += arg;
// 	}
// 	return console.log(sum);
// }
// sumOfNums(1,2,3,4,5,6)

// Writ a function which generates a randomUserIp.192.158.1.38.

// function generateIP() {
// 	return console.log(`${Math.floor((Math.random() * 256))}.${Math.floor((Math.random() * 256))}.${Math.floor((Math.random() * 256))}.${Math.floor((Math.random() * 256))}`);
// }
// generateIP()

// Write a function which generates a randomMacAddress
// function randomMacAdress() {
//     let str = "0123456789abcdefABCDEF";

//     function a() {
//         let result = '';
//         for (let i = 0; i < 2; i++) {
// 			result += str.charAt(Math.round(Math.random() * str.length));
// 		}
// 		return result;
//     }

//     return console.log(`${a()}:${a()}:${a()}:${a()}`);
// }
// randomMacAdress();

// Declare a function name randomHexaNumberGenerator. When this function is
// called it generates a random hexadecimal number. The function return the hexadecimal number.#ee33df'`

// function randomHexaNumberGenerator() {
// 	const str = "0123456789abcdef";
// 	let result = '';
// 	for(let i = 0; i < 6; i++){
// 		result += str.charAt(Math.round(Math.random()* str.length))
// 	}

// 	return console.log(`#${result}`);
// }
// randomHexaNumberGenerator()

// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// function userIdGenerator() {
// 	let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// 	let result = '';
// 	for(let i = 0; i < 6; i++){
// 		result += str.charAt(Math.round(Math.random()* str.length))
// 	}
// 	return console.log(result);
// }
// userIdGenerator()

// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser.
// It doesn’t take any parameter but it takes two inputs using prompt().
//  One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// function userIdGeneratedByUser() {
// 	let numberOfchar = prompt('Enter number of characters:');
// 	let numberOfID = prompt('Enter number of ID:');

// 	function genID() {
// 		let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// 		let result = '';
// 		for(let i = 0; i < numberOfchar; i++){
// 			result += str.charAt(Math.round(Math.random()* str.length));
// 		}
// 		return console.log(result);
// 	}
// 		for(let i = 0; i < numberOfID; i++){
// 			genID();
// 		}
// }
// userIdGeneratedByUser()

// function rgbColorGenerator() {
// 	function randomNum() {
// 		let num =  Math.floor(Math.random() * 255);
// 		return num;
// 	}
// 	return console.log(`rgb(${randomNum()},${randomNum()},${randomNum()})`);
// }
// rgbColorGenerator()

// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

// function arrayOfHexaColors(num) {
//     function genHex() {
// 		const str = '0123456789ABCDEF';
// 		let result = "#";
// 			for (let i = 0; i < 6; i++) {
// 				result += str[Math.floor(Math.random() * 16)];
// 			}
// 		return console.log(result);
// 	}
// 	for(let i = 0; i < num; i++){
// 		genHex();
// 	}
// }
// arrayOfHexaColors(100);

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
// function convertHexaToRgb(hex) {
// 	let result = [];
// 	let hexWithOutHASH = hex.toLowerCase().slice(1,7).split('');
// 	//'abcdef' to numbers(10,11,12..15)
// 	for(let i = 0; i < hexWithOutHASH.length; i++){
// 		if(hexWithOutHASH[i] == 'a') {
// 			hexWithOutHASH[i] = '10';
// 		}
// 		if(hexWithOutHASH[i] == 'b') {
// 			hexWithOutHASH[i] = '11';
// 		}
// 		if(hexWithOutHASH[i] == 'c') {
// 			hexWithOutHASH[i] = '12';
// 		}
// 		if(hexWithOutHASH[i] == 'd') {
// 			hexWithOutHASH[i] = '13';
// 		}
// 		if(hexWithOutHASH[i] == 'e') {
// 			hexWithOutHASH[i] = '14';
// 		}
// 		if(hexWithOutHASH[i] == 'f') {
// 			hexWithOutHASH[i] = '15';
// 		}
// 		result.push(hexWithOutHASH[i])
// 	}
// 	//multiply 0,2,4 to 16
// 	for(let i = 0; i < result.length; i++){
// 		if(result[i]% 2 == 0) {
// 			result[i] = result[i] * 16;
// 		}
// 	}
// 	console.log(`rgb(${+result[0] + +result[1]}, ${+result[2] + +result[3]}, ${+result[4] + +result[5]})`);
// }
// convertHexaToRgb('#AbcdeF');

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
// function convertRgbToHexa1(r,g,b) {
// 	let newArr = [r,g,b];
// 	let result1 = [];
// 	let result2 = [];
// 	// function changeNumtoABSDEF(arg) {
// 	// 	if(arg == '10'){
// 	// 		arg = 'a';
// 	// 	}
// 	// 	if(arg == '11'){
// 	// 		arg = 'b';
// 	// 	}
// 	// 	if(arg == '12'){
// 	// 		arg = 'c';
// 	// 	}
// 	// 	if(arg == '13'){
// 	// 		arg = 'd';
// 	// 	}
// 	// 	if(arg == '14'){
// 	// 		arg = 'e';
// 	// 	}
// 	// 	if(arg == '15'){
// 	// 		arg = 'f';
// 	// 	}
// 	// 	return arg;
// 	// }
// 	//if 1 == 255
// 	for(let i = 0; i < newArr.length; i++){
// 		if(newArr[i] == 1) {
// 			newArr[i] = 255;
// 		}
// 	}
// 	//first num find
// 	for(let i = 0; i < newArr.length; i++){
// 		let firstNum = Math.floor((newArr[i] / 16)) + "";
// 		if(firstNum == '10'){
// 			firstNum = 'a';
// 		}
// 		if(firstNum == '11'){
// 			firstNum = 'b';
// 		}
// 		if(firstNum == '12'){
// 			firstNum = 'c';
// 		}
// 		if(firstNum == '13'){
// 			firstNum = 'd';
// 		}
// 		if(firstNum == '14'){
// 			firstNum = 'e';
// 		}
// 		if(firstNum == '15'){
// 			firstNum = 'f';
// 		}
// 		result1.push(firstNum);
// 	}
// 	//second num find
// 	for(let i = 0; i < newArr.length; i++){
// 		let secondNum = +(((newArr[i] / 16).toFixed(3) + "").split('.')[1] * 0.016).toFixed(0);
// 		if(secondNum == 10 ) {
// 			secondNum = 'a'
// 		}
// 		if(secondNum == 11){
// 			secondNum = 'b';
// 		}
// 		if(secondNum == 12){
// 			secondNum = 'c';
// 		}
// 		if(secondNum == 13){
// 			secondNum = 'd';
// 		}
// 		if(secondNum == 14){
// 			secondNum = 'e';
// 		}
// 		if(secondNum == 15){
// 			secondNum = 'f';
// 		}
// 		result2.push(secondNum);
// 	}
// 	return console.log(`#${result1[0]+result2[0]+result1[1]+result2[1]+result1[2]+result2[2]}`);
// }
// convertRgbToHexa1(99, 220, 1)

// function generateColors(typeOfColor, number) {

// 	function randomHexaNumberGenerator() {
// 		const str = "0123456789abcdef";
// 		let result = '';
// 		for(let i = 0; i < 6; i++){
// 			result += str.charAt(Math.round(Math.random()* str.length))
// 		}
// 		return `#${result}`;
// 	}

// 	function randomRGBNumberGenerator() {
// 		function randomNum() {
// 			let mathRandom = Math.floor(Math.random() * 255);
// 			return mathRandom;
// 		}
// 		return `rgb(${randomNum()},${randomNum()},${randomNum()})`;
// 	}

// 	if(typeOfColor == 'hexa') {
// 		for(let i = 0; i < number; i++){
// 			console.log(randomHexaNumberGenerator());

// 		}
// 	}

// 	if(typeOfColor == 'rgb') {
// 		for(let i = 0; i < number; i++){
// 			console.log(randomRGBNumberGenerator());
// 		}
// 	}
// }

// generateColors('rgb',5);
