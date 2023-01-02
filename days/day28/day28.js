const container = document.querySelector(".container");
const itemsContainer = document.querySelector(".itemsContainer");
const inputName = document.querySelector("#inputName");
const inputLastName = document.querySelector("#inputLastName");
const inputCountry = document.querySelector("#inputCountry");
const inputScore = document.querySelector("#inputScore");
const buttonAddPlayer = document.querySelector("#addPlayer");
const warning = document.querySelector("#warning");
let singlItem ;

buttonAddPlayer.addEventListener('click', addItem);
function addItem() {
    // if (inputName.value == '' || inputLastName.value == '' || inputCountry.value == '' || inputScore.value == '') {
    //     warning.style.display = 'block';
    //     warning.textContent = 'All fields are requared';
    //     return;
    // }
    if(typeof(+inputScore.value) !== 'number') {
        console.log(+inputScore.value, typeof(+inputScore.value));
        warning.style.display = 'block';
        warning.textContent = 'Score value is not a number';
        inputScore.value = '';
        return;
    }
    singlItem = `       <li class='singlItem'>
                            <div class="nameAndDate">
                                <div class="name">${inputName.value} ${inputLastName.value}</div>
                                <div class="date">${showDate()}</div>
                            </div>
                            <div class="country"><p>${inputCountry.value}</p></div>
                            <div class="score">${inputScore.value}</div>
                            <div class="buttonsContainer">
                                <button class="button del">🗑</button>
                                <button class="button plus">+5</button>
                                <button class="button minus">-5</button>
                            </div>
                        </li>
                    `;
    
    itemsContainer.insertAdjacentHTML('afterbegin', singlItem);

    let allMinuses = document.querySelectorAll(".minus");
    let allPluses = document.querySelectorAll(".plus");


    allMinuses.forEach(element => {
        element.addEventListener('click', function() {
            // let parent = element.closest('.singlItem').querySelector(".score");
            // console.log(element.parentNode);
            // parent.innerHTML = +parent.innerHTML - 5;
        });
    });
    allPluses.forEach(element => {
        element.addEventListener('click', function() {
            let parent = element.closest('.acb');
            parent.innerHTML = +parent.innerHTML + 5;
        });
    });

    let delButtons = document.querySelectorAll(".del");
    delButtons.forEach(element => {
        element.addEventListener('click', function() {
            let parent = element.closest('.singlItem');
            parent.remove();
        });
    });
}





function showDate() {
    const now = new Date();
    const year = now.getFullYear();
    const options = { month: "long" };
    const month = (new Intl.DateTimeFormat("en-US", options).format(now)).slice(0,3);
    const day = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    const fullTime = `${month} ${day}, ${year} ${hours}:${minutes}`;
    return fullTime;
}


