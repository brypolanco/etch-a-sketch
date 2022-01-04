let positionClick = false;
let row;
let column;
const container = document.querySelector('#container');

function makeGrid(row=16, column=16){
    for(let i = 0; i<row; i++){
        let gridRow = document.createElement('div')
        container.appendChild(gridRow).className='row';
        for(let j = 0; j<column; j++){
            let gridItem = document.createElement('div');
            gridRow.appendChild(gridItem).className='gridItem';
        }
    }
    document.querySelectorAll('.gridItem').forEach(item=>item.addEventListener('mousedown', setDraw));
    document.querySelectorAll('.gridItem').forEach(item=>item.addEventListener('mouseover', draw));

    document.querySelectorAll('.gridItem').forEach(item=>item.addEventListener('touchstart', setDraw));
    document.querySelectorAll('.gridItem').forEach(item=>item.addEventListener('touchmove', draw));
}

makeGrid();

function setDraw(e){
    e.target.style.backgroundColor = 'purple';
    positionClick = true;
}

function draw(e){
    if(positionClick===true){
        e.target.style.backgroundColor = 'purple';
    }
    
}

function clearGrid(){
    positionClick=false;
    document.querySelectorAll('.gridItem').forEach(item=>item.style.backgroundColor='');
    document.querySelectorAll('.gridItem').forEach(item=>item.parentNode.removeChild(item));
    document.querySelectorAll('.row').forEach(item=>item.parentNode.removeChild(item));
    
    let i=0;
    do{
        if(i>0){
            alert('ERROR! Enter values within 2-100');
        }
        row = window.prompt('Enter number of rows up to 100.');
        column =  window.prompt('Enter number of columns up to 100.');
        i++;
    }
    while(!(row>1 && column>1 && row<=100 && column<=100));
    
    makeGrid(row, column);
}

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', clearGrid);