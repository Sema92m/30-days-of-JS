const asabenehChallenges2020 = {
    description: "Asabeneh Yetayeh challenges",
    challengeTitle: "Asabeneh Yetayeh challenges",
    challengeSubtitle: "30DaysOfJavaScript Challenge",
    challengeYear: '2020',
    keywords: [
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JS",
        "JavaScript",
        "ES6",
        "Promise",
        "async await",
        "Database",
        "React",
        "React Hooks",
        "Context API",
        "React Router",
        "Web Storage",
        "localStorage",
        "sessionStorage",
        "Redux",
        "Node",
        "MongoDB",
        "SQL",
        "API",
        "DOM",
        "data science",
        "MERN",
        "Python",
        "Flask",
        "Statistics",
        "Linear Algebra",
        "Numpy",
        "Pandas",
        "Scipy",
        "Scikit-learn",
        "Visualization",
        "D3.js",
    ],
    author: {
        firstName: "Asabeneh",
        lastName: "Yetayeh",
        titles: [
            ["🌱", "Educator"],
            ["💻", "Programmer"],
            ["🌐", "Developer"],
            ["🔥", "Motivator"],
            ["📔", "Content Creator"],
        ],
        qualifications: [
            "MSc. Computer Science Ongoing",
            "BSc. Information and Communication Eng.",
            "MSc. Food Technology",
            "BSc.Food Technology",
        ],
        socialLinks: [
            {
                social: "LinkedIn",
                url: "https://www.linkedin.com/in/asabeneh/",
                fontawesomeIcon: '<i class="fab fa-linkedin">',
            },
            {
                social: "Twitter",
                url: "https://twitter.com/Asabeneh",
                fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
            },
            {
                social: "Github",
                fontawesomeIcon: '<i class="fab fa-github-square"></i>',
                url: "https://github.com/Asabeneh",
            },
        ],
        skills: [
            "Web Development",
            "Data Analysis",
            "Data Visualization",
            "Programming",
            "Databases",
            "Developing API",
        ],
        bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
    },
    challenges: [
        {
            name: "30 Days Of Python",
            topics: [
                "Python",
                "Flask",
                "Numpy",
                "Pandas",
                "Statistics",
                "API",
                "MongoDB",
            ],
            days: 30,
            status: "Done",
            questions: "Above 500",
            projects: "Two",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
        },
        {
            name: "30 Days Of JavaScript",
            topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
            days: 30,
            status: "Ongoing",
            questions: "Above 500",
            projects: "About 30",
            interviewQns: "",
            githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
        },
        {
            name: "30 Days Of HTML & CSS",
            topics: ["CSS", "Flex", "Grid", "CSS Animation"],
            days: 30,
            status: "Coming",
            questions: "Above 500",
            projects: "Two",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of React",
            topics: [
                "React",
                "React Router",
                "Redux",
                "Context API",
                "React Hooks",
                "MERN",
            ],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of ReactNative",
            topics: ["ReactNative", "Redux"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "Two",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Fullstack",
            topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Data Analysis",
            topics: [
                "Python",
                "Numpy",
                "Pandas",
                "Statistics",
                "Visualization",
            ],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
        {
            name: "30 Days Of Machine Learning",
            topics: [
                "Python",
                "Numpy",
                "Pandas",
                "Scikit-learn",
                "Scipy",
                "Linear Algebra",
                "Statistics",
                "Visualization",
            ],
            days: 30,
            status: "Coming",
            questions: "",
            projects: "",
            interviewQns: "",
            githubUrl: "",
        },
    ],
};



const body = document.body;
const container = document.createElement("div");

const title = document.createElement("h2");
const subtitle = document.createElement("h3");
const date = document.createElement("div");
const ul = document.createElement("ul");
const authorName = document.createElement("p");
const socialLinks = document.createElement("div");
const bio = document.createElement("p");
const authorTitlesSkillsQualifications = document.createElement("div");
const keywords = document.createElement("div");

//container
body.insertAdjacentElement("afterbegin", container);
container.classList.add("container");
container.style.width = "800px";
container.style.margin = "20px";
textCenter(container);

//title
title.innerHTML = `${asabenehChallenges2020.challengeTitle} <span class = 'span2020'>2020</span>`;
function intervalColorSpan() {
    span2020.style.color = hexaColor();
}
setInterval(intervalColorSpan, 1000);
container.appendChild(title);
const span2020 = document.querySelector(".span2020");
span2020.style.fontSize = '60px';

//subtitle
subtitle.textContent = asabenehChallenges2020.challengeSubtitle;
subtitle.style.textDecoration = 'underline';
marginTopBot10(subtitle);
container.appendChild(subtitle);

//date
date.style.display = `inline-block`;
date.style.margin = `0 auto`;
date.style.padding = `5px 10px`;
marginTopBot10(date);
container.appendChild(date);
function colorInterval() {
    date.style.background = hexaColor();
}
setInterval(colorInterval, 1000);
function dateInterval() {
    date.textContent = showDateTime();
}
setInterval(dateInterval, 1000);

//ul + li
container.appendChild(ul);
for (let i = 0; i < asabenehChallenges2020.challenges.length; i++) {
    let li = document.createElement("li");
    let lists = `<a id='chalengeLiHREF${i + 1}' href="${
        asabenehChallenges2020.challenges[i].githubUrl
    }">${asabenehChallenges2020.challenges[i].name}</a>
                <details>
                    <summary>${asabenehChallenges2020.challenges[i].name
                        .replace(/.*\bOf(.*?\b)/i, "")
                        .trim()}</summary>
                    <p class='chalengeLiInfo'>${asabenehChallenges2020.challenges[
                        i
                    ].topics.join(" ")}</p>
                </details>
                <p id='chalengeLiStatus${i + 1}'>Coming</p>
                `;
    li.innerHTML = lists;
    li.style.width = "800px";
    li.style.height = "50px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding= "0 15px";
    li.style.marginBottom = "5px";
    li.style.background = "#64b949";

    ul.appendChild(li);
}

//socialLinks
//socialLinkedIn
const socialLinkedIn = document.createElement("a");
socialLinkedIn.setAttribute(
    "href",
    asabenehChallenges2020.author.socialLinks[0].url
);
socialLinkedIn.innerHTML =
    asabenehChallenges2020.author.socialLinks[0].fontawesomeIcon;
//Twitter
const socialTwitter = document.createElement("a");
socialTwitter.setAttribute(
    "href",
    asabenehChallenges2020.author.socialLinks[1].url
);
socialTwitter.innerHTML =
    asabenehChallenges2020.author.socialLinks[1].fontawesomeIcon;

//github
const socialGithub = document.createElement("a");
socialGithub.setAttribute(
    "href",
    asabenehChallenges2020.author.socialLinks[2].url
);
socialGithub.innerHTML =
    asabenehChallenges2020.author.socialLinks[2].fontawesomeIcon;
container.appendChild(socialLinks);
socialLinks.appendChild(socialLinkedIn);
socialLinks.appendChild(socialTwitter);
socialLinks.appendChild(socialGithub);
marginTopBot10(socialLinks);
//bio info
bio.textContent = asabenehChallenges2020.author.bio;
container.appendChild(bio);


//author name
container.appendChild(authorName);
authorName.textContent = `${
    asabenehChallenges2020.author.firstName +
    asabenehChallenges2020.author.lastName
}`;


//hexa func
function hexaColor() {
    const str = "0123456789abcdef";
    let hexa = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length);
        hexa += str[index];
    }
    return hexa;
}
//time func
function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    const dateMonthYear = date + "." + month + "." + year;
    const time = hours + ":" + minutes + ":" + seconds;
    const fullTime = dateMonthYear + " " + time;
    return fullTime;
}

function textCenter(elem) {
    return (elem.style.textAlign = "center");
}
function marginTopBot10(elem) {
    return (elem.style.margin = "10px 0");
}
