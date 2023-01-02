const body = document.body;
const text = document.querySelector("p");
const fonts = ['Arial', 'Verdana', 'Tahoma', 'Times New Roman', 'Georgia', 'Brush Script MT'];
// let str = "30 DAYS OF JAVASCRIPT CHALLENGE 2020 SZYMON BRYCZKOWSKI";



body.insertAdjacentElement("afterbegin", text);












function hexaColor() {
    const str = "0123456789abcdef";
    let hexa = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length);
        hexa += str[index];
    }
    return hexa;
}
