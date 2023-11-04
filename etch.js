//creating root 
const root = document.querySelector("body");
const MAX = 100;
const COLORS = ["red", "blue", "green", "purple", "yellow"];

let row = 16;
let col = 16;
let state = "color";

//creating main container
const container = document.createElement("div");
container.classList.add("container");

//creating grid container
const gridInner = document.createElement("div");
gridInner.classList.add("inner");

container.appendChild(gridInner);
root.appendChild(container);

//adding controls
const controls = document.createElement("div")
controls.classList.add("controls");

const rowInput = document.createElement("input");
rowInput.type = "number";
rowInput.max = 100;
rowInput.min = 1;
rowInput.value = row;

const colInput = document.createElement("input");
colInput.type = "number";
colInput.max = 100;
colInput.min = 1;
colInput.value = col;

const gridBttn = document.createElement("button");
gridBttn.textContent = "Update grid";
gridBttn.addEventListener("click", UpdateGrid);

const colBttn = document.createElement("button");
colBttn.textContent = "Draw mode";
colBttn.id = "color";
colBttn.addEventListener("click", UpdateState);

const rndBttn = document.createElement("button");
rndBttn.textContent = "Random mode";
rndBttn.id = "random";
rndBttn.addEventListener("click", UpdateState);

controls.appendChild(rowInput);
controls.appendChild(colInput);
controls.appendChild(gridBttn);
controls.appendChild(colBttn);
controls.appendChild(rndBttn);
container.appendChild(controls);


CreateGrid(row, col);

function CreateGrid(r, c)
{
    gridInner.style.gridTemplateColumns = `repeat(${col}, 1fr)`
    gridInner.style.gridTemplateRows = `repeat(${row}, 1fr)`

    for (let index = 0; index < r; index++) {
        let gridRow = document.createElement("div");

        gridRow.classList.add("row");
        for (let index = 0; index < c; index++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.addEventListener("mouseover", draw)

            //gridRow.appendChild(cell);
            gridInner.appendChild(cell);
        }
        
        //gridInner.appendChild(gridRow);
    }
}

function UpdateGrid()
{
    row = rowInput.value;
    col = colInput.value;

    if(row > MAX)
    {
        row = MAX;
    }

    if(col > MAX)
    {
        col = MAX;
    }

    EraseGrid();
    CreateGrid(row, col);
}

function EraseGrid()
{
    let cells = document.querySelectorAll(".cell");
    cells.forEach((el) => gridInner.removeChild(el));
}

function draw(e)
{
    if(state == "color")
    {
        e.target.style.backgroundColor = "black";
    }
    else if(state == "random")
    {
        i = GetRandomRange(COLORS.length);
        e.target.style.backgroundColor = `${COLORS[i]}`;
    }
}

function UpdateState(e)
{
    if(e.target.id == "color")
    {
        state = "color";
    } 
    else
    {
        state = "random";
    }
}

function GetRandomRange(max)
{
    return Math.floor(Math.random() * max);
}