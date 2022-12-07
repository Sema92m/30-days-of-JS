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

// const users = [
//     {
//         _id: "ab12ex",
//         username: "Alex",
//         email: "alex@alex.com",
//         password: "123123",
//         createdAt: "08/01/2020 9:00 AM",
//         isLoggedIn: false,
//     },
//     {
//         _id: "fg12cy",
//         username: "Asab",
//         email: "asab@asab.com",
//         password: "123456",
//         createdAt: "08/01/2020 9:30 AM",
//         isLoggedIn: true,
//     },
//     {
//         _id: "zwf8md",
//         username: "Brook",
//         email: "brook@brook.com",
//         password: "123111",
//         createdAt: "08/01/2020 9:45 AM",
//         isLoggedIn: true,
//     },
//     {
//         _id: "eefamr",
//         username: "Martha",
//         email: "martha@martha.com",
//         password: "123222",
//         createdAt: "08/01/2020 9:50 AM",
//         isLoggedIn: false,
//     },
// {
//     _id: "ghderc",
//     username: "Thomas",
//     email: "thomas@thomas.com",
//     password: "123333",
//     createdAt: "08/01/2020 10:00 AM",
//     isLoggedIn: false,
//     // },
// ];

// function signUp(_id$, username$, email$, password$, isLoggedIn$) {
//     const obj = {
//         _id: _id$,
//         username: username$,
//         email: email$,
//         password: password$,
//         createdAt: new Date().toLocaleString().replace(/\,/g, ''),
//         isLoggedIn: isLoggedIn$,
//     };
//     for (const arr of users) {
//         let checkName = Object.values(users).filter(name => name.     === username$);
//         if (checkName.length === 0) {
//             return users.push(obj), console.log("User added");
//         } else {
//             return console.log("Username is already exists");
//         }
//     }
// }
// signUp("123", "Semi", "sema22@mai.pl", "14565", false);

// b. Create a function called signIn which allows user to sign in to the application
// function signIn(username$) {
//     for (const object of users) {
//         if (object.username === username$) {
//             object.isLoggedIn = true;
//             console.log(object);
//         } else {
//             console.log("error");
//         }
//     }
// }
// signIn("Martha");

const products = [
    {
        _id: "eedfcf",
        name: "mobile phone",
        description: "Huawei Honor",
        price: 200,
        ratings: [
            { userId: "fg12cy", rate: 5 },
            { userId: "zwf8md", rate: 4.5 },
        ],
        likes: ['semi',1,2,3],
    },
    {
        _id: "aegfal",
        name: "Laptop",
        description: "MacPro: System Darwin",
        price: 2500,
        ratings: [],
        likes: ["fg12cy"],
    },
    {
        _id: "hedfcg",
        name: "TV",
        description: "Smart TV:Procaster",
        price: 400,
        ratings: [{ userId: "fg12cy", rate: 5 }],
        likes: ["fg12cy"],
    },
];

// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product
// function rateProduct(productID, newUserId, newRate) {
//     let ratingObj = {
//         userId: newUserId,
//         rate: newRate
//     };
//     for (let obj of products) { //obj is big objects
//         for (let id in obj) { //id id keys, obj[id] -values
//             if(obj[id] === productID) {
//                 obj.ratings.push(ratingObj);
//                 console.log(products);
//                 return console.log('Rating pushed');
//             }
//         }
//     }
// }
// rateProduct("hedfcg", "123", 4);

// Create a function called averageRating
//  which calculate the average rating of a product

// function averageRating(arr, productID) {
//     let ObjRatingsLength = 0;
//     let result = [];
//     for (const object of arr) {
//         //object.ratings-is array of objects
//         if (object._id == productID) {
//             for (let rateObj of object.ratings) {
//                 result.push(rateObj.rate);
//                 ObjRatingsLength = object.ratings.length;
//             }
//         }
//     }
//     result = result.reduce((sum, curr) => sum + curr);
//     return console.log(
//         `Average rating of product id:'${productID}' is ${(
//             result / ObjRatingsLength
//         ).toFixed(1)}`
//     );
// }
// averageRating(products, "eedfcf");

// function averageRating(arr,productID) {
//     let ObjRatings = [];
//     let numArray = [];
//     let result = 0;
//     for (let obj of arr) {
//         //obj is one object in products
//         ObjRatings.push(obj.ratings);
//         console.log(obj.ratings);
//     }
//     // console.log(ObjRatings);
//     for(let objSmall of ObjRatings) {
//         for(let i of objSmall){
//             numArray.push(i.rate);
//             result = ((numArray.reduce((a,b) => a + b)) / numArray.length).toFixed(1);
//         }
//     }
//     console.log(result);
// }
// averageRating(products,"eedfcf");


// Create a function called likeProduct. This function will helps to like to the product
//  if it is not liked and remove like if it was liked.

// function likeProduct(arr,producctID,userID) {
//     let curArr = arr.find(item => item._id == producctID);
//     let likesArr = curArr.likes;
//     let indexOfLike = likesArr.indexOf(userID);
//     if(indexOfLike !== -1) {
//         likesArr.splice(indexOfLike,1);
//         console.log(`Like from '${userID}' removed (product ID: ${producctID})`);
//     } if (indexOfLike == -1) {
//         likesArr.push(userID);
//         console.log(`Like from '${userID}' added (product ID: ${producctID})`);
//     }
//     return  console.log(curArr);
// }

// likeProduct(products,"aegfal", "fg12cy");