const body = document.body;
body.style.margin = '15px';
body.style.fontSize = '8vh';
body.style.fontWeight = '900';

let str = "30 DAYS OF JAVASCRIPT CHALLENGE 2020 SZYMON BRYCZKOWSKI";
const text = document.createElement("div");
text.setAttribute('class', 'text');
text.style.animation = 'opacity 2s infinite';
text.style.height = '90vh';

const fonts = [
    "Arial",
    "Verdana",
    "Tahoma",
    "Times New Roman",
    "Georgia",
    "Brush Script MT",
];

body.insertAdjacentElement('afterbegin', text);


function colorizeEachLetter() {
    let arrFromStr = str.split('');
    let newFont = Math.floor(Math.random() * fonts.length);
    let HTMLtext = ``;
    for(let i = 0; i < arrFromStr.length; i++){ 
        HTMLtext += `<span style='color:${hexaColor()}'>${arrFromStr[i]}</span>`;
    }
    
    text.style.fontFamily = fonts[newFont];
    text.style.background =  `linear-gradient(to right, ${hexaColor()} 0%, ${hexaColor()} 20%, ${hexaColor()} 61%), linear-gradient(${hexaColor()} 52%, ${hexaColor()} 60%, ${hexaColor()} 61%)`;
    text.innerHTML = HTMLtext;
}
setInterval(colorizeEachLetter,2000);


function hexaColor() {
    const str = "0123456789abcdef";
    let hexa = '#';
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length);
        hexa += str[index];
    }
    return hexa;
}






