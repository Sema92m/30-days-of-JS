let challenge = '30 Days Of JavaScript';
// console.log(challenge.length);

// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0,1))
// console.log(challenge.substring(3))
// console.log(challenge.includes('Script'))
// console.log(challenge.split(''))
// console.log(challenge.split(' '))

// const media = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(media.split(', '))

// console.log(challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt('J'))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))

// const str = 'You cannot end a sentence with because because because is a conjunction';
// console.log(str.indexOf('because'))
// console.log(str.lastIndexOf('because'))
// console.log(str.search('because'))
// let challenge_2 = '     30 Days Of JavaScript   ';
// console.log(challenge.trim())
// console.log(challenge.startsWith('30'))
// console.log(challenge.endsWith('JavaScript'))

// const substr = /a/gi
// console.log(challenge.match(substr))

// const str1 = '30 Days of';

// const str2 = str1.concat(' JavaScript');

// console.log(str2.repeat(2));

// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.")
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
// console.log(typeof(+'10') == typeof(10))
// console.log(Math.ceil(parseFloat('9.8')) == 10)
// const str3 = 'puthon';
// const str4 = 'jargon';
// console.log(str4.includes('on'));

// let randomNum = Math.floor(Math.random() * 101);
// console.log(randomNum);

// let randomNum1 = Math.floor(Math.random() * 51);
// let randomNum2 = 100 - randomNum1;
// console.log(randomNum2);

// let randomNum3 = Math.floor(Math.random() * 256);

// console.log(randomNum3);


// const str4 = 'JavaScript';

// let randomNum5 = Math.floor(Math.random() * str4.length)
// console.log(str4.charAt(randomNum5))


// let str5 = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125'

// console.log(str5)

// let str6 = 'You cannot end a sentence with because because because is a conjunction'

// console.log(str6.substring(31,55))

// const str6 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// const substr1 = /love/gi;
// console.log((str6.match(substr1)).length)

// const str7 = 'You cannot end a sentence with because because because is a conjunction';
// const substr2 = /because/gi;
// console.log((str7.match(substr2)).length)


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const newstr = sentence.replace(/[^\w\s]/g, "");
console.log(newstr)
