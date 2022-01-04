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
}

makeGrid();

function setDraw(e){
    e.target.style.backgroundColor = 'purple';
    positionClick = true;
    console.log(`positionClick in setDraw: ${positionClick}`);
}

function draw(e){
    console.log(`positionClick in draw function b4 if: ${positionClick}`);
    if(positionClick===true){
        e.target.style.backgroundColor = 'purple';
    }
    
}

function clearGrid(){
    gridItemList.forEach(item=>item.style.backgroundColor='');
    positionClick=false;
    console.log(`positionClick in clearGrid: ${positionClick}`);
    gridItemList.forEach(item=>item.remove());
    gridRowList.forEach(item=>item.remove());
    
    row = window.prompt('Enter number of rows up to 100.');
    column =  window.prompt('Enter number of columns up to 100.');
    makeGrid(row, column);
}



const gridRowList = document.querySelectorAll('.row');
console.log('Row List');
console.log(gridRowList);
const gridItemList = document.querySelectorAll('.gridItem');
gridItemList.forEach(item=>item.addEventListener('mousedown', setDraw));
gridItemList.forEach(item=>item.addEventListener('mouseover', draw));

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', clearGrid);

