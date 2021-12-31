function makeGrid(row, column){
    const containter = document.querySelector('#container');
    const div = document.createElement('div');
    div.className='row';

    let divList = document.querySelectorAll('.row');

    //Create div for each row
    for(let i = 0; i<=row; i++){
        divList[i]=document.createElement('div')
        //divList[i].className='row';
    }

    //Append div of each row
    for (let i;i<divList.length;i++){
        containter.appendChild(divList[i]);
    }

}

makeGrid(16,16);