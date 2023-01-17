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
        countriesCountH5.textContent = `${wrapper.children.length} countries satisfied the search criteria`;
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
    }
}

function createCardFromInput() {
    searchCountryAndCapitalFromInput.length = 0;
    for(let country of countries) {
        let countryName = country[0].toLowerCase();
        let countryCapital = country[1].toLowerCase();
        if (countryName.startsWith(`${searchInput.value}`) || 
        countryCapital.startsWith(`${searchInput.value}`)) {
            searchCountryAndCapitalFromInput.push(country);
        }
    }
    reloadCards(searchCountryAndCapitalFromInput);
}









































// searchInput.addEventListener('input', (event) => {
//     const searchValue = event.target.value.toLowerCase().trim();
//     if (searchValue === "") {
//         searchCountryAndCapitalFromInput = countries;
//         wrapper.innerHTML = '';
//         reloadCards(searchCountryAndCapitalFromInput);
//     }
//     if (searchValue !== "")  {
//         wrapper.innerHTML = '';
//         createCardFromInputSearch();
//     } 
// });


// function createCardFromInputSearch() {
//     for(let country of countries) {
//         let countryName = country[0].toLowerCase();
//         let countryCapital = country[1].toLowerCase();
//         if (countryName.startsWith(`${searchInput.value}`) || 
//         countryCapital.startsWith(`${searchInput.value}`)) {
//             searchCountryAndCapitalFromInput.push(country);
//         }
//     }
//     reloadCards(searchCountryAndCapitalFromInput);
//     searchCountryAndCapitalFromInput.length = 0;
// }


// function sortByPopulation() {
//     populationButton.classList.toggle('active1');
//     populationButton.textContent = 'POPULATION ↑';
//     if (wrapper.children.length === 250 && populationButton.classList.contains('active1')) {
//         wrapper.innerHTML = '';
//         reloadCards(countries.sort((a,b) => b[2] - a[2]));
//         populationButton.textContent = 'POPULATION ↑';
//     }
//     if (wrapper.children.length === 250 && !populationButton.classList.contains('active1')) {
//         wrapper.innerHTML = '';
//         reloadCards(countries.sort((a,b) => a[2] - b[2]));
//         populationButton.textContent = 'POPULATION ↓';
//     }
    // if ((searchCountryAndCapitalFromInput.length === 0 || !searchCountryAndCapitalFromInput) && populationButton.classList.contains('active1')) {
    //     wrapper.innerHTML = '';
    //     reloadCards(countries.sort((a,b) => b[2] - a[2]));
    //     populationButton.textContent = 'POPULATION ↑';
    // } if ((searchCountryAndCapitalFromInput.length === 0 || !searchCountryAndCapitalFromInput) && !populationButton.classList.contains('active1')) {
    //     wrapper.innerHTML = '';
    //     reloadCards(countries.sort((a,b) => a[2] - b[2]));
    //     populationButton.textContent = 'POPULATION ↓';
    // }
//     if ((searchCountryAndCapitalFromInput.length < 250) && populationButton.classList.contains('active1')) {
//         wrapper.innerHTML = '';
//         reloadCards(searchCountryAndCapitalFromInput.sort((a,b) => b[2] - a[2]));
//         populationButton.textContent = 'POPULATION ↑';
//     } 
//     if ((searchCountryAndCapitalFromInput.length < 250) && !populationButton.classList.contains('active1')) {
//         wrapper.innerHTML = '';
//         reloadCards(searchCountryAndCapitalFromInput.sort((a,b) => a[2] - b[2]));
//         populationButton.textContent = 'POPULATION ↓';
//     }
// }  

// nameButton.addEventListener('click', sortByName);
// capitalButton.addEventListener('click', sortByCapital);
// populationButton.addEventListener('click', sortByPopulation);










function spinnerDisplayNone() {
    if(wrapper.children.length > 1) {
        spinner.style.display = 'none';
    } 
}