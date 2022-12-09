//Function to generate n size grid
function createGrid() {
    
    const sketchBox = document.querySelector(".sketchbox");
    sketchBox.innerHTML = ""; //Clears sketchbox

    const width = sketchBox.offsetWidth;

    const n = Number(prompt("Enter a number 1-100 to generate a grid", ""));

    for (let i = 0; i < n; i++) {
        //Create a row container at the start of every row and set as flex container
        const row = document.createElement("div");
        row.classList.toggle("row");

        //Fill the row container with boxes
        for (let j = 0; j < n; j++) {
            const box = document.createElement("div");
            box.classList.toggle("box");

            //Set width and height of the box based on size of sketch box
            box.style.width = `${width/n}px`
            box.style.height = `${width/n}px`

            //When mouseover, change color of the box;
            box.addEventListener("mouseover", () => box.classList.add("hover"));
            
            row.appendChild(box);
        }
        //Add the row full of boxes into the sketchbox before starting on the next row
        sketchBox.append(row);
    }
}

const button = document.querySelector("button");
button.addEventListener("click", createGrid);