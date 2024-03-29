const url = "https://restcountries.com/v3.1/all";
let countries = [];//main arr includes main info from urlarr
let searchCountryAndCapitalFromInput = [];
let allLangArray = [];//used to count sum of all langs

const wrapper = document.querySelector(".wrapper");
const searchInput = document.querySelector("#mainInput");
const subheader = document.querySelector(".subheader");
const countriesCountH5 = document.querySelector(".countries-count");
const spinner = document.querySelector(".spinner");

const nameButton = document.querySelector("#name-button");
const capitalButton = document.querySelector("#capital-button");
const populationButton = document.querySelector("#population-button");
const sortButton = document.querySelector("#sort-button");

//statistic
const statisticContainer = document.querySelector(".statistic-continer");
const worldPopulation = document.querySelector(
    "#statistics-block-population-world"
);
const statistics = document.querySelector(".statistics");
const statisticButtonPopulation = document.querySelector(
    "#statistic-button-population"
);
const statisticButtonLanguages = document.querySelector(
    "#statistic-button-languages"
);
const statisticSubheader = document.querySelector("#statistic-subheader");
const footer = document.querySelector(".footer");



fetch(url)
    .then((response) => response.json())
    .then((data) => {
        for (let i = 0; i < data.length; i++) {
            if (data[i].capital === undefined || !data[i].capital) {
                data[i].capital = ["None capital"];
            }
            if (!data[i].languages || data[i].languages == undefined) {
                data[i].languages = "";
            }
            let langs = Object.values(data[i].languages);

            allLangArray.push(langs); // create SET of sum unic langs
            countries.push([
                data[i].name.common,
                data[i].capital[0].toString(),
                data[i].population,
                data[i].flags.png,
                langs.toString().replace(/,/g, ", ")
            ]);
        }
        worldPopulation.textContent = countries
            .map((elem) => elem[2])
            .reduce((sum, cur) => sum + cur)
            .toLocaleString("en-US");
        reloadCards(countries);
        subheader.textContent = `Currently, we have ${countries.length} countries`;
        countriesCountH5.textContent = `${wrapper.childElementCount} countries satisfied the search criteria`;
        spinnerDisplayNone();
    })
    .catch((error) => console.error(error));



function reloadCards(arr) {
    arr.forEach((element) => {
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        card.innerHTML = `  
                            <img src='${element[3]}' class="flag" alt='${element[0]}'></img>
                            <div class="country-name">${element[0]}</div>
                            <div class="capital">Capital: ${element[1]}</div>
                            <div class="population">Population: ${element[2].toLocaleString(
                                "en-US"
                            )}</div>
                            <div class="languages">Languages: ${element[4]}</div>
                        `;
        wrapper.appendChild(card);
        countriesCountH5.textContent = `${wrapper.children.length} countries satisfied the search criteria`;
    });
    updateStatistic();
}

searchInput.addEventListener("input", searchFunc);

function searchFunc() {
    wrapper.innerHTML = "";
    if (searchInput.value === "") {
        reloadCards(countries);
    }
    if (searchInput.value !== "") {
        createCardFromInput();
        countriesCountH5.textContent = `${wrapper.childElementCount} countries satisfied the search criteria`;
    }
}

function createCardFromInput() {
    searchCountryAndCapitalFromInput.length = 0;
    for (let country of countries) {
        let countryName = country[0].toLowerCase();
        let countryCapital = country[1].toLowerCase();
        if (
            countryName.startsWith(`${searchInput.value}`) ||
            countryCapital.startsWith(`${searchInput.value}`) ||
            countryName.includes(`${searchInput.value}`) ||
            countryCapital.includes(`${searchInput.value}`)
        ) {
            searchCountryAndCapitalFromInput.push(country);
        }
    }
    reloadCards(searchCountryAndCapitalFromInput);
}

nameButton.addEventListener("click", sortByName);
function sortByName() {
    nameButton.classList.toggle("active1");
    if (
        wrapper.childElementCount == 250 &&
        nameButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowDOWN(countries, nameButton, 0);
    }
    if (
        wrapper.childElementCount == 250 &&
        !nameButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowUP(countries, nameButton, 0);
    }
    if (
        wrapper.childElementCount < 250 &&
        nameButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowDOWN(
            searchCountryAndCapitalFromInput,
            nameButton,
            0
        );
    }
    if (
        wrapper.childElementCount < 250 &&
        !nameButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowUP(
            searchCountryAndCapitalFromInput,
            nameButton,
            0
        );
    }
}

capitalButton.addEventListener("click", sortByCapital);
function sortByCapital() {
    capitalButton.classList.toggle("active1");
    if (
        wrapper.childElementCount == 250 &&
        capitalButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowDOWN(countries, capitalButton, 1);
    }
    if (
        wrapper.childElementCount == 250 &&
        !capitalButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowUP(countries, capitalButton, 1);
    }
    if (
        wrapper.childElementCount < 250 &&
        capitalButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowDOWN(
            searchCountryAndCapitalFromInput,
            capitalButton,
            1
        );
    }
    if (
        wrapper.childElementCount < 250 &&
        !capitalButton.classList.contains("active1")
    ) {
        sortNameOrCapitalArrowUP(
            searchCountryAndCapitalFromInput,
            capitalButton,
            1
        );
    }
}

