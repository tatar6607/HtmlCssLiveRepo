let screen;

const changeScreen = (selectedNum) => {
    screen = document.getElementById("screen");
    checkNum(selectedNum);
}

const buttonsValues = document.querySelectorAll("button");
buttonsValues.forEach(element => {
    element.addEventListener('click' , e => {
       let buttonText = e.target.innerHTML;
       changeScreen(buttonText);
   //   console.log(buttonText);
    })
})

const checkNum = (selectedNum) => {
    screen.innerHTML == "0.0"  
    ? screen.innerHTML = selectedNum 
    : screen.innerHTML += selectedNum;

    if(selectedNum=="AC") {
        screen.innerHTML = "0.0";
        console.log(screen.innerHTML);
    }else {
    
    }

       
} 








