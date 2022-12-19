const asabenehChallenges2020 = {
    description: "Asabeneh Yetayeh challenges",
    challengeTitle: "Asabeneh Yetayeh challenges",
    challengeSubtitle: "30DaysOfJavaScript Challenge",
    challengeYear: "2020",
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
const authorName = document.createElement("h2");
const socialLinks = document.createElement("div");
const bio = document.createElement("p");
const authorTitlesSkillsQualifications = document.createElement("div");



//container
// body.insertAdjacentElement("afterbegin", container);
body.appendChild(container);
container.classList.add("container");
container.style.width = "800px";
container.style.margin = "20px";
textCenter(container);

//title
title.innerHTML = `${asabenehChallenges2020.challengeTitle} <span class = 'span2020'>2020</span>`;
container.appendChild(title);
const span2020 = document.querySelector(".span2020");
function intervalColorSpan() {
    span2020.style.color = hexaColor();
}
setInterval(intervalColorSpan, 1000);
span2020.style.fontSize = "60px";

//subtitle
subtitle.textContent = asabenehChallenges2020.challengeSubtitle;
subtitle.style.textDecoration = "underline";
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
    li.setAttribute("id", `chalengeLi${i}`);
    let lists = `<a style='text-decoration: none; color:black' id='chalengeLiHREF${i}' href="${
        asabenehChallenges2020.challenges[i].githubUrl
    }">${asabenehChallenges2020.challenges[i].name}</a>
                    <details>
                        <summary style="margin-bottom: 5px">${asabenehChallenges2020.challenges[i].name
                            .replace(/.*\bOf(.*?\b)/i, "")
                            .trim()}</summary>
                            <ul style="margin-bottom: 10px" id='ul1${i}'></ul>
                    </details>
                    <p id='chalengeLiStatus${i}'>Coming</p>
                `;
    li.innerHTML = lists;
    li.style.width = "800px";
    li.style.minHeight = "50px";
    li.style.display = "flex";
    li.style.justifyContent = "space-between";
    li.style.alignItems = "center";
    li.style.padding = "0 15px";
    li.style.marginBottom = "5px";
    li.style.background = "#d43535";

    ul.appendChild(li);
}




function createElemTopics() {
    let arr = asabenehChallenges2020.challenges;
    for (let i = 0; i < arr.length ;i++) {
        let ul1 = document.querySelector(`#ul1${i}`);
        ul1.style.display = 'flex';
        ul1.style.flexDirection = 'column';
        ul1.style.alignItems = 'flex-start';
        for(let j = 0; j < arr[i].topics.length; j++) {
            let div = document.createElement('div');
            div.textContent = arr[i].topics[j];
            ul1.appendChild(div);
        }
    }
}
createElemTopics();

///////////////////

const firstStatus = document.querySelector("#chalengeLiStatus0");
firstStatus.textContent = 'Done';
const secondStatus = document.querySelector("#chalengeLiStatus1");
secondStatus.textContent = 'Ongoing';

const firstHREF = document.querySelector("#chalengeLiHREF0");
firstHREF.style.textDecoration = 'underline';
const secondHREF = document.querySelector("#chalengeLiHREF1");
secondHREF.style.textDecoration = 'underline';

const chalengeLi0 = document.querySelector("#chalengeLi0");
const chalengeLi1 = document.querySelector("#chalengeLi1");
chalengeLi0.style.background = "#4cc540";
chalengeLi1.style.background = "#ebd940";

//author name
container.appendChild(authorName);
authorName.textContent = `${
    asabenehChallenges2020.author.firstName +
    asabenehChallenges2020.author.lastName
}`;
authorName.style.margin = "15px 0 5px";

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

function colorBlack(...elems) {
    elems.forEach((elem) => (elem.style.color = "black"));
    elems.forEach((elem) => (elem.style.fontSize = "20px"));
}
colorBlack(socialLinkedIn, socialTwitter, socialGithub);

socialLinks.style.display = "flex";
socialLinks.style.justifyContent = "center";
socialLinks.style.gap = "10px";
socialLinks.style.marginBottom = "25px";

//bio info text
bio.textContent = asabenehChallenges2020.author.bio;
container.appendChild(bio);

