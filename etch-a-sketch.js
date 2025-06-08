const button = document.getElementById('button');
const container = document.getElementById('container');
let gridSize = 32;

function createGrid(size) {
    container.innerHTML = "";
    const cellSize = 640 / size;
    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('grid-cell');
        cell.style.width = `${cellSize}px`;
        cell.style.height = `${cellSize}px`;
        cell.addEventListener("mouseover", function() {
            cell.style.backgroundColor = "black";
        });
        container.appendChild(cell);
}
}

button.addEventListener("click", function() {
    let input = prompt ("Please enter your wished grid size.");
    gridSize = Number(input);
    createGrid(gridSize);
});

container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.width = '640px'; 
container.style.height = '640px';  

createGrid(gridSize);