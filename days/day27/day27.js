const technologies = ["JAVASCRIPT", "HTML", "MONGODB", "NODE", "PYTHON"];
let hobbies = [
    ["🌱", "Educator"],
    ["💻", "Programmer"],
    ["🌐", "Developer"],
    ["🔥", "Motivator"],
    ["📔", "Content Creator"],
];

const animateContainer = document.querySelector("#animate");
animateContainer.innerHTML = `<div class='animateChild animateChildPic'>${hobbies[0][0]}</div><div class='animateChild animateChildText'>${hobbies[0][1]}</div>`;

const hexaColor = () => {
    const str = "0123456789abcdef";
    let hexa = "#";
    let index;
    for (let i = 0; i < 6; i++) {
        index = Math.floor(Math.random() * str.length);
        hexa += str[index];
    }
    return hexa;
};

const animatedTech = document.querySelector(".animatedTech");
function changeColorAndText() {
    let index = Math.floor(Math.random() * technologies.length);
    animatedTech.textContent = technologies[index];
    animatedTech.style.animation = "opacity 2s infinite";
    animatedTech.style.color = hexaColor();
}
setInterval(changeColorAndText, 2000);






// function outerFunction() {
//     let count = -1;
//     function innerFunction() {
//         count++;
//         return count;
//     }

//     return innerFunction;
// }
// const innerFunc = outerFunction();
// console.log(innerFunc());
// console.log(innerFunc());
// console.log(innerFunc());




function contentAnimateContainer() {
    let index = Math.floor(Math.random() * hobbies.length);
    animateContainer.innerHTML = `<div class='animateChild animateChildPic'>${hobbies[index][0]}</div><div class='animateChild animateChildText'>${hobbies[index][1]}</div>`;
}
setInterval(contentAnimateContainer,2000);





const buttons = document.querySelectorAll(".chalenge");
buttons.forEach((elem) => elem.addEventListener('mouseover', ()=> {
	elem.style.backgroundColor = 'rgb(250, 212, 176)';
	elem.style.scale = '110%';
}));
buttons.forEach((elem) => elem.addEventListener('mouseout', ()=> {
	elem.style.backgroundColor = '';
	elem.style.scale = '';
}));