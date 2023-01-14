let countryName = "";
let countryCapital = "";
let countryPopulation = "";
let languages = "";
let countryFlagURL = "";
let elem = [];
let countries = [];
let countries1 = [];
let countriesFinal = [];

const wrapper = document.querySelector(".wrapper");
const mainInput = document.querySelector("#mainInput");
const countriesCountH5 = document.querySelector(".countries-count");

const url = "https://restcountries.com/v3.1/all";
fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.sort((a,b) => b.name.common - a.name.common));
        for (let i = 0; i < data.length; i++) {
            if (data[i].capital === undefined || !data[i].capital) {
                data[i].capital = ['None capital'];
            }
            countries.push(data[i].name.common,(data[i].capital).toString(),data[i].population);
            // console.log(data[i].name.common, data[i].population, data[i].flags.svg);
        }
        console.log(countries);
        // countries = [...data];
        // countries.forEach((element) => {
        //     countryName = element.name.common;
        //     countryPopulation = element.population;
        //     countryFlagURL = element.flags.svg;
        //     countryCapital = element.capital;
        //     if(countryCapital == undefined || !countryCapital) {
        //         countryCapital = 'None capital';
        //     }
        //     if(element.languages) {
        //         languages = ((Object.values(element.languages)).slice(0,8).toString()).replace(/,/g, ', ');
        //     }

        //     const card = document.createElement("div");
        //     card.setAttribute('class', 'card');
        //     card.innerHTML = 
        //     `  
        //         <img style='background-image: url(${countryFlagURL})' class="flag"></img>
        //         <div class="country-name">${element.name.common}</div>
        //         <div class="country-info">
        //             <div class="capital">Capital: ${countryCapital}</div>
        //             <div class="languages">Languages: ${languages}</div>
        //             <div class="population">Population: ${countryPopulation}</div>
        //         </div>
        //     `;
        //     wrapper.appendChild(card);
            

        // });
        // countries1.push(countryName,countryPopulation,countryFlagURL,countryCapital,languages);
        // console.log(countries1);
        // countriesFinal.push(countries1);
        // // console.log(countriesFinal);
        // countriesCountH5.textContent = `${wrapper.childElementCount} countries sitisfield the search criteria`;
        // return countries;
    })
    .catch((error) => console.error(error));


mainInput.addEventListener('input', searchFunction);

function searchFunction() {
    if(mainInput.value == '') {

    }
    wrapper.innerHTML = '';
}


// function main() {
//     countries.forEach((element) => {
//         countryName = element.name.common;
//         countryPopulation = element.population;
//         countryFlagURL = element.flags.svg;
//         countryCapital = element.capital;
//         if(countryCapital == undefined || !countryCapital) {
//             countryCapital = 'None capital';
//         }
//         //1)take arr values(langs) from language obj, 2) remove more then 8 languages from arr
//         //3) make string from array of languages (without spaces), 4) add spaces after comma;
//         if(element.languages) {
//             languages = ((Object.values(element.languages)).slice(0,8).toString()).replace(/,/g, ', ');
//         }
//         const card = document.createElement("div");
//         card.setAttribute('class', 'card');
//         card.innerHTML = 
//         `  
//             <img style='background-image: url(${countryFlagURL})' class="flag"></img>
//             <div class="country-name">${element.name.common}</div>
//             <div class="country-info">
//                 <div class="capital">Capital: ${countryCapital}</div>
//                 <div class="languages">Languages: ${languages}</div>
//                 <div class="population">Population: ${countryPopulation}</div>
//             </div>
//         `;
//         wrapper.appendChild(card);
//     });
// }