populationButton.addEventListener("click", sortByPopulation);
function sortByPopulation() {
    populationButton.classList.toggle("active1");
    if (
        wrapper.childElementCount == 250 &&
        populationButton.classList.contains("active1")
    ) {
        sortPopulationArrowDOWN(countries, populationButton);
    }
    if (
        wrapper.childElementCount == 250 &&
        !populationButton.classList.contains("active1")
    ) {
        sortPopulationArrowUP(countries, populationButton);
    }
    if (
        wrapper.childElementCount < 250 &&
        populationButton.classList.contains("active1")
    ) {
        sortPopulationArrowDOWN(
            searchCountryAndCapitalFromInput,
            populationButton
        );
    }
    if (
        wrapper.childElementCount < 250 &&
        !populationButton.classList.contains("active1")
    ) {
        sortPopulationArrowUP(
            searchCountryAndCapitalFromInput,
            populationButton
        );
    }
}

function sortPopulationArrowUP(arr, button) {
    arr.sort((a, b) => a[2] - b[2]);
    wrapper.innerHTML = "";
    button.textContent = `POPULATION ⬇`;
    nameButton.textContent = "NAME ";
    capitalButton.textContent = "CAPITAL ";
    capitalButton.classList.remove("active1");
    nameButton.classList.remove("active1");
    reloadCards(arr);
}
function sortPopulationArrowDOWN(arr, button) {
    arr.sort((a, b) => b[2] - a[2]);
    wrapper.innerHTML = "";
    button.textContent = `POPULATION ⬆`;
    nameButton.textContent = "NAME ";
    capitalButton.textContent = "CAPITAL ";
    capitalButton.classList.remove("active1");
    nameButton.classList.remove("active1");
    reloadCards(arr);
}

function sortNameOrCapitalArrowDOWN(arr, button, numOfArrayElem) {
    arr.sort((a, b) => a[numOfArrayElem].localeCompare(b[numOfArrayElem]));
    wrapper.innerHTML = "";
    button.textContent = `${button.textContent.slice(0, -1)} ⬆`;
    if (button == nameButton) {
        capitalButton.textContent = "CAPITAL ";
        populationButton.textContent = "POPULATION";
        capitalButton.classList.remove("active1");
        populationButton.classList.remove("active1");
    }
    if (button == capitalButton) {
        nameButton.textContent = "NAME ";
        populationButton.textContent = "POPULATION";
        nameButton.classList.remove("active1");
        populationButton.classList.remove("active1");
    }
    reloadCards(arr);
}
function sortNameOrCapitalArrowUP(arr, button, numOfArrayElem) {
    arr.sort((a, b) => b[numOfArrayElem].localeCompare(a[numOfArrayElem]));
    wrapper.innerHTML = "";
    button.textContent = `${button.textContent.slice(0, -1)} ⬇`;
    if (button == nameButton) {
        capitalButton.textContent = "CAPITAL ";
        populationButton.textContent = "POPULATION";
        capitalButton.classList.remove("active1");
        populationButton.classList.remove("active1");
    }
    if (button == capitalButton) {
        nameButton.textContent = "NAME ";
        populationButton.textContent = "POPULATION";
        nameButton.classList.remove("active1");
        populationButton.classList.remove("active1");
    }
    reloadCards(arr);
}

//statistic
statisticButtonPopulation.addEventListener('click', updateStatistic);
function updateStatistic() {
    statistics.innerHTML = "";
    worldPopulation.textContent = countries
            .map((elem) => elem[2])
            .reduce((sum, cur) => sum + cur)
            .toLocaleString("en-US");
    statisticSubheader.textContent = 'WORLD POPULATION';
    footer.style.display = 'block';
    statisticContainer.style.display = 'block';
    let arrFromWrapperCards = Array.from(wrapper.childNodes).slice(0, 10);

    arrFromWrapperCards.forEach((elem) => {
        const block = document.createElement("div");
        block.classList.add("statistics-block");
        let worldPopulationNumber = +worldPopulation.textContent.replace(
            /,/g,
            ""
        );
        let countryPopulation =
            +elem.children[3].textContent.replace(/\D/gi, "");
        let countryBlockWidth = (
            (countryPopulation / worldPopulationNumber) *
            100
        ).toFixed(2);
        block.innerHTML = `
                            <div class="statistics-block-name">${
                                elem.children[1].textContent
                            }</div>
                            <div class="percentage-container">
                                <div class="statistics-block-percentage" style='width:${countryBlockWidth}%'></div>
                                <div class="statistics-block-percentage-gray"></div>
                            </div>
                            <div class="statistics-block-population">
                            ${countryPopulation.toLocaleString()}</div>
                        `;
        statistics.appendChild(block);
    });
}




statisticButtonLanguages.addEventListener('click', updateStatisticLanguages);
function updateStatisticLanguages() {
    statistics.innerHTML = "";
    statisticSubheader.textContent = 'WORLD LANGUAGES';
    footer.style.display = 'block';
    statisticContainer.style.display = 'block';

    let arrFromWrapperCards = Array.from(wrapper.childNodes).slice(0, 10);
    let worldLanguages = Array.from(new Set(allLangArray.flat())).length;//sum of all unic langs
    worldPopulation.textContent = worldLanguages;

    arrFromWrapperCards.forEach((elem) => {
        const block = document.createElement("div");
        block.classList.add("statistics-block");
        
        let countryLanguage =
            elem.children[3].textContent.replace(/Languages: /, '').split(',').length;
        let countryBlockWidth = (
            (countryLanguage / worldLanguages) *
            100
        ).toFixed(1);
        block.innerHTML = `
                            <div class="statistics-block-name">${
                                elem.children[1].textContent
                            }</div>
                            <div class="percentage-container">
                                <div class="statistics-block-percentage" style='width:${countryBlockWidth}%'></div>
                                <div class="statistics-block-percentage-gray"></div>
                            </div>
                            <div class="statistics-block-population">
                            ${countryLanguage}</div>
                        `;
        statistics.appendChild(block);
    });
}








//statistic


















function spinnerDisplayNone() {
    if (wrapper.children.length > 1) {
        spinner.style.display = "none";
    }
}
