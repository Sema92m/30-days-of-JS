// localStorage - to display the localStorage object
// localStorage.clear() - to remove everything in the local storage
// localStorage.setItem() - to store data in the localStorage. It takes a key and a value parameters.
// localStorage.getItem() - to display data stored in the localStorage. It takes a key as a parameter.
// localStorage.removeItem() - to remove stored item form a localStorage. It takes key as a parameter.
// localStorage.key() - to display a data stored in a localStorage. It takes index as a parameter.


// const myName = 'Semi';
// const myLastName = 'Cross';
// const myAge = 25;
// const mycountry = "Poland";
// const myCity = "Swidnica";


// Exercises: Level 2
// Create a student object. The student object will have first name, last name, age, skills, country,
//  enrolled keys and values for the keys. Store the student object in your browser localStorage.

// const student = {
// 	firstNamee: 'Alex',
// 	lastName: 'Cross',
// 	age: 23,
// 	skills: ['HTML','CSS', "JS"],
// 	country: 'Poland'
	
// }


// Exercises: Level 3
// Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

const personAccount = {
	firstName: 'Alex',
	lastName: "Cross",
	incomes: {
		salary: 4000,
		bonus: 540,
		fromRent: 1200
	},
	expenses: {
		houseBills: 800,
		gaz: 130,
		electricicty: 100,
		food: 900,
		other: 1000
	},
	totalIncome() {
		let res = [];
		for(let vals in personAccount.incomes) {
			res.push(personAccount.incomes[vals]);
		}
		return (res.reduce((a,b) => a+b));
	},
	totalExpense() {
		let res = [];
		for(let vals in personAccount.expenses) {
			res.push(personAccount.expenses[vals]);
		}
		return (res.reduce((a,b) => a+b));
	},
	accountBalance() {
		return this.totalIncome() - this.totalExpense();
	}, 
	accountInfo() {
		return `Total income: ${this.totalIncome()}, total expense: ${this.totalExpense()}, account balance: ${this.accountBalance()}`;
	},
	addExpense(expKeys,val) {
		this.expenses[expKeys] = val;
	}, 
	addIncomes(incKeys,val) {
		this.incomes[incKeys] = val;
	} 

}

 
personAccount.addExpense('car',355);
personAccount.addIncomes('extr bous',450);
// console.log(personAccount.incomes);
// console.log(personAccount.expenses);



console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());



console.log(JSON.stringify(personAccount));