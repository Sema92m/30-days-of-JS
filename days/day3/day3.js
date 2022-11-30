// const FirstName = 'Simon',
// 		lastName = 'Kros',
// 		country = 'Poland',
// 		city = 'Swidnica',
// 		age = 25,
// 		isMarried = false,
// 		year = 1995;


// console.log('10' === 10)
// console.log(parseInt('9.8') == 10)


// console.log(4 > 3 && 10 < 12)
// console.log(4 > 3 && 10 > 12)
// console.log(4 > 3 || 10 < 12)
// console.log(4 > 3 || 10 > 12)
// console.log(!(4 > 3))
// console.log(!(4 < 3))
// console.log(!(false))
// console.log(!(4 > 3 && 10 < 12))
// console.log(!(4 > 3 && 10 > 12))
// console.log(!(4 === '4'))
		

// const date = new Date;
// // What is the year today? 
// console.log(date.getFullYear())
// // What is the month today as a number?
// console.log(date.getMonth() + 1)
// // What is the date today?
// console.log(date.getDate())
// // What is the day today as a number?
// console.log(date.getDay())
// // What is the hours now?
// console.log(date.getHours())
// // What is the minutes now?
// console.log(date.getMinutes())
// // Find out the numbers of seconds elapsed from January 1, 1970 to now.
// console.log(date.getTime())

	
// let base = prompt('Enter base:', 20);
// let height = prompt('Enter height:', 10);
// alert(`The area of the triangle is ${base * height * 0.5}`);
	
// let sideA = prompt('Enter side a:');
// let sideB = prompt('Enter side b:');
// let sideC = prompt('Enter side c:');
// alert(`The perimeter of the triangle is ${+sideA + +sideB + +sideC}`);


// let recLengthA = prompt('Enter side a:');
// let recLengthB = prompt('Enter side b:');
// alert(`The area of the rectangle is ${+recLengthA * +recLengthB} and the perimeter of rectangle ${+recLengthA + +recLengthB}`);

// let raduis = prompt('Enter radius:');

// alert(`The area of the circle is ${(+raduis * 3.1415).toFixed(2)} and the circumfrenece is ${(2 * +raduis * 3.1415).toFixed(2)} `);

// let interceptX = prompt('Enter x-intercept:')

// alert(`Slope is ${2* +interceptX - 2}`)


// let hours = prompt('Enter hours:')
// let ratePerHour = prompt('Enter rate per house:')
// alert(`Your weekly earning is ${+hours * +ratePerHour}`)


// If the length of your name is greater than 7 say, your name is long else say your name is short.

// let yourName = prompt('Enter your name:');
// if(yourName.length > 7) {
// 	 alert('your name is long')
// } else {
// 		 alert('your name is short')
// }


// Compare your first name length and your family name length and you should get this output.

// let firstName = prompt('Enter first name:');
// let lastName = prompt('Enter last name:');
// if(firstName.length > lastName.length) {
// 	alert(`Your first name ${firstName} is longer than your family namesewn ${lastName}`)
// }
// if(firstName.length < lastName.length) {
// 	alert(`Your first name ${firstName} is shoter than your family name ${lastName}`)
// }


// Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
// let userAge = prompt('Enter birth year:')
// let curYear = (new Date).getFullYear()
// if((curYear - userAge) >= 18 ) {
// 	alert(`You are ${curYear - userAge}.You are old enough to drive`)
// }
// if((curYear - userAge) < 18 ) {
// 	alert(`You are ${curYear - userAge}. You will be allowed to drive after 3 years.`)
// }

// Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
// let curAge = prompt('Enter your age:');

// console.log(`${curAge * 365 * 24 * 60 * 60} my age`);
// if(curAge){
// 	alert(`You lived ${curAge * 365 * 24 * 60 * 60} seconds.`);
// }


// Create a human readable time format using the Date time object
let curtime = new Date();
let curYear = curtime.getFullYear();
let curMonth = curtime.getMonth() +1;
let curDay = curtime.getDay();
let curHours = curtime.getHours();
let curMinutes = curtime.getMinutes();
if(curMinutes < 10) {
	curMinutes = '0' + curMinutes
}
if(curHours < 10) {
	curHours = '0' + curHours
}


console.log(`${curYear}-${curMonth}-${curDay} ${curHours}:${curMinutes} `)
console.log(`${curDay}-${curMonth}-${curYear} ${curHours}:${curMinutes} `)
console.log(`${curDay}/${curMonth}/${curYear} ${curHours}:${curMinutes} `)
// YYYY-MM-DD HH:mm
// DD-MM-YYYY HH:mm
// DD/MM/YYYY HH:mm