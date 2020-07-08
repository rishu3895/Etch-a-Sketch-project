let userColor='black';
let gridContainer=document.querySelector('.container');

// create the grid inside the gridContainer
function createGrid(size){
    gridContainer.style.display='grid';
    gridContainer.style.gridTemplateColumns=`repeat(${size},1fr)`;
    gridContainer.style.gridTemplateRows=`repeat(${size},1fr)`;
    createElement(size);
}

// create and initial grid of size 10
createGrid(10);

// creating grid squares or divisions
function createElement(size){
    let userClick = false;
    for(let i=0;i<size*size;i++){
        let newDiv=document.createElement('div');
        newDiv.classList.add('gridSquare');
        gridContainer.appendChild(newDiv);

        newDiv.addEventListener('mousedown',()=>{
            userClick=true;
            console.log(userClick);
        });
        newDiv.addEventListener('mouseup',()=>{
            userClick=false;
            console.log(userClick);
        });

        newDiv.addEventListener('mouseover',()=>{
            if(userClick===true){
                if(userColor==='black'){
                    newDiv.style.backgroundColor='black';
                }
                else if(userColor==='red'){
                    newDiv.style.backgroundColor="red";
                }
                else if(userColor==='white'){
                    newDiv.style.backgroundColor='white';
                }
                else if(userColor==='rainbow'){
                    let red=Math.floor(Math.random()*255)+1;
                    let green=Math.floor(Math.random()*255)+1;
                    let blue=Math.floor(Math.random()*255)+1;
                    newDiv.style.backgroundColor=`rgb(${red},${green},${blue})`;
                }
            }            
        });
    }
}

// adding functionality to clear button 
document.querySelector('#clear').onclick=function(){
    let gridSquare=document.querySelectorAll('.gridSquare');
    gridSquare.forEach(element => {
        element.style.backgroundColor='white';
    });    
}

// setting userColor
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

// change grid size

function deleteGrid(){
    let gridSquare=document.querySelectorAll('.gridSquare');
    let container=document.querySelector('.container');
    gridSquare.forEach(element => {
        container.removeChild(container.lastChild);
    });
}
document.querySelector('#change-grid-size').onclick=function(){
    let size=prompt('Enter the size of the sketch area between 1 and 128');
    if(size>=1 && size<=128){
        deleteGrid();
        createGrid(size);
    }
    else{
        alert('enter the correct size of the grid');   
    }
}




