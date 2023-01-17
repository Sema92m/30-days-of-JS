const url = "https://restcountries.com/v3.1/all";
let countries = [];
let searchCountryAndCapitalFromInput = [];
const wrapper = document.querySelector(".wrapper");
const searchInput = document.querySelector("#mainInput");
const subheader = document.querySelector(".subheader");
const countriesCountH5 = document.querySelector(".countries-count");
const spinner = document.querySelector(".spinner");

const nameButton = document.querySelector("#name-button");
const capitalButton = document.querySelector("#capital-button");
const populationButton = document.querySelector("#population-button");
const sortButton = document.querySelector("#sort-button");


fetch(url)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].capital === undefined || !data[i].capital) {
                data[i].capital = ['None capital'];
            }
            if(!data[i].languages || data[i].languages == undefined){
                data[i].languages = '';
            }
            let langs = (Object.values(data[i].languages).slice(0,5)).toString().replace(/,/g, ', ');
            countries.push([data[i].name.common,(data[i].capital[0]).toString(),data[i].population,data[i].flags.svg, langs]);
        }
        reloadCards(countries);
        subheader.textContent = `Currently, we have ${countries.length} countries`;
        countriesCountH5.textContent = `${wrapper.childElementCount} countries satisfied the search criteria`;
        spinnerDisplayNone();
        
    })
    .catch((error) => console.error(error));


function reloadCards(arr) {
    arr.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute('class', 'card');
        card.innerHTML = 
            `  
                <img style='background-image: url(${element[3]})' class="flag"></img>
                <div class="country-name">${element[0]}</div>
                <div class="country-info">
                    <div class="capital">Capital: ${element[1]}</div>
                    <div class="population">Population: ${element[2].toLocaleString("en-US")}</div>
                    <div class="languages">Languages: ${element[4]}</div>
                </div>
            `;
        wrapper.appendChild(card);
        countriesCountH5.textContent = `${wrapper.children.length} countries satisfied the search criteria`;
    });
}


searchInput.addEventListener('input', searchFunc);

function searchFunc() {
    wrapper.innerHTML = '';
    if(searchInput.value === '') {
        reloadCards(countries);
    }
    if(searchInput.value !== '') {
        createCardFromInput();
        countriesCountH5.textContent = `${wrapper.childElementCount} countries satisfied the search criteria`;
    }
}

function createCardFromInput() {
    searchCountryAndCapitalFromInput.length = 0;
    for(let country of countries) {
        let countryName = country[0].toLowerCase();
        let countryCapital = country[1].toLowerCase();
        if (countryName.startsWith(`${searchInput.value}`) || 
        countryCapital.startsWith(`${searchInput.value}`) || 
        countryName.includes(`${searchInput.value}`) || 
        countryCapital.includes(`${searchInput.value}`))
        {
            searchCountryAndCapitalFromInput.push(country);
        }
    }
    reloadCards(searchCountryAndCapitalFromInput);
}

nameButton.addEventListener('click', sortByName);
function sortByName() {
    nameButton.classList.toggle('active1');
    if (wrapper.childElementCount == 250 && 
        nameButton.classList.contains('active1')) {
            sortNameOrCapitalArrowDOWN(countries,nameButton,0);
    }
    if (wrapper.childElementCount == 250 && 
        !nameButton.classList.contains('active1')) {
            sortNameOrCapitalArrowUP(countries, nameButton,0);
    }
    if (wrapper.childElementCount < 250 && 
        nameButton.classList.contains('active1')) {
            sortNameOrCapitalArrowDOWN(searchCountryAndCapitalFromInput,nameButton,0);
    }
    if (wrapper.childElementCount < 250 && 
        !nameButton.classList.contains('active1')) {
            sortNameOrCapitalArrowUP(searchCountryAndCapitalFromInput, nameButton,0);
    }
}


capitalButton.addEventListener('click', sortByCapital);
function sortByCapital() {
    capitalButton.classList.toggle('active1');
    if (wrapper.childElementCount == 250 && 
        capitalButton.classList.contains('active1')) {
            sortNameOrCapitalArrowDOWN(countries,capitalButton,1);
    }
    if (wrapper.childElementCount == 250 && 
        !capitalButton.classList.contains('active1')) {
            sortNameOrCapitalArrowUP(countries, capitalButton,1);
    }
    if (wrapper.childElementCount < 250 && 
        capitalButton.classList.contains('active1')) {
            sortNameOrCapitalArrowDOWN(searchCountryAndCapitalFromInput,capitalButton,1);
    }
    if (wrapper.childElementCount < 250 && 
        !capitalButton.classList.contains('active1')) {
            sortNameOrCapitalArrowUP(searchCountryAndCapitalFromInput, capitalButton,1);
    }
}

populationButton.addEventListener('click', sortByPopulation);
function sortByPopulation() {
    populationButton.classList.toggle('active1');
    if (wrapper.childElementCount == 250 && 
        populationButton.classList.contains('active1')) {
        sortPopulationArrowDOWN(countries,populationButton);
    }
    if (wrapper.childElementCount == 250 && 
        !populationButton.classList.contains('active1')) {
        sortPopulationArrowUP(countries, populationButton);
    }
    if (wrapper.childElementCount < 250 && 
        populationButton.classList.contains('active1')) {
        sortPopulationArrowDOWN(searchCountryAndCapitalFromInput,populationButton);
    }
    if (wrapper.childElementCount < 250 && 
        !populationButton.classList.contains('active1')) {
        sortPopulationArrowUP(searchCountryAndCapitalFromInput, populationButton);
    }
}

function sortPopulationArrowUP(arr,button) {
        arr.sort((a, b) => a[2] - b[2]);
        wrapper.innerHTML = '';
        button.textContent = `${button.textContent.slice(0,-1)} ↓`;
        reloadCards(arr);   
}
function sortPopulationArrowDOWN(arr,button) {
        arr.sort((a, b) => b[2] - a[2]);
        wrapper.innerHTML = '';
        button.textContent = `${button.textContent.slice(0,-1)} ↑`;
        reloadCards(arr);   
}

function sortNameOrCapitalArrowDOWN(arr,button,numOfArrayElem) {
        arr.sort((a, b) => a[numOfArrayElem].localeCompare(b[numOfArrayElem]));
        wrapper.innerHTML = '';
        button.textContent = `${button.textContent.slice(0,-1)} ↑`;
        reloadCards(arr);   
}
function sortNameOrCapitalArrowUP(arr,button,numOfArrayElem) {
        arr.sort((a, b) => b[numOfArrayElem].localeCompare(a[numOfArrayElem]));
        wrapper.innerHTML = '';
        button.textContent = `${button.textContent.slice(0,-1)} ↓`;
        reloadCards(arr);   
}




















function spinnerDisplayNone() {
    if(wrapper.children.length > 1) {
        spinner.style.display = 'none';
    } 
}