function makeGrid(row=16, column=16){
    const container = document.querySelector('#container');
    container.style.setProperty('--grid-row', row);
    container.style.setProperty('--grid-col', column);
    
    for(let i = 0; i<row*column; i++){
        let gridItem = document.createElement('div')
        container.appendChild(gridItem).className='gridItem';
    }
}

function draw(e){
    e.target.style.backgroundColor = 'purple';
}

makeGrid();

const gridItemList = document.querySelectorAll('.gridItem')
gridItemList.forEach(item=>item.addEventListener('mouseover', draw));
