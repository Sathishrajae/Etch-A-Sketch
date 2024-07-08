const button =document.querySelector("#button");
const container =document.querySelector("#container");

function changeColor(element){
    element.classList.add("colored");
}
function createGrid(width) {
    container.replaceChildren();
    for(let i = 0; i < width; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < width; j++){
            const square = document.createElement("div");
            square.classList.add("square");
            square.addEventListener("mouseenter", Event =>{
                changeColor(event.target);
            });
            row.appendChild(square);
        }
        container.appendChild(row);
    }
}
button.onclick =() => {
    let input =prompt("Enter grid number (1 to 100)");
    input = parseInt(input);
    if (input > 100) {
        input =100;
}
createGrid(input);
}