//3 columns Title Skills Qualifications
const columnsTitle = document.createElement("div");
const columnsSkills = document.createElement("div");
const columnsQualif = document.createElement("div");
authorTitlesSkillsQualifications.style.display = "flex";
authorTitlesSkillsQualifications.style.justifyContent = "center";
authorTitlesSkillsQualifications.style.gap = "40px";
authorTitlesSkillsQualifications.style.margin = "15px 0";
container.appendChild(authorTitlesSkillsQualifications);


function elemsAppendToMainElem(mainElem, ...elems) {
    elems.forEach((elem) => mainElem.appendChild(elem));
    elems.forEach((elem) => elem.style.display = 'flex');
    elems.forEach((elem) => elem.style.flexDirection = 'column');
    elems.forEach((elem) => elem.style.alignItems = 'flex-start');
}
elemsAppendToMainElem(
    authorTitlesSkillsQualifications,
    columnsTitle,
    columnsSkills,
    columnsQualif
);
const author = asabenehChallenges2020.author;

//3 column Qualification
columnsQualif.setAttribute('id', 'qualif');
const qualifElem = document.createElement("div");
const titleOfQualifElem = document.createElement("h4");
titleOfQualifElem.textContent = "Qualifications";
titleOfQualifElem.style.margin = '0 auto';
columnsQualif.appendChild(titleOfQualifElem);
function createElemLIQualif(initialArr, targetElem) {
    for (let i = 0; i < initialArr.length; i++) {
        let li = document.createElement("li");
        li.style.listStyleType = "none";
        li.innerHTML = `<li><i id='qualificayionLI${i}' class="fa-sharp fa-solid fa-user-secret"></i> ${initialArr[i]}</li>`;
        targetElem.appendChild(li);

    }
}




qualifElem.innerHTML = createElemLIQualif(author.qualifications, columnsQualif);
const firstICONQualification = document.querySelector("#qualificayionLI0");
firstICONQualification.classList.remove('fa-sharp','fa-solid','fa-user-secret');
firstICONQualification.classList.add("fa-solid", "fa-book-atlas");
firstICONQualification.style.color = 'blue';

//second column Skills
columnsSkills.setAttribute('id', 'skills');
const skillsElem = document.createElement("div");
const titleOfSkillsElem = document.createElement("h4");
titleOfSkillsElem.textContent = "Skills";
titleOfSkillsElem.style.margin = '0 auto';
columnsSkills.appendChild(titleOfSkillsElem);
function createElemLISkills(initialArr, targetElem) {
    for (let i = 0; i < initialArr.length; i++) {
        let li = document.createElement("li");
        li.innerHTML = `<li><i class="fa-solid fa-square-check" style="color:green"></i> ${initialArr[i]}</li>`;
        targetElem.appendChild(li);
        li.style.listStyleType = "none";
    }
}
skillsElem.innerHTML = createElemLISkills(author.skills, columnsSkills);

//first column Titles
const titleElem = document.createElement("div");
titleElem.setAttribute('id','titleColunm');
const titleOfTitleElem = document.createElement("h4");
titleOfTitleElem.style.margin = '0 auto';
titleOfTitleElem.textContent = "Titles";
columnsTitle.appendChild(titleOfTitleElem);
function createElemLI(initialArr, targetElem) {
    for (let i = 0; i < initialArr.length; i++) {
        let li = document.createElement("div");
        li.innerHTML = `${initialArr[i][0] + initialArr[i][1]}`;
        li.style.listStyleType = "none";
        targetElem.appendChild(li);
    }
}
titleElem.innerHTML = createElemLI(author.titles, columnsTitle);

//keywords
const keywordsContainer = document.createElement('div');
const keywordsTitle = document.createElement('h4');
const keywordsDiv = document.createElement('div');
keywordsTitle.textContent = 'Keywords';
keywordsTitle.style.textAlign = 'left';
keywordsContainer.style.width = '650px';
keywordsContainer.style.margin = '0 auto';

function keywordStyles(arr) {
    for(let i = 0; i < arr.length; i++){
        let keyword = document.createElement('div');
        keyword.textContent = `#${arr[i]}`;
        keyword.style.display = 'inline-block';
        keyword.style.margin = '3px 5px';
        keyword.style.padding = '0 5px';
        keyword.style.borderRadius = '15px';
        keyword.style.background = hexaColor();
        keywordsDiv.appendChild(keyword);
    }

}
keywordStyles(asabenehChallenges2020.keywords);
container.appendChild(keywordsContainer);
keywordsContainer.appendChild(keywordsTitle);
keywordsContainer.appendChild(keywordsDiv);




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
