const displayNode = document.querySelector(".display");
const pastOpNode = document.querySelector(".pastOp");
let number1 = "";
let number2 = "";
let isOperation = false;
let operation = "";
let pastOp = "";
function operate(n1, n2, operation){
    num1 = parseFloat(n1);
    num2 = parseFloat(n2);
    if(!(num1 && num2 && operation)) return;
    switch(operation){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
    }
}
function onClick(e){
    let buttonPressed = e.target.textContent;
    if(buttonPressed == "π") buttonPressed = "3.14159";
    if(buttonPressed == "ac"){
        number1 = "";
        number2 = "";
        isOperation = false;
        operation = "";
    }
    let buttonType = e.target.classList[0];
    console.log(buttonType);
    if(!isOperation){
        if(buttonType == "num")
            number1 = "".concat(number1, buttonPressed);
        if(buttonType == "ops"){
            isOperation = true;
            operation = buttonPressed;
        }
    }else{
        if(buttonType == "num") number2 = "".concat(number2, buttonPressed);
        if(buttonType == "equals"){
            pastOp = number1 + operation + number2 + "=";
            number1 = operate(number1, number2, operation);
            number2 = "";
            operation = "";
            isOperation = false;
        }
        if(buttonType == "ops"){
            pastOp = number1 + operation + number2 + "=";
            number1 = operate(number1, number2, operation);
            number2 = "";
            operation = buttonPressed;
        }
    }
    pastOpNode.textContent = pastOp;
    displayNode.textContent = number1 + operation + number2;
}

const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) =>{
    button.addEventListener('click', onClick);
});