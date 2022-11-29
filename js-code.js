const displayNode = document.querySelector(".display");
function onClick(e){
    console.log(e.target.textContent);
    displayNode.textContent += e.target.textContent;
}

const buttons = document.querySelectorAll(".buttons");
buttons.forEach((button) =>{
    button.addEventListener('click', onClick);
});