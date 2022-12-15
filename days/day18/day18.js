// // const doSomething = (callback) => {
// //     setTimeout(() => {
// //         const skills = ["HTML", "CSS", "JS"];
// //         callback(false, skills);
// //     },200);
// // };
// // const callback = (err, result) => {
// //     if (err) {
// //         return console.log(err);
// //     }
// //     return console.log(result);
// // };
// // doSomething(callback);

// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ["HTML", "CSS", "JS"];
//         if (skills.length > 0) {
//             resolve(skills);
//         } else {
//             reject("Something wrong has happened");
//         }
//     }, 2000);
// });

// doPromise
//     .then((result) => {
//         console.log(result + ",1");
//     })
//     .catch((error) => console.log(error));

// const doPromise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ["HTML", "CSS", "JS"];
//         if (skills.includes("Node")) {
//             resolve("fullstack developer");
//         } else {
//             reject("Something wrong has happened");
//         }
//     }, 2000);
// });

// doPromise1
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => console.error(error));

// const url = 'https://restcountries.com/v2/all' // countries api
// fetch(url)
//   .then(response => response.json()) // accessing the API data as JSON
//   .then(data => {
//     // getting the data
//     console.log(data)
//   })
//   .catch(error => console.error(error))

// const square = async function (n) {
//     return n * n;
// };
// const value =  square(2);
// console.log(value);

// Let us fetch API data using both promise method and async and await method.

// promise
// const url = "https://restcountries.com/v2/all";
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => console.error(error));

// async and await
// const url1 = "https://restcountries.com/v2/all";
// const fetchData = async () => {
//     try {
//         const response = await fetch(url1);
//         const countries = await response.json();
//         console.log(countries);
//     } catch (err) {
//         console.error(err);
//     }
// };
// console.log("===== async and await");
// fetchData();

// Exercises: Level 1
// Read the countries API using fetch and print the name of country, capital, languages, population and area.

// let countryArr = [];
// let result = [];
// const countriesAPI = "https://restcountries.com/v2/all";
// fetch(countriesAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let arr of data) {
//             let obj = {};
//             obj.name = arr.name;
//             obj.capital = arr.capital;
//             (obj.population = "population " + arr.population),
//                 (obj.area = "area " + arr.area + " sqw m"),
//                 result.push(obj);
//         }
//     })
//     .catch((error) => console.error(error));
// console.log(result);
// console.log(result);

// Exercises: Level 2
// Print out all the cat names in to catNames variable.

// const catsAPI = "https://api.thecatapi.com/v1/breeds";
// let catNames = [];
// fetch(catsAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let arr of data) {
//             catNames.push(arr.name);
//         }
//     })
//     .catch((error) => console.error(error));
// console.log(catNames);

// Exercises: Level 3
// Read the cats api and find the average weight of cat in metric unit.

// const catsAPI = "https://api.thecatapi.com/v1/breeds";
// let arrOfNums = [];

// fetch(catsAPI)
//     .then((response) => response.json())
//     .then((data) => {
//         for (let arr of data) {

//             let weightMetric = arr.weight.metric;
//             weightMetric = weightMetric.replace(/[\s]/g,'').replace(/[\-]/g,' ').split(' ');//arrays ~['4', '7']
//             let sum = +weightMetric[0] + +weightMetric[1];
//             arrOfNums.push(sum);
//         }
//         // console.log(arrOfNums);//arr of all sum of weight
//         let result = ((arrOfNums.reduce((a,b) => a + b)) / arrOfNums.length).toFixed(1);
//         console.log(result);
//     })
//     .catch((error) => console.log(error));

// Read the countries api and find out the 10 largest countries
// const countriesAPI = 'https://restcountries.com/v2/all';
// let res = []
// let result = {}
// let array = []
// fetch(countriesAPI)
// .then((response) => response.json())
// .then((data) =>  {
//     for(let arr of data) {
//         res.push(arr);
//         // let result = {}
//         // result.name = arr.name;
//         // result.area = arr.area;
//         // array.push(result)
//         // let arrArea = [];
//         // let area = arr.area;
//         // console.log(arr);
//     }
//     // console.log(res);
//     console.log(res.sort((a,b) => b.area - a.area));
// })
// .catch((error) => console.log(error));
// Read the countries api and count total number of languages in the world used as officials.

const countriesAPI = "https://restcountries.com/v2/all";
let res = [];
let array = [];
fetch(countriesAPI)
    .then((response) => response.json())
    .then((data) => {
        for (let arr of data) {
            res.push(arr.languages);
        }
        for (let obj of res) {
            for (let a of obj) {
                array.push(a.name);
            }
        }
        let seFromLangArr = new Set(array);
        const counts = [];
        for (let lang of seFromLangArr) {
            const filterLang = array.filter((l) => lang === l);
            counts.push({ language: lang, count: filterLang.length });
        }
        return console.log(
            counts.sort((a, b) => b.count - a.count).slice(0, 10)
        );
    })
    .catch((error) => console.log(error));
