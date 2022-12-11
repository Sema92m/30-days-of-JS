// See the example below to learn how to use set.

// const languages = [
//     "English",
//     "Finnish",
//     "English",
//     "French",
//     "Spanish",
//     "English",
//     "French",
// ];
// const langSet = new Set(languages);
// // console.log(langSet) // Set(4) {"English", "Finnish", "French", "Spanish"}
// // console.log(langSet.size) // 4

// const counts = [];
// const count = {};
// for (const l of langSet) {
//     const filteredLang = languages.filter((lng) => lng === l);
//     console.log(filteredLang); // ["English", "English", "English"]
//     counts.push({ lang: l, count: filteredLang.length });
// }
// console.log(counts);
// [
//   { lang: 'English', count: 3 },
//   { lang: 'Finnish', count: 1 },
//   { lang: 'French', count: 2 },
//   { lang: 'Spanish', count: 1 },
// ]


// To find an intersection of two sets can be achieved using filter. Lets find the intersection of set A and set B (A ∩ B)

// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]

// let A = new Set(a)
// let B = new Set(b)

// let c = a.filter((num) => B.has(num))
// let C = new Set(c)

// console.log(C)
// Set(3) {3, 4, 5}



// Difference of sets
// To find an the difference between two sets can be achieved using filter. Lets find the different of set A and set B (A \ B)
// let a = [1, 2, 3, 4, 5]
// let b = [3, 4, 5, 6]
// let A = new Set(a)
// let B = new Set(b)
// let c = a.filter((num) => !B.has(num))
// let C = new Set(c)
// console.log(C)
// Set(2) {1, 2}


// Creating an Map from array
// let countries = [
//   ['Finland', 'Helsinki'],
//   ['Sweden', 'Stockholm'],
//   ['Norway', 'Oslo'],
// ]
// const map = new Map(countries)
// console.log(map)
// console.log(map.size)


// const newSet = new Set();
// for(let i = 0; i<=10; i++) {
// 	newSet.add(i);
// }
// console.log(newSet);

// newSet.delete(0);
// console.log(newSet);
// newSet.clear();
// console.log(newSet);

// const strSet = new Set();
// let strArr = ['a', 'b', 'c', 'd', 'e'];
// for(let letter of strArr) {
// 	strSet.add(letter)
// }

// console.log(strSet);

// const countryMap = new Map();
// const counrties = ['Poland', 'Litwa', 'Italy', 'Germany', 'Figi']
// for(const country of counrties) {
// 	countryMap.set(country, country.length)
// }
// console.log(countryMap);


// Exercises:Level 2
// Find a union b //убрать повторения из соединённых двух массивов 
// Find a intersection b//только одинаковые цифры в двух массивах
// Find a with b //Difference of sets

const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// let union = [...a,...b];
// let unionSet = new Set(union);
// console.log(unionSet);

// let B = new Set(b);
// let c = a.filter((num) => B.has(num));
// let C = new Set(c);
// console.log(C);


// let B = new Set(b);
// let c = a.filter((num) => !B.has(num)) //каждая цифра в а сравнивается с б и выводит не повторяющиеся
// let C = new Set(c)
// console.log(c);
// console.log(C);

