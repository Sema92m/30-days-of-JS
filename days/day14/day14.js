// Error Types
// ReferenceError: An illegal reference has occurred. A ReferenceError is thrown if we use a variable that has not been declared.
// let firstName = 'Asabeneh'
// let fullName = firstName + ' ' + lastName
// console.log(fullName)
// Uncaught ReferenceError: lastName is not defined
//     at <anonymous>:2:35
// SyntaxError: A syntax error has occurred
// let square = 2 x 2
// console.log(square)
// console.log('Hello, world")
// Uncaught SyntaxError: Unexpected identifier
// TypeError: A type error has occurred
// let num = 10
// console.log(num.toLowerCase())
// Uncaught TypeError: num.toLowerCase is not a function
//     at <anonymous>:2:17

// try {
// 	let num = '1';
// 	let num2 = num + num3
// } catch(err) {
// 	console.log('1');
// 	console.log(err);
// 	console.log('1');
// } finally {
// 	console.log('DOne');
// }

// const throwErrorExampleFun = () => {
//     let x = "";
//     try {
//         if (x == "") throw "empty";
//         if (isNaN(x)) throw "not a number";
//         x = Number(x);
//         if (x < 5) throw "too low";
//         if (x > 10) throw "too high";
//     } catch (err) {
//         console.log(err);
//     }
// };
// throwErrorExampleFun();

