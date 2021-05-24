const changeScreen = (selectedNum) => {
    const screen = document.getElementById("screen");
    screen.innerHTML = selectedNum;
}

const buttonsValues = document.querySelectorAll("button");

// console.log(buttonsValues.length);
// console.log(buttonsValues);

buttonsValues.forEach(element => {
    element.addEventListener('click' , e => {
       let buttonText = e.target.innerHTML;
       changeScreen(buttonText)
       console.log(buttonText);
    })
})

