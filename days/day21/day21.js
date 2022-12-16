// const par1 = document.querySelector("p");
// const par2 = document.querySelector("#p2");
// const par3 = document.querySelector("#p3");
// const par4 = document.querySelector("#p4");

// const allPar = document.querySelectorAll("p");
// for (let i = 0; i < allPar.length; i++) {
//     allPar[i].textContent = "123";
// }
// allPar[3].textContent = "Fourth Paragraph";
// par2.setAttribute("id", "newId");
// par3.className = "paragraf2";
// par3.id = "anotherID";

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
// Set text content, id and class to each paragraph

// for (let i = 0; i < allPar.length; i++) {
//     allPar[i].style.color = "green";
//     allPar[i].style.background = "gray";
//     allPar[i].style.border = "1px red solid";
//     allPar[i].style.fontSize = "35px";
//     allPar[i].style.fontFamily = "Georgia ";
// }

// for (let i = 0; i < allPar.length; i++) {
//     if (i % 2 == 0) {
//         allPar[i].style.color = "purple";
//     }
// }

// Exercise: Level 3
// DOM: Mini project 1
// Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

// The year color is changing every 1 second
// The date and time background color is changing every on seconds
// Completed challenge has background green
// Ongoing challenge has background yellow
// Coming challenges have background red

const year = document.querySelector(".year");
const ul = document.querySelectorAll("ul");
const li = document.querySelectorAll("li");
const h2 = document.querySelector("h2");
const h1 = document.querySelector("h1");
const span2020 = document.querySelector(".h1-year");
const wrapper = document.querySelector(".wrapper");
const date = document.createElement("p");



h1.style.display = "flex";
h1.style.justifyContent = "center";
h1.style.alignItems = "flex-end";

h2.style.display = "flex";
h2.style.justifyContent = "center";
h2.style.borderBottom = "2px black solid";

for (let i = 0; i < li.length; i++) {
    li[i].style.background = "red";
    li[i].style.padding = "10px 0";
    li[i].style.margin = "3px 0";
    li[i].style.paddingLeft = "13px";
}
li[0].style.background = "green";
li[1].style.background = "yellow";



date.style.margin = "0 auto";
date.style.fontSize = "25px";
date.style.width = "220px";
span2020.style.fontSize = "50px";
h2.insertAdjacentElement("afterend", date);

const hexaColor = () => {
    const str = "0123456789abcdef";
    let hexa = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length);
        hexa += str[index];
    }
    return hexa;
};
const showDateTime = () => {
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
    const time = hours + ":" + minutes + ':' + seconds;
    const fullTime = dateMonthYear + " " + time;
    return fullTime;
};


function intervalColorSpan() {
    span2020.style.color = hexaColor();
}
setInterval(intervalColorSpan, 1000);

function intervalTime() {
    date.innerText = showDateTime();
}
setInterval(intervalTime, 1000);

function intervalTimeBackground() {
	date.style.background = hexaColor();
}
setInterval(intervalTimeBackground, 1000);


