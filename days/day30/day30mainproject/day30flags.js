const url = "https://restcountries.com/v3.1/all";
let countries = [];
const wrapper = document.querySelector(".wrapper");
const searchInput = document.querySelector("#mainInput");
const subheader = document.querySelector(".subheader");
const countriesCountH5 = document.querySelector(".countries-count");
const spinner = document.querySelector(".spinner");

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
            countries.push([data[i].name.common,(data[i].capital[0]).toString(),data[i].population,data[i].flags.png, langs]);
        }
        reloadCards(countries);
        subheader.textContent = `Currently, we have ${countries.length} countries`;
        countriesCountH5.textContent = `${wrapper.children.length - 1} countries sitisfield the search criteria`;
        spinnerDisplayBlock();
        
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
                    <div class="languages">Languages: ${element[4]}</div>
                    <div class="population">Population: ${element[2].toLocaleString("en-US")}</div>
                </div>
            `;
        wrapper.appendChild(card);
    });
}





// searchInput.addEventListener('input', (event) => {
    // const searchValue = event.target.value.toLowerCase();
    // if (searchValue == "") {
    //     wrapper.innerHTML = '';
    //     reloadCards(countries);
    // }
    //  

// });

// function searchFunction() {
//     if(searchInput.value == '') {
            // reloadCards(countries);
//     }
//     wrapper.innerHTML = '';
// }






function spinnerDisplayBlock() {
    if(wrapper.children.length > 1) {
        spinner.style.display = 'none';
    } 
}