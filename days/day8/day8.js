// const dog = {
// 	name: "Bonia",
// 	legs: 4,
// 	color: 'brown',
// 	bark: function(){
// 		return 'Woof Woof';
// 	}
// }

// dog.breed = 'Spaniel';

// dog.getDogInfo = function() {
// 	let info = `Dog info:\nName: ${this.name} \nBreed: ${this.breed} \nColor: ${this.color} `;
// 	return info;
// }

// console.log(dog.getDogInfo());

// const users = {
//     Alex: {
//         email: "alex@alex.com",
//         skills: ["HTML", "CSS", "JavaScript"],
//         age: 20,
//         isLoggedIn: false,
//         points: 30,
//     },
//     Asab: {
//         email: "asab@asab.com",
//         skills: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "Redux",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node",
//         ],
//         age: 25,
//         isLoggedIn: false,
//         points: 50,
//     },
//     Brook: {
//         email: "daniel@daniel.com",
//         skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
//         age: 30,
//         isLoggedIn: true,
//         points: 50,
//     },
//     Daniel: {
//         email: "daniel@alex.com",
//         skills: ["HTML", "CSS", "JavaScript", "Python"],
//         age: 20,
//         isLoggedIn: false,
//         points: 40,
//     },
//     John: {
//         email: "john@john.com",
//         skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
//         age: 20,
//         isLoggedIn: true,
//         points: 50,
//     },
//     Thomas: {
//         email: "thomas@thomas.com",
//         skills: ["HTML", "CSS", "JavaScript", "React"],
//         age: 20,
//         isLoggedIn: false,
//         points: 40,
//     },
//     Paul: {
//         email: "paul@paul.com",
//         skills: [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "MongoDB",
//             "Express",
//             "React",
//             "Node",
//         ],
//         age: 20,
//         isLoggedIn: false,
//         points: 40,
//     },
// };

// const arrUsers = Object.entries(users).sort((a,b) => b[1].skills.length - a[1].skills.length)[0];
// // console.log(arrUsers);

// console.log(arrUsers);
// const result = users.sort((a,b) => b.skills.length - a.skills.length)
// console.log(result);

// Count logged in users, count users having greater than equal to 50 points from the following object.
// const loggedIn = Object.values(users).filter(user => user.isLoggedIn).length;
// const morePoints = Object.values(users).filter(user => user.points >= 50).length;
// console.log(arrUsers);

// console.log(morePoints);

// Find people who are MERN stack developer from the users object

// const mern = Object.entries(users).filter(([_,user]) => user.skills.includes("MongoDB","Express","React","Node"));
// const mern2 = Object.entries(users).filter(([_,user]) => user.skills.includes("MongoDB", "Express", "React", "Node")).map(([name]) => name).join(", ")
// console.log(mern2);

// Set your name in the users object without modifying the original users object
// const newUsers = Object.assign(users)
// newUsers.name = 'Semi';
// console.log(newUsers);

// Get all keys or properties of users object

// const keysOFobj = Object.keys(users)
// const valFobj = Object.values(users)
// console.log(keysOFobj, valFobj);

// Use the countries object to print a country name, capital, populations and languages.

// Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount = {
//     firstName: 'Semi',
//     lastName: 'Bryczkowski',
//     incomes: {
//         rent: 1500,
//         salary: 5500
//     },
//     expenses: {
//         credit: 600,
//         bills: 1200,
//         gas: 250,
//         food: 1500,
//         other: 300
//     },
//     totalIncome: function() {
//         return `${this.incomes.rent + this.incomes.salary}`
//     },
//     totalExpense: function(){
//          return `${this.expenses.credit +this.expenses.bills+this.expenses.gas+this.expenses.food+this.expenses.other}`
//     },
//     accountInfo: function() {
//         return `Account info:\n${this.firstName} ${this.lastName}\nTotal incomes: ${this.totalIncome()}\nTotal Expences: ${this.totalExpense()}`
//     },
//     accountBalance: function() {
//         return `${this.totalIncome() - this.totalExpense()}`
//     },
//     addIncome: function() {
//        const inc = Object.values(personAccount).map(incomes => incomes.push('Bonus: 400'))
//     }

// }
// console.log(Object.keys(personAccount).length);
// console.log(personAccount.addIncome());
// console.log(personAccount.incomes);

// Imagine you are getting the above users collection from a MongoDB database. a.
//  Create a function called signUp which allows user to add to the collection.
//   If user exists, inform the user that he has already an account.

const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2020 9:00 AM",
        isLoggedIn: false,
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2020 9:30 AM",
        isLoggedIn: true,
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2020 9:45 AM",
        isLoggedIn: true,
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2020 9:50 AM",
        isLoggedIn: false,
    },
    {
        _id: "ghderc",
        username: "Thomas",
        email: "thomas@thomas.com",
        password: "123333",
        createdAt: "08/01/2020 10:00 AM",
        isLoggedIn: false,
    },
];

Object.values(users).forEach(value => console.log(value));

// const userName = "Alex";
// for (const arr of users) {
//     for (let key in arr) {
//         if (arr[key] == userName) {
//             console.log('error');
//         }
//     }
// }

// function signUp(_id$, username$, email$, password$, isLoggedIn$) {
//     const obj = {
//         _id: _id$,
//         username: username$,
//         email: email$,
//         password: password$,
//         createdAt: new Date().toISOString().slice(0, 10),
//         isLoggedIn: isLoggedIn$,
//     }; 
//     for (const arr of users) {
//         for (let key in arr) {
//             // console.log(arr[key]);
//             if (arr[key] == username$) {
//                 console.log('Username is already exists');
//             } 
//             else {
//                 users.push(obj);
                
//             }
//         }
//     }
// }
// signUp("123", "Asab", "sema22@mai.pl", "14565", false);
