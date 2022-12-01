// Exercises: Level 1
// Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// let userInput = prompt('Enter your age:');
// if(userInput >= 18){
// 	alert('You are old enough to drive')
// } else {
// 	alert('Stating to wait for the number of years 18')
// }

// Compare the values of myAge and yourAge using if … else. Based on 
// the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
// let myAge = prompt('My age:')
// let yourAge = prompt('Enter your age:')
// if(myAge == yourAge) {
// 	console.log("same ages")
// } else {myAge > yourAge ? console.log('I am older') : console.log('You older')
// }

// let a = 4;
// let b = 3;
// a>b ? alert(`${a} is greater than ${b}`) : alert(`${b} is greater than ${a}`) 

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let num = prompt('Enter a number:');
// num%2 == 0 ? console.log(`${num} is an even number`) : console.log(`${num} is an odd number`);

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

// let num = 75;
// switch(num> 0 && num >100) {
// 	case num > 80 && num <100:
// 		console.log('A');
// 		break;
// 	case num > 70 && num < 79:
// 		console.log('B');
// 		break;
// 	case num > 60 && num < 69:
// 		console.log('C');
// 		break;
// 	case num > 50 && num < 59:
// 		console.log('D');
// 		break;
// 	default:
// 		console.log('E')
// }

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

// let month = prompt('What is the month now?');
// if(month === 'September' || month === 'October' || month === 'November') {
// 	console.log('The season is Autumn');
// }
// if  (month === 'December' || month === 'January ' || month === 'February') {
// 	console.log('The season is Winter');
// }
// if (month === 'March' || month === 'April ' || month === 'May') {
// 	console.log('The season is Spring');
// }
// if  (month === 'June' || month === 'July ' || month === 'August' ) {
// 	console.log('The season is Summer');
// }


// Exercises: Level 3
// Write a program which tells the number of days in a month.
//   Enter a month: January
//   January has 31 days.

//   Enter a month: JANUARY
//   January has 31 day

//   Enter a month: February
//   February has 28 days.

//   Enter a month: FEbruary
//   February has 28 days.
// Write a program which tells the number of days in a month, now consider leap year.

let monthFromInput = 'may'
let month = monthFromInput.toLowerCase();
switch(month) {
	case 'january ':
		console.log(31);
		break;
	case 'february':
		console.log(28);
		break;
	case 'march':
		console.log(31);
		break;
	case 'april':
		console.log(30);
		break;
	case 'may':
		console.log(31);
		break;
	case 'june':
		console.log(30);
		break;
	case 'july ':
		console.log(31);
		break;
	case 'august ':
		console.log(31);
		break;
	case 'september ':
		console.log(30);
		break;
	case 'october  ':
		console.log(31);
		break;
	case 'november ':
		console.log(30);
		break;
	case 'december ':
		console.log(31);
		break;
		default:
			console.log('Error')
}