// Exercises Level 1
// Change skills array to JSON using JSON.stringify()
// const skills = [`HTML`, 'CSS', 'JS', 'React','Node', 'Python']
// const skillsObj = JSON.stringify(skills)
// console.log(skillsObj);

// Stringify the age variable
// let age = 250;
// const ageObj = JSON.stringify(age)
// console.log(typeof(ageObj));
// Stringify the isMarried variable
// let isMarried = true
// let isMarriedobj = JSON.stringify(isMarried)
// console.log(typeof(isMarriedobj));
// Stringify the student object

// const student = {
// 	firstName:'Asabeneh',
// 	lastName:'Yetayehe',
// 	age:250,
// 	isMarried:true,
// 	skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
//   }
// let studentObj = JSON.stringify(student)
// console.log(studentObj);
// Exercises Level 2
// Stringify the students object with only firstName, lastName and skills properties

// let studentsObject = JSON.stringify(student, ['firstName','lastName','skills'],4)
// console.log(studentsObject);

// Exercises Level 3
// Parse the txt JSON to object.
// Find the user who has many skills from the variable stored in txt.
const txt = `{
	  "Alex": {
		  "email": "alex@alex.com",
		  "skills": [
			  "HTML",
			  "CSS",
			  "JavaScript"
		  ],
		  "age": 20,
		  "isLoggedIn": false,
		  "points": 30
	  },
	  "Asab": {
		  "email": "asab@asab.com",
		  "skills": [
			  "HTML",
			  "HTTP",
			  "CSS",
			  "React",
			  "Node"
		  ],
		  "age": 25,
		  "isLoggedIn": false,
		  "points": 50
	  },
	  "Brook": {
		  "email": "daniel@daniel.com",
		  "skills": [
			  "HTML",
			  "CSS",
			  "JavaScript",
			  "React",
			  "Redux"
		  ],
		  "age": 30,
		  "isLoggedIn": true,
		  "points": 50
	  },
	  "Daniel": {
		  "email": "daniel@alex.com",
		  "skills": [
			  "HTML",
			  "CSS",
			  "JavaScript",
			  "Python"
		  ],
		  "age": 20,
		  "isLoggedIn": false,
		  "points": 40
	  },
	  "John": {
		  "email": "john@john.com",
		  "skills": [
			  "HTML",
			  "CSS",
			  "JavaScript",
			  "React",
			  "Redux",
			  "Node.js"
		  ],
		  "age": 20,
		  "isLoggedIn": true,
		  "points": 50
	  },
	  "Thomas": {
		  "email": "thomas@thomas.com",
		  "skills": [
			  "HTML",
			  "CSS",
			  "JavaScript",
			  "HTML",
			  "CSS",
			  "JavaScript",
			  "HTML",
			  "CSS",
			  "JavaScript",
			  "React"
		  ],
		  "age": 20,
		  "isLoggedIn": false,
		  "points": 40
	  },
	  "Paul": {
		  "email": "paul@paul.com",
		  "skills": [
			  "HTML",
			  "CSS",
			  "JavaScript",
			  "MongoDB",
			  "Express",
			  "React",
			  "Node"
		  ],
		  "age": 20,
		  "isLoggedIn": false,
		  "points": 40
	  }
  }`;
let txtPars = JSON.parse(txt);
function abc() {
    let b = [];
    for (let user in txtPars) {
        let a = txtPars[user]; //arrays of vals
        a.additioanalUserName = user;
        b.push(a);
    }
    let c = b.sort((a, b) => b.skills.length - a.skills.length);
    return console.log(
        `${c[0].additioanalUserName} has ${c[0].skills.length} skills`
    );
}
abc();
