const body = document.body;

const planetArr = [
    { name: "Moon", gravity: 0.166, url: "url('../../../../img/24/moon.png')" },
    {
        name: "Mercury",
        gravity: 0.38,
        url: "url(../../../../img/24/mercury.png)",
    },
    {
        name: "Venus",
        gravity: 0.91,
        url: "url('../../../../img/24/venus.png')",
    },
    { name: "Earth", gravity: 1.0, url: "url('../../../../img/24/earth.png')" },
    { name: "Mars", gravity: 0.38, url: "url('../../../../img/24/mars.png')" },
    {
        name: "Jupiter",
        gravity: 2.34,
        url: "url('../../../../img/24/jupiter.png')",
    },
    {
        name: "Saturn",
        gravity: 1.06,
        url: "url('../../../../img/24/saturn.png')",
    },
    {
        name: "Uranus",
        gravity: 0.92,
        url: "url('../../../../img/24/uranus.png')",
    },
    {
        name: "Neptune",
        gravity: 1.19,
        url: "url('../../../../img/24/neptune.png')",
    },
    {
        name: "Pluto",
        gravity: 0.06,
        url: "url('../../../../img/24/pluto.png')",
    },
];

const header = document.createElement("h1");
const input = document.createElement("input");
const select = document.createElement("select");
const button = document.createElement("button");
const resultContainer = document.createElement("div");
const inputContainer = document.createElement("div");
const img = document.createElement("div");

let url = "";
let planetName = "";

body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.flexDirection = "column";
body.style.backgroundImage = "url(../../../../img/24/galaxy.gif)";

header.textContent = "Calculate a weight of an object on a planet";
header.style.color = "white";
header.style.margin = "50px 0";
header.style.textShadow = "5px 5px 5px gray";
body.appendChild(header);

///button input select
body.appendChild(inputContainer);
inputContainer.style.display = "flex";
inputContainer.style.justifyContent = "center";
inputContainer.style.width = "800px";

button.textContent = "Calculate weight";

button.style.height = "25px";
button.style.backgroundColor = "hsla(0, 0%, 77%, 0.692)";
button.style.borderRadius = "4px";
button.style.border = "none";
button.style.padding = "0 5px";
button.style.cursor = "pointer";
button.style.color = "white";

input.style.height = "25px";
input.style.border = "none";
input.style.textAlign = "left";
input.style.paddingLeft = "10px";
input.placeholder = " Mass in kilogram";

select.style.height = "25px";
select.style.width = "100px";
select.style.margin = "0 15px";
select.style.border = "none";
select.style.cursor = "pointer";

inputContainer.appendChild(input);
inputContainer.appendChild(select);
inputContainer.appendChild(button);

///select
let planet;
function createPlanetInSelect(arr) {
    select.insertAdjacentHTML(
        "afterbegin",
        '<option value="" disabled selected hidden>select planet</option>'
    );
    for (let i = 0; i < arr.length; i++) {
        planet = document.createElement("option");
        planet.style.textAlign = "left";
        planet.textContent = arr[i].name;
        planet.value = arr[i].gravity;
        // url = `${planetArr[i].url}`;
        planet.setAttribute(`data-url`, `${planetArr[i].url}`);
        select.appendChild(planet);
    }
}
createPlanetInSelect(planetArr);

//result container
resultContainer.setAttribute("id", "resultContainer");
resultContainer.style.display = "block";
// resultContainer.style.gridTemplate = "1fr / 1fr 1fr";
resultContainer.style.alignItems = "center";
resultContainer.style.minHeight = "80px";
resultContainer.style.minWidth = "600px";
resultContainer.style.margin = "25px 0";
resultContainer.style.backgroundColor = "hsla(0, 0%, 77%, 0.2)";
resultContainer.style.padding = "5px";



const massWarning = document.createElement("h3");
massWarning.textContent = "Mass error or planet does not selected";
massWarning.style.display = "none";
massWarning.style.padding = "5px 50px";
massWarning.style.margin = "0 auto";
massWarning.style.color = "white";
massWarning.style.background = "hsla(0, 0%, 87%, 0.2)";
body.appendChild(resultContainer);
resultContainer.appendChild(massWarning);
resultContainer.appendChild(img);

const resultTextContainer = document.createElement("div");
const resultText = document.createElement("div");
const resultWeight = document.createElement("div");
let resultImg = document.createElement("div");


resultImg.style.display = "none";
resultImg.style.height = "300px";
resultImg.style.width = "300px";
resultImg.style.margin = "0 auto";
resultImg.style.backgroundImage = "url('../../../../img/24/earth.png')";

img.style.display = "block";
img.style.height = "300px";
img.style.width = "300px";
img.style.margin = "0 auto";
img.style.backgroundImage = "url('../../../../img/24/earth.png')";
img.style.backgroundSize = "contain";
img.style.border = "none";

resultTextContainer.setAttribute("id", "resultTextCont");
resultTextContainer.style.width = "250px";
resultTextContainer.style.height = "250px";
resultTextContainer.style.display = "none";
resultTextContainer.style.flexDirection = "column";

resultTextContainer.style.justifyContent = "center";
resultTextContainer.style.alignItems = "center";
resultTextContainer.style.margin = "0 auto";

resultText.textContent = `The weight of the objekt on the ${planetName}`;
resultText.style.display = "none";
resultText.style.marginBottom = "20px";
resultText.style.color = "white";
resultText.style.fontSize = "20px";

resultWeight.style.display = "none";
resultWeight.style.justifyContent = "center";
resultWeight.style.alignItems = "center";
resultWeight.style.width = "100px";
resultWeight.style.height = "100px";
resultWeight.style.borderRadius = "100%";
resultWeight.style.color = "white";
resultWeight.style.fontWeight = "700";
resultWeight.style.background = "hsla(0, 0%, 87%, 0.2)";
resultWeight.textContent = `Weight is`;

function a() {
    for (let i = 0; i < planetArr.length; i++) {
        
        if (select.value == planetArr[i].gravity) {
            img.style.background = planetArr[i].url;
            img.style.backgroundSize = 'contain';
            img.style.backgroundRepeat = 'no-repeat';
            url = planetArr[i].url;
            planetName = planetArr[i].name;
        }
        resultImg.style.backgroundImage = `${url}`;
    }
}
setInterval(a, 200);

resultImg.style.backgroundRepeat = "no-repeat";
resultImg.style.backgroundSize = "contain";

resultContainer.appendChild(resultImg);
resultContainer.appendChild(resultTextContainer);
resultTextContainer.appendChild(resultText);
resultTextContainer.appendChild(resultWeight);

button.addEventListener("click", calcWieght);

function calcWieght() {
    let result = 0;
    if (isNaN(+input.value) || select.value == "" || input.value === '') {
        img.style.display = 'none';
        resultContainer.style.display = "grid";
        resultContainer.style.gridTemplate = "none";
        resultImg.style.display = "none";
        resultTextContainer.style.display = "none";
        resultText.style.display = "none";
        massWarning.style.display = "block";
        return (resultWeight.textContent = `Error weight`);
    }
    if (select.value !== "" && input.value !== "") {
        img.style.display = 'none';
        massWarning.style.display = "none";
        resultContainer.style.display = "grid";
        resultContainer.style.gridTemplate = "1fr / 1fr 1fr";
        resultImg.style.display = "block";
        resultTextContainer.style.display = "flex";
        resultText.style.display = "block";

        resultWeight.style.display = "flex";
        result = (select.value * input.value).toFixed(1);
    }
    return (resultWeight.textContent = `Weight is ${result}`);
}
