const root = document.querySelector("body");
let row = 16;
let col = 16;

const container = document.createElement("div");
container.classList.add("container");

const gridInner = document.createElement("div");
gridInner.classList.add("container", "inner");

container.appendChild(gridInner);
root.appendChild(container);

const controls = document.createElement("div")
controls.classList.add("controls");

const rowInput = document.createElement("input");
rowInput.type = "number";
rowInput.value = row;
const colInput = document.createElement("input");
colInput.type = "number";
colInput.value = col;
const gridBttn = document.createElement("button");
gridBttn.textContent = "Update grid";
gridBttn.addEventListener("click", UpdateGrid);

controls.appendChild(rowInput);
controls.appendChild(colInput);
controls.appendChild(gridBttn);

container.appendChild(controls);


CreateGrid(row, col);

function CreateGrid(r, c)
{
    for (let index = 0; index < r; index++) {
        let gridRow = document.createElement("div");

        gridRow.classList.add("row");
        for (let index = 0; index < c; index++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            gridRow.appendChild(cell);

            cell.addEventListener("mouseover", draw)
        }
        
        gridInner.appendChild(gridRow);
    }
}

function UpdateGrid()
{
    row = rowInput.value;
    col = colInput.value;

    EraseGrid();
    CreateGrid(row, col);
}

function EraseGrid()
{
    let rows = document.querySelectorAll(".row");
    rows.forEach((el) => gridInner.removeChild(el));
}

function draw(e)
{
    e.target.style.backgroundColor = "black";
}