//Function to generate a 16x16 grid
function createGrid() {
    
    const sketchBox = document.querySelector(".sketchbox");
    sketchBox.innerHTML = "";
    
    for (let i = 0; i < 16; i++) {
        //Create a row container at the start of every row and set as flex container
        const row = document.createElement("div");
        row.classList.toggle("row");

        //Fill the row container with boxes
        for (let j = 0; j < 16; j++) {
            const box = document.createElement("div");
            box.classList.toggle("box");

            //When mouseover, change color of the box;
            box.addEventListener("mouseover", () => box.classList.add("hover"))

            row.appendChild(box);
        }
        //Add the row full of boxes into the sketchbox before starting on the next row
        sketchBox.append(row);
    }
}

const button = document.querySelector("button");
button.addEventListener("click", createGrid);