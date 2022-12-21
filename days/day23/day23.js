// Exercise: Level 1
// Generating numbers and marking evens, odds and prime numbers with three different colors. See the image below.
// const body = document.body;
// const container = document.createElement("div");
// const header = document.createElement("h2");
// const subheader = document.createElement("h3");
// const input = document.createElement("input");
// const button = document.createElement("button");
// const paragraf = document.createElement("p");

// //container
// container.style.width = "600px";
// container.style.margin = "15px";
// container.style.textAlign = "center";
// body.insertAdjacentElement("afterbegin", container);

// //header
// header.textContent = "Number Generator";
// header.style.color = "green";
// container.appendChild(header);

// //subheader
// subheader.textContent = "30daysOfJavaScript";
// subheader.style.margin = "15px";
// container.appendChild(subheader);

// //input + button + paragraf
// const inputButtonContainer = document.createElement("div");
// container.appendChild(paragraf);
// container.appendChild(inputButtonContainer);
// input.style.width = "400px";
// input.style.margin = "10px 5px";
// input.style.border = "1px solid green";
// input.style.padding = "10px";
// button.textContent = "Generate numbers";
// button.style.background = "#64c75b";
// button.style.padding = "10px";
// button.style.border = "1px solid #64c75b";
// button.style.cursor = "pointer";

// let numberValue;
// input.addEventListener("blur", (e) => {
//     if (isNaN(e.target.value)) {
//         paragraf.textContent = "Input value must be a number";
//     } else if (e.target.value === "") {
//         paragraf.textContent =
//             "Enter number value in the input field to generate number";
//     } else if (!isNaN(e.target.value)) {
//         paragraf.textContent = "";
//         numberValue = e.target.value;
//     }

//     paragraf.style.color = "red";
//     return numberValue;
// });

// inputButtonContainer.appendChild(input);
// inputButtonContainer.appendChild(button);

// ///blockNumber
// const blockNumberContainer = document.createElement("div");
// blockNumberContainer.style.display = "flex";
// blockNumberContainer.style.flexWrap = "wrap";
// blockNumberContainer.style.justifyContent = "stretch";
// blockNumberContainer.style.alignItems = "flex-start";
// blockNumberContainer.style.gap = "5px";
// blockNumberContainer.style.maxWidth = "800px";
// blockNumberContainer.style.minHeight = "70px";
// blockNumberContainer.style.margin = "10px";

// container.appendChild(blockNumberContainer);

// function generateBlock() {
//     let blockNumber;
//     for (let i = 0; i < numberValue; i++) {
//         blockNumber = document.createElement("div");
//         blockNumber.style.display = "flex";
//         blockNumber.style.justifyContent = "center";
//         blockNumber.style.alignItems = "center";
//         blockNumber.style.fontSize = "25px";
//         blockNumber.style.color = "white";
//         blockNumber.style.width = "60px";
//         blockNumber.style.height = "40px";
//         blockNumber.style.background = "#64c75b";
//         blockNumber.textContent = i;
//         blockNumberContainer.appendChild(blockNumber);
//         if (blockNumber.textContent % 2 !== 0) {
//             blockNumber.style.background = "#ece141";
//         }
//         if (isPrime(i) === true) {
//             blockNumber.style.background = "#d34d4d";
//         }
//         if (i === 0) {
//             blockNumber.style.background = "#64c75b";
//         }
//         if (i > 9999) {
//             blockNumber.style.fontSize = "20px";
//         }
//     }
// }

// function isPrime(num) {
//     var sqrtnum = Math.floor(Math.sqrt(num));
//     var prime = num != 1;
//     for (var i = 2; i < sqrtnum + 1; i++) {
//         if (num % i == 0) {
//             prime = false;
//             break;
//         }
//     }
//     return prime;
// }

// button.addEventListener("click", generateBlock);

//Exercise 2: Generating the keyboard code code using even listener. The image below.

const body = document.body;
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.margin = "50px 0";
const divResult = document.createElement("div");
const divHeader = document.createElement("div");
const header = document.createElement("h3");
const result = document.createElement("h3");
header.textContent = "Press any key";

body.insertAdjacentElement("afterbegin", divResult);
body.insertAdjacentElement("afterbegin", divHeader);

divHeader.style.width = "400px";
divHeader.style.height = "50px";
divHeader.style.display = "flex";
divHeader.style.justifyContent = "center";
divHeader.style.alignItems = "center";
divHeader.style.background = "lightgray";
divHeader.style.borderRadius = "20px";
divHeader.style.boxShadow = "5px 5px 5px gray";
divHeader.style.textShadow = "2px 2px 3px gray";


result.style.display = "none";
result.style.minWidth = "200px";
result.style.height = "200px";
result.style.padding = "15px";
result.style.justifyContent = "center";
result.style.alignItems = "center";
result.style.background = "lightgray";
result.style.margin = "20px 0";
result.style.borderRadius = "20px";
result.style.fontSize = "150px";
result.style.color = "green";
result.style.boxShadow = "5px 5px 5px gray";
result.style.textShadow = "2px 2px 3px gray";

divResult.appendChild(result);
divHeader.appendChild(header);

body.addEventListener("keyup", function (event) {
    let eventCode = (event.code).replace(/Digit|Key|Numpad/, "");
    console.dir(event);
    result.style.display = "flex";
    header.textContent = `You presed ${eventCode}`;
    result.textContent = event.key;
});

let str = 'Digit1';
console.log(str.replace("Digit", ""));