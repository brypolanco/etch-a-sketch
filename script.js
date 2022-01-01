function makeGrid(row, column){
    const containter = document.querySelector('#container');

    let i = 0;
    for(i = 0; i<=row; i++){
        let divRow=document.createElement('div')
        divRow.className='row';
        for(let i = 0; i<column; i++){
            let cell = document.createElement('div');
            containter.appendChild(cell).className = 'gridItem';
        }
    }

}

makeGrid(16,16);