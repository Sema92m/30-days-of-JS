const body = document.body;

const planetArr = [
    { name: "Moon", gravity: 0.166, url: "url(../../../../img/24/moon.png)"},
    { name: "Mercury", gravity: 0.38, url: "url(../../../../img/24/mercury.png)" },
    { name: "Venus", gravity: 0.91, url: "url(../../../../img/24/venus.png)" },
    { name: "Earth", gravity: 1.0, url: "url(../../../../img/24/earth.png)" },
    { name: "Mars", gravity: 0.38, url: "url(../../../../img/24/mars.png)"},
    { name: "Jupiter", gravity: 2.34, url: "url(../../../../img/24/jupiter.png)" },
    { name: "Saturn", gravity: 1.06, url: "url(../../../../img/24/saturn.png)" },
    { name: "Uranus", gravity: 0.92, url: "url(../../../../img/24/uranus.png)" },
    { name: "Neptune", gravity: 1.19, url: "url(../../../../img/24/neptune.png)" },
    { name: "Pluto", gravity: 0.06, url: "url(../../../../img/24/pluto.png)" },
];



const header = document.createElement("h1");
const input = document.createElement("input");
const select = document.createElement("select");
const button = document.createElement("button");
const resultContainer = document.createElement("div");
const inputContainer = document.createElement("div");

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
input.placeholder = ' Mass in kilogram';

select.style.height = "25px";
select.style.width = "100px";
select.style.margin = "0 15px";
select.style.border = "none";
select.style.cursor = "pointer";



inputContainer.appendChild(input);
inputContainer.appendChild(select);
inputContainer.appendChild(button);

///select

function createPlanetInSelect(arr) {
	select.insertAdjacentHTML("afterbegin",'<option value="" disabled selected hidden>select planet</option>');
		for(let i = 0; i < arr.length; i++){
		console.log(arr.length);
		let planet = document.createElement("option");
		planet.style.textAlign = "left";
		planet.textContent = arr[i].name;
		select.appendChild(planet);
	}
}
createPlanetInSelect(planetArr);

//result container
resultContainer.style.display = 'grid';
resultContainer.style.gridTemplate = '50% / 50%';
resultContainer.style.justifyContent = 'center';
resultContainer.style.alignItems = 'center';
resultContainer.style.minHeight = '50px';
resultContainer.style.minWidth = '600px';
resultContainer.style.margin = '25px 0';
resultContainer.style.backgroundColor = 'hsla(0, 0%, 77%, 0.2)';


const massWarning = document.createElement("h3");
massWarning.textContent = 'Mass is requared';
massWarning.style.padding = '5px 50px';
massWarning.style.color = 'white';
massWarning.style.background = 'hsla(0, 0%, 87%, 0.2)';
body.appendChild(resultContainer);
// resultContainer.appendChild(massWarning);

const resultTextContainer = document.createElement("div");
const resultText = document.createElement("p");
const resultWeight = document.createElement("p");
const resultImg = document.createElement("div");


resultTextContainer.style.width = '200px';
resultTextContainer.style.height = '200px';
resultTextContainer.style.display = 'flex';

resultTextContainer.style.justifyContent = 'center';
resultTextContainer.style.alignItems = 'center';
resultTextContainer.style.background = 'hsla(0, 0%, 87%, 0.2)';

resultText.textContent = `The weight of the objekt on`;
resultWeight.textContent = `Weight is`;


resultImg.textContent = '12233';
resultContainer.appendChild(resultImg);
resultContainer.appendChild(resultTextContainer);

resultTextContainer.appendChild(resultWeight);
resultTextContainer.appendChild(resultText);
