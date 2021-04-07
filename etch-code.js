// code to manage the tiles

const container = document.querySelector('#container');

var size = 16;
createTable(size);

const changeSize = document.querySelector('#changeSize');

changeSize.addEventListener('click', () => {
for (let i=0; i < size; i++) {
let row = 
document.getElementById("row");
container.removeChild(row);
}
size = prompt('Select the size of the pad:');

createTable(size);
});

function createTable(size) {
    for (let row = 0; row < size; row++) {
        let rowDiv = document.createElement('div');
        rowDiv.setAttribute("id","row");
        rowDiv.classList.add('tr');
        container.appendChild(rowDiv);
    
        for (let column = 0; column < size; column++) {
            let columnDiv = document.createElement('div');
            let r = Math.random()*255;
            let g = Math.random()*255;
            let b = Math.random()*255;
            columnDiv.classList.add('td');
            columnDiv.addEventListener('pointerenter', (event) => {
                columnDiv.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
            });
            rowDiv.appendChild(columnDiv);
        }
    }
}
