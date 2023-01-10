const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombi",
    "Comoros",
    "Congo (Brazzaville)",
    "Congo",
    "Costa Rica",
    "Cote d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "East Timor (Timor Timur)",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia, The",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Korea, North",
    "Korea, South",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Macedonia",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Morocco",
    "Mozambique",
    "Myanmar",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia and Montenegro",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Vatican City",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
];

const body = document.body;
//containers
const topContainer = document.createElement("div");
const bottomContainer = document.createElement("div");
//title
const title = document.createElement("h1");
const subtitle = document.createElement("h3");
const subtitleValueFromInput = document.createElement("span");
const subtitleNumberOfCountries = document.createElement("span");
const info = document.createElement("h5");

//buttons
const buttonsContainer = document.createElement("div");
const startingWordButton = document.createElement("button");
const anyWordButton = document.createElement("button");
const azButton = document.createElement("button");
//input
const searchContainer = document.createElement("div");
const searchIcon = document.createElement("div");
const searchInput = document.createElement("input");
searchInput.setAttribute('id', 'searchInput');
searchInput.placeholder = "Search country...";

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.margin = "0 auto";
body.style.color = "white";
body.style.width = "800px";

body.insertAdjacentElement("afterbegin", bottomContainer);
body.insertAdjacentElement("afterbegin", topContainer);

//topContainer
flex(topContainer);
topContainer.style.flexDirection = "column";
topContainer.style.width = "100%";
topContainer.style.height = "400px";
topContainer.style.backgroundImage = "url(../../../../img/day26/globe.jpg)";
topContainer.style.backgroundSize = "cover";
topContainer.style.backgroundRepeat = "no-repeat";

title.textContent = "WORLD COUNTRIES LIST";
subtitle.textContent = `Total Number of countries ${countries.length}`;
// info.textContent = `Countries containing ${searchInput}!!!`;

//topContainer // buttons Container
flex(buttonsContainer);
buttonsContainer.style.gap = "10px";
startingWordButton.textContent = "STARTING WORLD";
startingWordButton.classList.add('active');
anyWordButton.textContent = "SEARCH WITH ANY WORD";
azButton.innerHTML = "⇅";
// azButton.innerHTML = '<i class="fa-solid fa-arrow-up-a-z"></i>';

buttonsStyles(startingWordButton);
buttonsStyles(anyWordButton);
buttonsStyles(azButton);

//search
flex(searchContainer);
searchContainer.style.gap = "5px";

searchInput.style.width = "300px";
searchInput.style.height = "30px";
searchInput.style.paddingLeft = "10px";
searchInput.style.borderRadius = "15px";
searchInput.style.textAlign = "left";

searchIcon.innerHTML = "🔍";
searchIcon.style.color = "black";

topContainer.appendChild(title);
topContainer.appendChild(subtitle);
topContainer.appendChild(info);
topContainer.appendChild(buttonsContainer);
topContainer.appendChild(searchContainer);

buttonsContainer.appendChild(startingWordButton);
buttonsContainer.appendChild(anyWordButton);
buttonsContainer.appendChild(azButton);

searchContainer.appendChild(searchInput);
searchContainer.appendChild(searchIcon);

//bottomContainer

bottomContainer.style.display = "flex";
bottomContainer.style.justifyContent = "left";
bottomContainer.style.rowGap = "10px";
bottomContainer.style.columnGap = "30px";
bottomContainer.style.flexWrap = "wrap";
bottomContainer.style.color = "black";
bottomContainer.style.fontWeight = "700";
bottomContainer.style.width = "100%";
bottomContainer.style.minHeight = "200px";
bottomContainer.style.background = "lightgray";
bottomContainer.style.padding = "20px";

// cards
function cardStyles(card) {
    flex(card);
    card.style.width = "101px";
    card.style.height = "90px";
    card.style.padding = "0 5px";
    card.style.backgroundImage = "url(../../../../img/day26/map.jpg";
    card.style.backgroundSize = "cover";
    card.style.backgroundRepeat = "no-repeat";
    card.style.backgroundPosition = "center center";
    card.style.borderRadius = "5px";
}

// search word func
searchInput.addEventListener('input', (event) => {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue == "") {
        bottomContainer.innerHTML = "";
        dinamicReloadCardsFull();
    }
    if (searchValue !=="" && startingWordButton.classList.contains('active'))  {
        startsWithButon();
    }
    if (searchValue !=="" && anyWordButton.classList.contains('active'))  {
        includesButton();
    }
});


function startsWithButon() {
    bottomContainer.innerHTML = "";
    for (let country of countries) {
        let countryName = country.toLowerCase();
        if (countryName.startsWith(`${searchInput.value}`)) {
            const card = document.createElement("div");
            card.textContent = country;
            cardStyles(card);
            bottomContainer.appendChild(card);
        }
    }
    info.innerHTML = `Countries starts with <span style="color:red; font-style: italic">${searchInput.value}</span> are <span style='color:green'>${bottomContainer.childNodes.length}</span>`;
}

function includesButton() {
    bottomContainer.innerHTML = "";
    for (let country of countries) {
        let countryName = country.toLowerCase();
        if (countryName.includes(`${searchInput.value}`)) {
            const card = document.createElement("div");
            card.textContent = country;
            cardStyles(card);
            bottomContainer.appendChild(card);
        }
    }
    info.innerHTML = `Countries containing <span style="color:red; font-style: italic">${searchInput.value}</span> are <span style='color:green'>${bottomContainer.childNodes.length}</span>`;
}

//add active class for buttons
startingWordButton.addEventListener('click', ()=> {
    startingWordButton.classList.toggle('active');
    anyWordButton.classList.remove('active');
    startsWithButon();
});
anyWordButton.addEventListener('click', ()=> {
    anyWordButton.classList.toggle('active');
    startingWordButton.classList.remove('active');
    includesButton();
});
azButton.addEventListener("click", sortAZ);
//

function dinamicReloadCardsFull() {
	if (searchInput.value == "") {
		for (let country of countries) {
            info.innerHTML = '';
            const card = document.createElement("div");
            card.textContent = country;
            cardStyles(card);
            bottomContainer.appendChild(card);
        }
	}
}
dinamicReloadCardsFull();




function sortAZ() {
    azButton.classList.toggle('active');
    let names = [];
    for (let i = 0; i < bottomContainer.childNodes.length; i++) {
        names.push(bottomContainer.childNodes[i].innerHTML);
    }
    let namesReverse = names.reverse();
    for (let i = 0; i < bottomContainer.childNodes.length; i++) {
        bottomContainer.childNodes[i].textContent = namesReverse[i];
    }
}
function flex(elem) {
    elem.style.display = "flex";
    elem.style.justifyContent = "center";
    elem.style.alignItems = "center";
}
function buttonsStyles(elem) {
    elem.style.cursor = "pointer";
    elem.style.border = "none";
    elem.style.color = "white";
    elem.style.padding = "10px";
    elem.style.margin = "10px 0";
    elem.style.backgroundImage = "linear-gradient(to right, #b151e9 , #8a3fb6)";
}