// Exercises: Level 1
// Create a closure which has one inner function

// function outer() {
//     let count = 0;
//     function inner1() {
//         count++;
//         return count;
//     }
//     function inner2() {
//         count--;
//         return count;
//     }
//     return {a1:inner1(), a2:inner2()}
// }
// const outerFunc = outer();

// console.log(outerFunc.a1);
// console.log(outerFunc.a2);

// Create a closure which has three inner functions

// function countNum() {
// 	let count = 0;

// 	function countPlus2() {
// 		count +=  2;
// 		return count;
// 	}
// 	function countPlus4() {
// 		count +=  4;
// 		return count;
// 	}
// 	function countMinus3() {
// 		count -= 3;
// 		return count;
// 	}
// 	return {
// 		plus2: countPlus2(),
// 		plus4: countPlus4(),
// 		minus3: countMinus3()
// 	}

// }
// let countFunc = countNum();

// console.log(countFunc.minus3);

// Exercises: Level 3
// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables.
//  It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions.
//  Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.+

function personAccount() {
    const firstname = "Semi";
    const lastname = "Kross";
    const incomes = {
        salary: 5700,
        bonus: 700,
        extra: 500,
    };
    const expenses = {
        gas: 200,
        electricity: 200,
        internet: 50,
        store: 800,
        other: 700,
    };

    let inc = function totalIncome() {
        return Object.values(incomes).reduce((a, b) => a + b);
    };
    let exp = function totalExpense() {
        return Object.values(expenses).reduce((a, b) => a + b);
    };
    function accountInfo() {
        return `${firstname} ${lastname}. Total income: ${inc()}, total expense: ${exp()}`;
    }
    function accountBalance() {
        return `BALANCE: ${inc() - exp()}`;
    }
    let addInc = function addIncome(title, quote) {
        incomes[title] = quote;
        return incomes;
    };
    let addExp = function addExpense(title, quote) {
        expenses[title] = quote;
        return expenses;
    };

    return {
        income: inc(),
        expense: exp(),
        info: accountInfo(),
        balance: accountBalance(),
        addInc,
        addExp,
    };
}

const persAcc = personAccount();
console.log(persAcc.addInc("qwe", 123));
console.log(persAcc.addExp("zzz", 333));
