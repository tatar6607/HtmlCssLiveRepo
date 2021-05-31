let screen;
let firstValue;
let operator;
let secondValue; 

const operators = ["+", "-", "&times;", "&divide;"];
let calcList = new LinkedList();

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

    // if(selectedNum!=0 && (screen.innerHTML == "0" || screen.innerHTML == "0.0")) {
    //     screen.innerHTML = selectedNum; 
    // }else {
    //     screen.innerHTML += selectedNum;
    // }

    if(selectedNum === 0){
        if(screen.innerHTML.includes(".")){
            screen.innerHTML += selectedNum
        }
    }else if(selectedNum === "AC") {
        screen.innerHTML = "0";
        // console.log(screen.innerHTML);
    } else if(selectedNum === "."){
        if(screen.innerHTML.length === 0){
            screen.innerHTML = "0."
        }else{
            screen.innerHTML += "."
        }
    }else if(operators.includes(selectedNum)){
        const node1 = new ListNode(screen.innerHTML, false)
        const node2 = new ListNode(selectedNum, true)
        node1.next = node2
        if(calcList.head === null){
            calcList.head = node1
        }
    }else if(selectedNum === "="){
        // traverse the linkedlist 
    }

    // screen.innerHTML == "0" && selectedNum == "x" || screen.innerHTML == "0" && selectedNum == "&divide;"
    // ? screen.innerHTML = "0" 
    // : screen.innerHTML += selectedNum;    

     
}

class ListNode {
    constructor(value = '', operator = false) {
        this.data = {
            "operator": operators,
            "value": value
        }
        this.next = null                
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head
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







