let screen;
let firstValue;
let operator;
let secondValue; 

const buttonsValues = document.querySelectorAll("button");
buttonsValues.forEach(element => {
    element.addEventListener('click' , (e) => {
       let buttonText = e.target.innerHTML;
       changeScreen(buttonText);
    })
})

const changeScreen = (selectedNum) => {
    screen = document.getElementById("screen");
    checkNum(selectedNum);
}

const checkNum = (selectedNum) => {

    if(selectedNum!=0 && (screen.innerHTML == "0" || screen.innerHTML == "0.0")) {
        screen.innerHTML = selectedNum; 
    }else {
        screen.innerHTML += selectedNum;
    }

    // screen.innerHTML == "0" && selectedNum == "x" || screen.innerHTML == "0" && selectedNum == "&divide;"
    // ? screen.innerHTML = "0" 
    // : screen.innerHTML += selectedNum;    

    if(selectedNum=="AC") {
        screen.innerHTML = "0";
        // console.log(screen.innerHTML);
    }  
} 







// set background color mouse hover - over 
const bgContainer = document.querySelector(".container");
bgContainer.onmouseover = () => bgContainer.setAttribute("class", "container mt-5 bg-dark p-5");
bgContainer.onmouseout = () => bgContainer.setAttribute("class", "container mt-5 bg-warning p-5");

// document.querySelector(".bg-secondary").onmouseover = function () {
//     const bgContainer = document.querySelector(".bg-secondary");
//     bgContainer.setAttribute("class", "bg-white p-2 rounded-3");
//     // document.querySelector(".bg-secondary").style.backgroundColor = "white";
//     console.log(bgContainer);
// }

// bgContainer.addEventListener('mouseover', () => {
//     bgContainer.setAttribute("class", "container mt-5 bg-dark p-5")
// });

// bgContainer.addEventListener('mouseout', () => {
//     bgContainer.setAttribute("class", "container mt-5 bg-warning p-5")
// })







