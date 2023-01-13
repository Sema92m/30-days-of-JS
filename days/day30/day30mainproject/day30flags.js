let countryName = "";
let countryCapital = "";
let countryPopulation = "";
let languages = "";
let countryFlagURL = "";
let elem = [];
let arr = [];

const wrapper = document.querySelector(".wrapper");


const url = "https://restcountries.com/v3.1/all";
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        // arr = [...data];
        arr.push(data);
        // console.log(arr);
        // return arr;
        // data.forEach((element) => {
        //     countryCapital = element.capital;
        // if(countryCapital == undefined || !countryCapital) {
        //     countryCapital = 'None capital';
        // }
        // countryName = element.name.common;
        // countryPopulation = element.population;
        // countryFlagURL = element.flags.svg;
        // elem.push(countryCapital,countryName,countryPopulation,countryFlagURL);
        // });
        // arr.push(elem);
    })
    .catch((error) => console.error(error));



function main() {
    console.log(arr);
    // console.log(arr.flat());
    arr.forEach((element) => {
        console.log(element);
        countryCapital = element.capital;
        if(countryCapital == undefined || !countryCapital) {
            countryCapital = 'None capital';
        }
        //1)take arr values(langs) from language obj, 2) remove more then 8 languages from arr
        //3) make string from array of languages (without spaces), 4) add spaces after comma;
        if(element.languages) {
            languages = ((Object.values(element.languages)).slice(0,8).toString()).replace(/,/g, ', ');
        }
        //
        countryName = element.name.common;
        countryPopulation = element.population;
        countryFlagURL = element.flags.svg;
        const card = document.createElement("div");
        card.setAttribute('class', 'card');
        card.innerHTML = 
        `  
            <img style='background-image: url(${countryFlagURL})' class="flag"></img>
            <div class="country-name">${element.name.common}</div>
            <div class="country-info">
                <div class="capital">Capital: ${countryCapital}</div>
                <div class="languages">Languages: ${languages}</div>
                <div class="population">Population: ${countryPopulation}</div>
            </div>
        `;
                        wrapper.appendChild(card);
    });
    
}

main();