let userColor = 'black';
let gridContainer = document.getElementById('grid-container');

function createGrid(size) {
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = `repeat(${size},1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size},1fr)`;
    createGridSquare(size);
}
createGrid(32);
function createGridSquare(size) {
    let userClick = false;
    for (let i = 0; i < size * size; i++) {
        let gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridContainer.appendChild(gridSquare);

        gridSquare.addEventListener('mousedown', () => {
            userClick = true;
            console.log(userClick);
        });
        gridSquare.addEventListener('mouseup', () => {
            userClick = false;
            console.log(userClick);
        });
        gridSquare.addEventListener('mouseover', () => {
            if (userClick == true) {
                if (userColor === 'black') {
                    gridSquare.style.backgroundColor = 'black';
                }
                else if (userColor === 'red') {
                    gridSquare.style.backgroundColor = 'red';
                }
                else if (userColor === 'white') {
                    gridSquare.style.backgroundColor = 'white';
                }
                else if (userColor === 'rainbow') {
                    let red = Math.floor(Math.random() * 256) + 1;
                    let green = Math.floor(Math.random() * 256) + 1;
                    let blue = Math.floor(Math.random() * 256) + 1;
                    gridSquare.style.backgroundColor = `rgb(${red},${green},${blue})`;
                }
            }
        });
    }
}
document.querySelector('#clear').addEventListener('click', ()=>{
    console.log('function found');
    let gridSquare=document.querySelectorAll('.grid-square');
    gridSquare.forEach(element => {
        element.style.backgroundColor='white';
        console.log('another found');
    });
});



document.querySelector('#black').addEventListener('click',()=>{
    userColor='black';
});
document.querySelector('#white').addEventListener('click',()=>{
    userColor='white';
});
document.querySelector('#red').addEventListener('click',()=>{
    userColor='red';
});
document.querySelector('#all-colors').addEventListener('click',()=>{
    userColor='rainbow';
});

document.querySelector('#change-grid-size').addEventListener('click',()=>{
    let grid=document.querySelectorAll('.grid-square');
    grid.forEach(element => {
        gridContainer.removeChild(gridContainer.lastChild);
    }); 

    let size=prompt('enter the size between 1 and 128');
    createGrid(size);
});


