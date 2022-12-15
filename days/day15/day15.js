// class Person {
//     constructor(firstName, lastName, country, age, city) {
//         this.firstName = firstName;
//         this.lastName = lastName;

//         this.country = country;
//         this.age = age;
//         this.city = city;
//         this.score = 0;
//         this.skills = [];
//     }
//     getFullName() {
//         const fullName = this.firstName + " " + this.lastName;
//         return fullName;
//     }
//     get getScore() {
//         return this.score;
//     }
//     get getSkills() {
//         return this.skills;
//     }
//     set setScore(score) {
//         this.score += score;
//     }
//     set setSkill(skill) {
//         this.skills.push(skill);
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName();
//         let skills =
//             this.skills.length > 0 &&
//             this.skills.slice(0, this.skills.length - 1).join(", ") +
//                 ` and ${this.skills[this.skills.length - 1]}`;

//         let formattedSkills = skills ? `He knows ${skills}` : "";

//         let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
//         return info;
//     }
//     static favoriteSkill() {
//         const skills = ["HTML", "CSS", "JS", "React", "Python", "Node"];
//         const index = Math.floor(Math.random() * skills.length);
//         return skills[index];
//     }
//     static showDateTime() {
//         let now = new Date();
//         let year = now.getFullYear();
//         let month = now.getMonth() + 1;
//         let date = now.getDate();
//         let hours = now.getHours();
//         let minutes = now.getMinutes();
//         if (hours < 10) {
//             hours = "0" + hours;
//         }
//         if (minutes < 10) {
//             minutes = "0" + minutes;
//         }

//         let dateMonthYear = date + "." + month + "." + year;
//         let time = hours + ":" + minutes;
//         let fullTime = dateMonthYear + " " + time;
//         return fullTime;
//     }
// }

// class Student extends Person {
//     constructor(firstName, lastName, age, country, city, gender) {
//         super(firstName, lastName, age, country, city);
//         this.gender = gender;
//     }

//     saySomething() {
//         console.log("I am a child of the person class");
//     }
//     getPersonInfo() {
//         let fullName = this.getFullName();
//         let skills =
//             this.skills.length > 0 &&
//             this.skills.slice(0, this.skills.length - 1).join(", ") +
//                 ` and ${this.skills[this.skills.length - 1]}`;

//         let formattedSkills = skills ? `He knows ${skills}` : "";
//         let pronoun = this.gender == "Male" ? "He" : "She";

//         let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`;
//         return info;
//     }
// }

// const s1 = new Student(
//     "Asabeneh",
//     "Yetayeh",
//     250,
//     "Finland",
//     "Helsinki",
//     "Male"
// );
// const s2 = new Student("Lidiya", "Tekle", 28, "Finland", "Helsinki", "Female");
// s1.setScore = 1;
// s1.setSkill = "HTML";
// s1.setSkill = "CSS";
// s1.setSkill = "JavaScript";

// s2.setScore = 1;
// s2.setSkill = "Planning";
// s2.setSkill = "Managing";
// s2.setSkill = "Organizing";

// console.log(s1);

// console.log(s1.saySomething());
// console.log(s1.getFullName());
// console.log(s1.getPersonInfo());

// console.log(s2.saySomething());
// console.log(s2.getFullName());
// console.log(s2.getPersonInfo());

// Exercises Level 1
// Create an Animal class. The class will have name, age, color, legs properties and create different methods
// Create a Dog and Cat child class from the Animal Class.

// class Animal {
// 	constructor(name, age, color, legs) {
// 		this.name = name;
// 		this.age = age;
// 		this.color = color;
// 		this.legs = legs;
// 	}
// 	getfullInfo() {
// 		const fullInfo = `Animal name: ${this.name}, age: ${this.age}, color: ${this.color}`;
// 		return fullInfo;
// 	}
// 	getageAndColor() {
// 		const ageAndColor = `Age is ${this.age}, color is ${this.color}`;
// 		return ageAndColor;
// 	}
// }

// const dog = new Animal('Bonia', 7,'Brown', 4)
// const cat = new Animal('Henry', 12,'Dark brown', 4)

// console.log(dog.getfullInfo());
// console.log(cat.getageAndColor());

// // Exercises Level 2
// // Override the method you create in Animal class

// class Dog extends Animal {
// 	constructor(name, age, color, legs, eyes)  {
// 		super(name, age, color, legs)
// 		this.eyes = eyes;
// 	}
// 	saySomething() {
// 		console.log('it is a child of the class  Animal');
// 	}
// 	getfullInfo() {
// 		const fullInfo = `Animal name: ${this.name}, age: ${this.age}, color: ${this.color}, eyes: ${this.eyes}`;
// 		return fullInfo;
// 	}
// }
// const animal2 = new Dog('pety', 5, 'white', 4, 'gray')
// console.log(animal2.getfullInfo());
// console.log(animal2.saySomething());

// Exercises Level 3
// Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
let ages = [
    31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
    31, 34, 24, 33, 29, 26,
];
class Statistics {
    constructor(arr) {
        this.arr = arr;
        // this.min = min;
        // this.max = max;
        // this.rage = range;
    }
    count() {
        return this.arr.length;
    }
    min() {
        return Math.min(...this.arr);
    }
    max() {
        return Math.max(...this.arr);
    }
    range() {
        return Math.max(...this.arr) - Math.min(...this.arr);
    }
    mean() {
        return Math.round(this.arr.reduce((a, b) => a + b) / this.arr.length);
    }
    median() {
        return Math.floor(this.arr.reduce((a, b) => a + b) / this.arr.length);
    }
    mode(num) {
        let number = this.arr.filter((n) => n === num);
        return `'mode: ${num}, 'count': ${number.length}`;
    }
    variance() {
        let mean = Math.round(
            this.arr.reduce((a, b) => a + b) / this.arr.length
        );
        let sqArr = this.arr
            .map((num) => (num - mean) ** 2)
            .reduce((a, b) => a + b);
        return sqArr / this.arr.length;
    }
    std() {
        let mean = Math.round(
            this.arr.reduce((a, b) => a + b) / this.arr.length
        );
        let sqArr = this.arr
            .map((num) => (num - mean) ** 2)
            .reduce((a, b) => a + b);
        return Math.sqrt(sqArr / this.arr.length).toFixed(1);
    }
    freqDist() {
        let setArr = new Set(this.arr);
        let counts = [];
        for (let num of setArr) {
            const filterNum = this.arr.filter((n) => n === num);
            counts.push({ Number: num, Count: filterNum.length });
        }
        return counts;
    }
}
const num = new Statistics(ages);
console.log(num.freqDist());
