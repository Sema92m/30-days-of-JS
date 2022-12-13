// Escape character(\) in RegExp
// const pattern = /\d/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["1", "2", "2", "0", "2", "0"], this is not what we want
// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)

// console.log(matches)  // ["12", "2020"], this is not what we want
// One or more times(+)
// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)
// console.log(matches)  // ["12", "2020"], this is not what we want
// Period(.)
// const pattern = /[a]./g  // this square bracket means a and . means any character except new line
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ["an", "an", "an", "a ", "ar"]
// const pattern = /[a].+/g  // . any character, + any character one or more times
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']
// Zero or more times(*)
// Zero or many times. The pattern may not occur or it can occur many times.

// const pattern = /[a].*/g  //. any character, + any character one or more times
// const txt = 'Apple and banana are fruits'
// const matches = txt.match(pattern)

// console.log(matches)  // ['and banana are fruits']

// Calculate the total annual income of the person from the following text.
// let str =  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
// let result = str.match(/\d+/g).reduce((acc,cur) => acc + +cur,0)
// console.log(result);

// let str = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.'

// let sortedPoints  = str.match(/.\d{1,3}/g).sort( (a, b) => a - b ).map(Number);
// console.log(Math.abs(sortedPoints.at(0) - sortedPoints.at(-1)));

// Write a function called tenMostFrequentWords which get the ten most frequent word from a string?

// let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

// function tenMostFrequentWords(arr, num) {
//     let arrParagraf = arr.split(" "); //array of words
//     let setParagraf = new Set(arrParagraf);
//     const counts = [];
//     for (let word of setParagraf) {
//         const filterWord = arrParagraf.filter((words) => words === word);
//         counts.push({ word: word, count: filterWord.length });
//     }
//     return console.log(counts.sort((a,b) => b.count - a.count).slice(0, num));
// }
// tenMostFrequentWords(paragraph, 10);

// Exercises: Level 3
// Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.

// sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
// function cleanText(str) {
// 	let result = ''
// 	return result = str.replace(/[\@\#\$\%\&\;]/g,'')
// }
// console.log(cleanText(sentence))

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
let str2 = 'I am a teacher and I love teaching There is nothing as more rewarding as educating and empowering people I found teaching more interesting than any other jobs Does this motivate you to be a teacher'
// console.log(sentence.replace(/[\@\#\$\%\&\;\.\,\!\?]/g, ""));


// function tenMostFrequentWords(str, num) {
//     let arrParagraf = str.replace(/[\@\#\$\%\&\;\.\,\!\?]/g, "").split(" ");
//     let setParagraf = new Set(arrParagraf);
//     const counts = [];
//     for (let word of setParagraf) {
//         const filterWord = arrParagraf.filter((words) => words === word);
//         counts.push({ word: word, count: filterWord.length });
//     }
//     return console.log(counts.sort((a, b) => b.count - a.count).slice(0, num));
// }
// tenMostFrequentWords(sentence, 20);
